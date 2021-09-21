import ERC20_INTERFACE from 'config/abi/erc20'
import useKardiachain from 'hooks/useKardiachain'
import { useMemo } from 'react'
import { useAllTokens } from 'hooks/Tokens'
import { useMulticallContract } from 'hooks/useContract'
import { isAddress } from 'utils/index'
import { useSingleContractMultipleData, useMultipleContractSingleData } from 'store/multicall/hooks'

/**
 * Returns a map of the given addresses to their eventually consistent BNB balances.
 */
export function useBNBBalances(uncheckedAddresses) {
  const multicallContract = useMulticallContract()

  const addresses = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a) => a !== false)
            .sort()
        : [],
    [uncheckedAddresses],
  )

  const results = useSingleContractMultipleData(
    multicallContract,
    'getEthBalance',
    addresses.map((address) => [address]),
  )

  return useMemo(
    () =>
      addresses.reduce((memo, address, i) => {
        const value = results?.[i]?.result?.[0]
        if (value) memo[address] = value.toString()
        return memo
      }, {}),
    [addresses, results],
  )
}

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalancesWithLoadingIndicator(address, tokens) {
  const validatedTokens = useMemo(() => tokens?.filter((t) => isAddress(t?.address) !== false) ?? [], [tokens])

  const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])

  const balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20_INTERFACE, 'balanceOf', [address])

  const anyLoading = useMemo(() => balances.some((callState) => callState.loading), [balances])

  return [
    useMemo(
      () =>
        address && validatedTokens.length > 0
          ? validatedTokens.reduce((memo, token, i) => {
              const value = balances?.[i]?.result?.[0]
              const amount = value ? value.toString() : undefined
              if (amount) {
                memo[token.address] = amount
              }
              return memo
            }, {})
          : {},
      [address, validatedTokens, balances],
    ),
    anyLoading,
  ]
}

export function useTokenBalances(address, tokens) {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0]
}

// get the balance for a single token/account combo
export function useTokenBalance(account, token) {
  const tokenBalances = useTokenBalances(account, [token])
  if (!token) return undefined
  return tokenBalances[token.address]
}

export function useCurrencyBalances(account, currencies) {
  const tokenBalances = useTokenBalances(account, currencies)

  return useMemo(
    () =>
      currencies?.map((currency) => {
        if (!account || !currency) return undefined
        return tokenBalances[currency.address]
      }) ?? [],
    [account, currencies, tokenBalances],
  )
}

export function useCurrencyBalance(account, currency) {
  return useCurrencyBalances(account, [currency])[0]
}

// mimics useAllBalances
export function useAllTokenBalances() {
  const { account } = useKardiachain()
  const allTokens = useAllTokens()
  const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
  const balances = useTokenBalances(account ?? undefined, allTokensArray)
  return balances ?? {}
}
