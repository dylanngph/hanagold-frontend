import axios from 'axios'
import tokens from 'constants/tokens';
import { getParameterCaseInsensitive } from 'utils/index';

export async function getPrices() {
  const prices = {}

  let res = await axios.get('https://kai.kshark.io/api')
  for (const [key, v] of Object.entries(res.data.data)) {
    if (v.price) prices[key.toLowerCase()] = +v.price
  }

  return {
    ...prices,
    [tokens.dragon.address] : getParameterCaseInsensitive(prices, tokens.defily.address)
  }
}
