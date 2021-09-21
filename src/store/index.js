import { configureStore } from '@reduxjs/toolkit'

import blockReducer from './block'
import farmsReducer from './farms'
import poolsReducer from './pools'
import pricesReducer from './prices'
import tradeReducer from './trade'
import farmsOutsideReducer from './farmsOutside'

import multicall from './multicall/reducer'
import application from './application/reducer'
import swap from './swap/reducer'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    block: blockReducer,
    farms: farmsReducer,
    farmsOutside: farmsOutsideReducer,
    prices: pricesReducer,
    pools: poolsReducer,
    trade: tradeReducer,

    swap,
    application,
    multicall,
  },
})

export default store
