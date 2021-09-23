import { parseBytes32String } from '@ethersproject/strings'
import tokens from 'constants/tokens';
import { useMemo } from 'react'
import { arrayify } from 'ethers/lib/utils'
import { useSelector } from 'react-redux';

export function useAllTokens() {
  const allTokens = useSelector((state) => state.trade.data)

  return useMemo(() => {
    return allTokens
  }, [allTokens])
}

// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/

function parseStringOrBytes32(str, bytes32, defaultValue) {
  return str && str.length > 0
    ? str
    : // need to check for proper bytes string and valid terminator
    bytes32 && BYTES32_REGEX.test(bytes32) && arrayify(bytes32)[31] === 0
    ? parseBytes32String(bytes32)
    : defaultValue
}

// undefined if invalid or does not exist
// null if loading
// otherwise returns the token
export function useToken(tokenAddress) {
  const allTokens = useAllTokens()

  return useMemo(()=> {
    const token =  tokenAddress === tokens.kusd.address ? tokens.kusd : allTokens.find((token) => token?.address === tokenAddress)
    const isStockToken = tokenAddress !== tokens.kusd.address

    return {
      ...token,
      symbol: isStockToken ? token?.market?.base : token.symbol,
      src: isStockToken ? token?.thumbnail : `/tokens/${token?.symbol.toLowerCase()}.png`
    }

  }, [allTokens, tokenAddress])
}

export function useCurrency(currencyId) {
  // const isBNB = currencyId?.toUpperCase() === 'KAI'
  // const token = useToken(isBNB ? undefined : currencyId)
  // return isBNB ? ETHER : token
  const token = useToken(currencyId)
  return token
}
