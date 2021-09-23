import address from 'constants/contracts'
import farmsConfig from 'constants/farms'
import tokens from 'constants/tokens'
import { getFarms } from 'store/farms/helpers';

const fetchFarms = async (pricesFetch) => {
  return await getFarms(farmsConfig, address.masterChef, pricesFetch, tokens.ltd)
}

export default fetchFarms
