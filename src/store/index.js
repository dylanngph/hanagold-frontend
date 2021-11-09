import { configureStore } from '@reduxjs/toolkit'
import { updateVersion } from './global/actions'

import blockReducer from './block'
import farmsReducer from './farms'
import poolsReducer from './pools'
import pricesReducer from './prices'
import tradeReducer from './trade'
import farmsOutsideReducer from './farmsOutside'
import user from './user/reducer'
import transactions from './transactions/reducer'
import lists from './lists/reducer'

import multicall from './multicall/reducer'
import application from './application/reducer'
import swap from './swap/reducer'
import mint from './mint/reducer'
import burn from './burn/reducer'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    block: blockReducer,
    farms: farmsReducer,
    farmsOutside: farmsOutsideReducer,
    prices: pricesReducer,
    pools: poolsReducer,
    trade: tradeReducer,
    user,
    transactions,
    lists,
    swap,
    mint,
    burn,
    application,
    multicall,
  },
})

store.dispatch(updateVersion())

export default store
