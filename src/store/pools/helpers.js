import BigNumber from 'bignumber.js'

export const transformPool = (pool) => {
  const { totalStaked, stakingLimit, poolLimit, ...rest } = pool

  return {
    ...rest,
    totalStaked: new BigNumber(totalStaked),
    stakingLimit: new BigNumber(stakingLimit),
    poolLimit: new BigNumber(poolLimit),
  }
}