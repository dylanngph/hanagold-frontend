import address from 'constants/contracts'
import { usePrices } from 'store/hooks'
import { getParameterCaseInsensitive } from 'utils/index'

export const usePrimaryPrice = () => {
  const prices = usePrices()

  return getParameterCaseInsensitive(prices, address.hng)
}

export const usePriceByTokenAddress = (address) => {
  const prices = usePrices()
  return getParameterCaseInsensitive(prices, address);
}

export const useKaiPrice = () => {
  const prices = usePrices()

  return getParameterCaseInsensitive(prices, address.wKai)
}
