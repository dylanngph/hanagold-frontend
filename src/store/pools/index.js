import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { poolsConfig, poolsV2Config } from 'constants/pools';
import {
  fetchPoolsLimits,
  fetchPoolsStakingLimits,
  fetchPoolsTotalStaking,
  fetchPoolsBlockLimits,
  fetchPoolsTokenPerBlock
} from 'store/pools/fetchPools';
import { fetchPoolUser, fetchPoolV2User } from 'store/pools/fetchPoolsUser';
import { getPoolApr, getPoolAprV2 } from 'utils/apr';
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import { getBalanceNumber } from 'utils/formatBalance'
import { getParameterCaseInsensitive } from 'utils/index'
import { getPrices } from 'utils/priceHelpers'

const initUserData = {
  allowance: '0',
  tokenBalance: '0',
  stakedBalance: '0',
  earnings: '0',
  earningsTokenBalance: '0',
}

const initialState = {
  data: [...poolsConfig, ...poolsV2Config],
  userData: {},
}

export const poolsSlice = createSlice({
  name: 'pools',
  initialState,
  reducers: {
    setPoolsPublicData: (state, action) => {
      const livePoolsData = action.payload
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsData.find((entry) => entry.sousId === pool.sousId)
        return { ...pool, ...livePoolData }
      })
    },
    setUserData: (state, action) => {
      state.userData[action.payload.sousId] = {
        ...state.userData[action.payload.sousId],
        userDataLoaded: true,
        ...action.payload,
      }
    },
  },
})

export const fetchPoolsPublicDataAsync = (currentBlock) => async (dispatch, getState) => {
  const blockLimits = await fetchPoolsBlockLimits()
  const totalStakings = await fetchPoolsTotalStaking(poolsConfig)
  const rewards = await fetchPoolsTokenPerBlock()
  const prices = getState()?.prices?.data || (await getPrices())

  const liveData = poolsConfig.map((pool) => {
    const blockLimit = blockLimits.find((entry) => entry.sousId === pool.sousId)
    const totalStaking = totalStakings.find((entry) => entry.sousId === pool.sousId)
    const reward = rewards.find((entry) => entry.sousId === pool.sousId)

    const tokenPerBlock = reward.tokenPerBlock / 100 
    // const tokenPerBlock = pool.sousId === 4 ? '0.05' : pool?.tokenPerBlock
    // const isPoolEndBlockExceeded = currentBlock > 0 && currentBlock > Number(pool.endBlock)
    const isPoolEndBlockExceeded = currentBlock > 0 && currentBlock > Number(blockLimit.endBlock)
    // const isPoolFinished = pool.isFinished || isPoolEndBlockExceeded
    const isPoolFinished = isPoolEndBlockExceeded || pool.isFinished    
    const stakingTokenPrice = getParameterCaseInsensitive(prices, pool.stakingToken.address) || 0
    const earningTokenPrice = getParameterCaseInsensitive(prices, pool.earningToken.address) || 0

    const {apr, userDailyRewards} = !isPoolFinished
        ? getPoolApr(
            stakingTokenPrice,
            earningTokenPrice,
            getBalanceNumber(new BigNumber(totalStaking.totalStaked), pool.stakingToken.decimals),
            parseFloat(tokenPerBlock),
            pool.earningToken.decimals,
        )
        : 0
    const stakedTvl = new BigNumber(
        new BigNumber(totalStaking.totalStaked).div(BIG_TEN.pow(pool.stakingToken.decimals)),
    )
        .times(new BigNumber(stakingTokenPrice))
        .toJSON()

    return {
      ...blockLimit,
      ...totalStaking,
      stakingTokenPrice,
      earningTokenPrice,
      apr,
      stakedTvl,
      isFinished: isPoolFinished,
      userDailyRewards
    }
  })

  dispatch(setPoolsPublicData(liveData))
}

export const fetchPoolsV2PublicDataAsync = (currentBlock) => async (dispatch, getState) => {
  const totalStakings = await fetchPoolsTotalStaking(poolsV2Config)
  const prices = getState()?.prices?.data || (await getPrices())

  const liveData = poolsV2Config.map((pool) => {
    const totalStaking = totalStakings.find((entry) => entry.sousId === pool.sousId)
    const tokensPerBlock = pool?.tokensPerBlock
    const isPoolEndBlockExceeded = currentBlock > 0 && currentBlock > Number(pool.endBlock)
    const isPoolFinished = pool.isFinished || isPoolEndBlockExceeded

    const stakingTokenPrice = getParameterCaseInsensitive(prices, pool.stakingToken.address) || 0

    const earningTokensPrice = pool.earningTokens.map(
        (earningToken) => getParameterCaseInsensitive(prices, earningToken.address) || 0,
    )

    const {apr, userDailyRewards} = !isPoolFinished
        ? getPoolAprV2(
            stakingTokenPrice,
            earningTokensPrice,
            getBalanceNumber(new BigNumber(totalStaking.totalStaked), pool.stakingToken.decimals),
            tokensPerBlock,
            pool.earningTokens,
        )
        : 0

    const stakedTvl = new BigNumber(
        new BigNumber(totalStaking.totalStaked).div(BIG_TEN.pow(pool.stakingToken.decimals)),
    )
        .times(new BigNumber(stakingTokenPrice))
        .toJSON()

    return {
      ...totalStaking,
      stakingTokenPrice,
      earningTokensPrice,
      apr,
      stakedTvl,
      userDailyRewards,
      isFinished: isPoolFinished,
    }
  })

  dispatch(setPoolsPublicData(liveData))
}


export const fetchPoolsStakingLimitsAsync = () => async (dispatch, getState) => {
  try {
    const poolsWithStakingLimit = getState()
        .pools.data.filter(({ stakingLimit }) => stakingLimit !== null && stakingLimit !== undefined)
        .map((pool) => pool.sousId)

    const stakingLimits = await fetchPoolsStakingLimits(poolsWithStakingLimit)

    const poolLimits = await fetchPoolsLimits()

    const stakingLimitData = [...poolsConfig, ...poolsV2Config].map((pool) => {
      if (poolsWithStakingLimit.includes(pool.sousId)) {
        return { sousId: pool.sousId }
      }
      const stakingLimit = stakingLimits[pool.sousId] || BIG_ZERO
      const poolLimit = poolLimits[pool.sousId] || BIG_ZERO
      return {
        sousId: pool.sousId,
        stakingLimit: stakingLimit.toJSON(),
        poolLimit: poolLimit.toJSON(),
      }
    })

    dispatch(setPoolsPublicData(stakingLimitData))
  } catch (e) {
    console.log(e)
  }
}

export const fetchPoolUserDataAsync = (account, pool) => async (dispatch) => {
  try {
    let res = {}
    if (pool.isV2) {
      res = await fetchPoolV2User(account, pool)
    } else {
      res = await fetchPoolUser(account, pool)
    }

    dispatch(
        setUserData({
          sousId: pool.sousId,
          ...res,
        }),
    )
  } catch (e) {
    dispatch(
        setUserData({
          sousId: pool.sousId,
          ...initUserData,
        }),
    )
  }
}

// Actions
export const { setPoolsPublicData, setUserData } = poolsSlice.actions
export default poolsSlice.reducer
