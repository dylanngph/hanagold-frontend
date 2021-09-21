import tokens from 'constants/tokens';
import { useCurrency } from 'hooks/Tokens';
import useKardiachain from 'hooks/useKardiachain';
import { useCurrencyBalances } from 'hooks/wallet';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, replaceSwapState, selectCurrency, switchCurrencies, typeInput } from 'store/swap/actions';

export function useSwapState() {
  return useSelector((state) => state.swap)
}

export function useSwapActionHandlers() {
  const dispatch = useDispatch()

  const onCurrencySelection = useCallback(
      (field, currency) => {
        dispatch(
            selectCurrency({
              field,
              currencyId: currency instanceof Token ? currency.address : currency === ETHER ? 'KAI' : '',
            }),
        )
      },
      [dispatch],
  )

  const onSwitchTokens = useCallback(() => {
    dispatch(switchCurrencies())
  }, [dispatch])

  const onUserInput = useCallback(
      (field, typedValue) => {
        dispatch(typeInput({ field, typedValue }))
      },
      [dispatch],
  )

  return {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
  }
}

// from the current swap inputs, compute the best trade and return it.
export function useDerivedSwapInfo() {
  const { account } = useKardiachain()

  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()

  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)
  const to = account ?? null

  const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [
    inputCurrency ?? undefined,
    outputCurrency ?? undefined,
  ])

  console.log('relevantTokenBalances');
  console.log(relevantTokenBalances);

  const currencyBalances = {
    [Field.INPUT]: relevantTokenBalances[0],
    [Field.OUTPUT]: relevantTokenBalances[1],
  }

  const currencies = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  let inputError
  if (!account) {
    inputError = 'Connect Wallet'
  }

  // if (!parsedAmount) {
  //   inputError = inputError ?? 'Enter an amount'
  // }

  if (!currencies[Field.INPUT] || !currencies[Field.OUTPUT]) {
    inputError = inputError ?? 'Select a token'
  }

  // compare input balance to max input based on version
  const [balanceIn, amountIn] = [
    currencyBalances[Field.INPUT],
    // slippageAdjustedAmounts ? slippageAdjustedAmounts[Field.INPUT] : null,
  ]

  // if (balanceIn && amountIn && balanceIn.lessThan(amountIn)) {
  //   inputError = `Insufficient ${amountIn.currency.symbol} balance`
  // }

  return {
    currencies,
    currencyBalances,
    // parsedAmount,
    // v2Trade: v2Trade ?? undefined,
    inputError,
  }
}

export const useDefaultsFromTrade = (trade) => {
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(
        replaceSwapState({
          typedValue: '0',
          field: Field.OUTPUT,
          inputCurrencyId: tokens.kusd.address,
          outputCurrencyId: trade.address,
          recipient: null,
        }),
    )

  }, [dispatch, trade.address])
}