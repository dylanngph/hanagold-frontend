import { Pair, ETHER, Token } from 'kshark-sdk'

export function currencyId(currency) {
  if (currency === ETHER) return 'KAI'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export function pairId(currency) {
  if (currency instanceof Pair) return currency.liquidityToken.address
  throw new Error('invalid pair')
}

export default currencyId
