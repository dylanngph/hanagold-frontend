import { createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'constants/farms'
import fetchFarm from 'store/farms/fetchFarm'
import {
  fetchFarmUser,
} from 'store/farms/fetchFarmUser';
import { setPricesData } from 'store/prices/index'

const initUserData = {
  allowance: '0',
  tokenBalance: '0',
  stakedBalance: '0',
  earnings: '0',
}

const initialState = {
  data: farmsConfig,
  userData: {},
}

export const farmsSlice = createSlice({
  name: 'farms',
  initialState,
  reducers: {
    setFarmsData: (state, action) => {
      state.data = action.payload
    },
    setUserData: (state, action) => {
      state.userData[action.payload.pid] = {
        ...state.userData[action.payload.pid],
        userDataLoaded: true,
        ...action.payload,
      }
    },
  },
})

// async action

export const fetchFarmsDataAsync = () => async (dispatch, getState) => {
  try {
    const res = await fetchFarm(getState().prices.data)
    dispatch(setFarmsData(res.farms))
    dispatch(setPricesData(res.prices))
  } catch (error) {
    console.log(error)
  }
}

export const fetchFarmUserDataAsync = (account, farm) => async (dispatch) => {
  try {
  const res = await fetchFarmUser(account, farm)
    dispatch(
      setUserData({
        pid: farm.pid,
        ...res
      }),
    )
  } catch (e) {
    dispatch(
      setUserData({
        pid: farm.pid,
        ...initUserData,
      }),
    )
  }
}

// Actions
export const { setFarmsData, setUserData } = farmsSlice.actions
export default farmsSlice.reducer
