import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTradeDataAsync } from 'store/trade/index';

export const useTrade = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTradeDataAsync())

    setInterval(()=>{
      dispatch(fetchTradeDataAsync());
    },5000)
  }, [dispatch]);

  return useSelector((state) => state.trade.data);
};