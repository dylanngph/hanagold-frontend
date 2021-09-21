import { createSlice } from '@reduxjs/toolkit'
import { fetchTrade } from 'store/trade/fetchTradeData';

const initialState = {
  data: [],
}

export const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    setTradeData: (state, action) => {
      state.data = action.payload
    },
  },
})

// async action

export const fetchTradeDataAsync = () => async (dispatch) => {
  try {
    const trade = await fetchTrade()

    dispatch(setTradeData(trade))
  } catch (error) {}
}

// Actions
export const { setTradeData } = tradeSlice.actions
export default tradeSlice.reducer
