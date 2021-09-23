import address from 'constants/contracts'
import  { farmsOutsideConfig } from 'constants/farms';
import tokens from 'constants/tokens'
import { getFarms } from 'store/farms/helpers';

const fetchFarms = async (pricesFetch) => {
  return await getFarms(farmsOutsideConfig, address.masterChefDfl, pricesFetch, tokens.defily)
}

export default fetchFarms
