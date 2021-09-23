import { createSlice } from '@reduxjs/toolkit'
import { farmsOutsideConfig } from 'constants/farms';
import fetchFarm from 'store/farmsOutside/fetchFarm';
import { fetchFarmUser } from 'store/farmsOutside/fetchFarmUser';
import { setPricesData } from 'store/prices/index'

const initUserData = {
  allowance: '0',
  tokenBalance: '0',
  stakedBalance: '0',
  earnings: '0',
}

const initialState = {
  data: farmsOutsideConfig,
  userData: {},
}

export const farmsSlice = createSlice({
  name: 'farmsOutside',
  initialState,
  reducers: {
    setFarmsOutsideData: (state, action) => {
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

export const fetchFarmsOutsideDataAsync = () => async (dispatch, getState) => {
  try {
    const res = await fetchFarm(getState().prices.data)
    dispatch(setFarmsOutsideData(res.farms))
    dispatch(setPricesData(res.prices))
  } catch (error) {
    console.log(error)
  }
}

export const fetchFarmOutsideUserDataAsync = (account, farm) => async (dispatch) => {
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
export const { setFarmsOutsideData, setUserData } = farmsSlice.actions
export default farmsSlice.reducer
