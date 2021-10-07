import BigNumber from 'bignumber.js';
import farmsConfig, { farmsOutsideConfig } from 'constants/farms';
import { poolsConfig, poolsV2Config } from 'constants/pools';
import useKardiachain from 'hooks/useKardiachain';
import useRefresh from 'hooks/useRefresh';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setBlock } from 'store/block/index';
import { fetchFarmsDataAsync, fetchFarmUserDataAsync } from 'store/farms/index';
import { fetchFarmOutsideUserDataAsync, fetchFarmsOutsideDataAsync } from 'store/farmsOutside/index';
import { transformPool } from 'store/pools/helpers';
import {
  fetchPoolsPublicDataAsync,
  fetchPoolsStakingLimitsAsync,
  fetchPoolsV2PublicDataAsync,
  fetchPoolUserDataAsync
} from 'store/pools/index';
import { fetchPricesDataAsync } from 'store/prices/index';
import { BIG_ZERO } from 'utils/bigNumber';
import { getBlockNumber } from 'utils/index';

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      const blockNumber = await getBlockNumber()
      dispatch(fetchPoolsPublicDataAsync(blockNumber))
      dispatch(fetchPoolsV2PublicDataAsync(blockNumber))
    }

    dispatch(fetchFarmsDataAsync())
    dispatch(fetchFarmsOutsideDataAsync())
    dispatch(fetchPoolsStakingLimitsAsync())

    fetchPoolsPublicData()
  }, [dispatch, slowRefresh])
}

export const useFetchUserData = (lpAddress) => {
  // const { lpAddress } = useParams()
  const dispatch = useDispatch()
  const { account } = useKardiachain()
  const { slowRefresh } = useRefresh()
  const farm = useMemo(() => {
    return farmsConfig.find((farm) => {
      return farm?.lpAddress.toLowerCase() === lpAddress.toLowerCase()
    })
  }, [lpAddress])

  useEffect(() => {
    if (account && farm) {
      dispatch(fetchFarmUserDataAsync(account, farm))
    }
  }, [slowRefresh, account, farm, dispatch])
}

export const useFetchUserDataOutside = () => {
  const { lpAddress } = useParams()
  const dispatch = useDispatch()
  const { account } = useKardiachain()
  const { slowRefresh } = useRefresh()
  const farm = useMemo(() => {
    return farmsOutsideConfig.find((farm) => {
      return farm?.lpAddress.toLowerCase() === lpAddress.toLowerCase()
    })
  }, [lpAddress])

  useEffect(() => {
    if (account && farm) {
      dispatch(fetchFarmOutsideUserDataAsync(account, farm))
    }
  }, [slowRefresh, account, farm, dispatch])
}

export const usePollBlockNumber = () => {
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()

  const fetchBlock = async () => {
    const blockNumber = await getBlockNumber()
    dispatch(setBlock(blockNumber))
  }

  useEffect(() => {
    fetchBlock()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchBlock()
    }, 6000)

    dispatch(fetchPricesDataAsync())

    return () => clearInterval(interval)
  }, [dispatch, fastRefresh])
}

// Block
export const useBlock = () => {
  return useSelector((state) => state.block)
}

export const useCurrentBlock = () => {
  return useSelector((state) => state.block.currentBlock)
}

// farms

export const useFarms = () => {
  const farms = useSelector((state) => state.farms.data)
  return farms
}

export const useFarmFromLpAddress = (lpAddress) => {
  const farms = useFarms()
  const farm = farms.find((farm) => {
    console.log(farm?.lpAddress, lpAddress)
    return farm?.lpAddress.toLowerCase() === lpAddress.toLowerCase()
  })

  return farm
}

export const useFarmUser = (pid) => {
  const userData = useSelector((state) => state.farms.userData?.[pid])

  return {
    allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
    tokenBalance: userData ? new BigNumber(userData.tokenBalance) : BIG_ZERO,
    stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
    earnings: userData ? new BigNumber(userData.earnings) : BIG_ZERO,
    userDataLoaded: userData?.userDataLoaded || false,
  }
}

// farmOutside

// farms

export const useFarmsOutside = () => {
  const farms = useSelector((state) => state.farmsOutside.data)
  return farms
}

export const useFarmOutsideFromLpAddress = (lpAddress) => {
  const farms = useFarmsOutside()
  const farm = farms.find((farm) => {
    return farm?.lpAddress.toLowerCase() === lpAddress.toLowerCase()
  })

  return farm
}

export const useFarmOutsideUser = (pid) => {
  const userData = useSelector((state) => state.farmsOutside.userData?.[pid])

  return {
    allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
    tokenBalance: userData ? new BigNumber(userData.tokenBalance) : BIG_ZERO,
    stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
    earnings: userData ? new BigNumber(userData.earnings) : BIG_ZERO,
    userDataLoaded: userData?.userDataLoaded || false,
  }
}

// pools

export const useFetchPoolUserData = () => {
  const { pid } = useParams()
  const dispatch = useDispatch()
  const { account } = useKardiachain()
  const { slowRefresh } = useRefresh()
  const pool = useMemo(() => {
    return [...poolsConfig, ...poolsV2Config].find((p) => {
      return p.sousId === +pid
    })
  }, [pid])

  useEffect(() => {
    if (account && pool) {
      dispatch(fetchPoolUserDataAsync(account, pool))
    }
  }, [dispatch, slowRefresh, account, pool])
}

export const usePools = () => {
  const pools = useSelector((state) => state.pools.data)

  return pools.map(transformPool)
}

export const usePoolFromPid = (sousId) => {
  const pool = useSelector((state) => state.pools.data.find((p) => p.sousId === +sousId))

  if (!pool) return undefined

  return transformPool(pool)
}

export const usePoolUser = (sousId, isV2) => {
  const pool = usePoolFromPid(sousId)
  const userData = useSelector((state) => state.pools.userData?.[sousId])

  if (isV2) {
    return {
      allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
      stakingTokenBalance: userData ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO,
      stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
      earnings: userData
          ? userData?.earnings?.map((earning) => new BigNumber(earning))
          : pool?.earningTokens.map((_) => BIG_ZERO),
      earningsTokenBalance: userData
          ? userData?.earningsTokenBalance?.map((earningBalance) => new BigNumber(earningBalance))
          : pool?.earningTokens.map((_) => BIG_ZERO),
      userDataLoaded: userData?.userDataLoaded || false,
      lastStakingBlock: userData ? +userData.lastStakingBlock : 0,
    }
  }

  return {
    allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
    stakingTokenBalance: userData ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO,
    stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
    earnings: userData ? new BigNumber(userData.earnings) : BIG_ZERO,
    earningsTokenBalance: userData ? new BigNumber(userData.earningsTokenBalance) : BIG_ZERO,
    userDataLoaded: userData?.userDataLoaded || false,
  }
}

// prices

export const usePrices = () => {
  const prices = useSelector((state) => state.prices.data)
  return prices
}