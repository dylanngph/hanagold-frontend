import marketsApi from 'api/tradeApi';

export const fetchTrade = async () => {
  return  await marketsApi.get()
}