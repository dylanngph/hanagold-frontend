import address from 'constants/contracts'
import { usePrices } from 'store/hooks'
import { getParameterCaseInsensitive } from 'utils/index'

export const useKscPrice = () => {
  const prices = usePrices()

  return getParameterCaseInsensitive(prices, address.ltd)
}

export const usePriceByTokenAddress = (address) => {
  const prices = usePrices()
  return getParameterCaseInsensitive(prices, address);
}

export const useKaiPrice = () => {
  const prices = usePrices()

  return getParameterCaseInsensitive(prices, address.wKai)
}
