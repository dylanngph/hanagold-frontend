import BigNumber from 'bignumber.js';
import { KAI_BLOCK_PER_YEAR, KAI_BLOCK_TIME } from 'config/index';
import { BIG_TEN } from 'utils/bigNumber';

export function getFarmApr(totalAllocPoints, allocPoints, rewardsPerBlock, rewardPrice, stakedTvl) {
  const rewardsPerWeek = rewardsPerBlock.times(604800).div(KAI_BLOCK_TIME);
  const poolWeight = new BigNumber(allocPoints).div(totalAllocPoints);
  const userDailyRewards = rewardsPerBlock.times(new BigNumber(86400).div(KAI_BLOCK_TIME)).times(poolWeight);

  const poolRewardsPerWeek = poolWeight.times(rewardsPerWeek);
  const usdPerWeek = poolRewardsPerWeek.times(new BigNumber(rewardPrice));

  const weeklyAPR = usdPerWeek.div(new BigNumber(stakedTvl)).times(100);

  const monthlyAPR = weeklyAPR.times(30 / 7);
  const yearlyAPR = weeklyAPR.times(365 / 7);
  return {
    weeklyAPR: weeklyAPR.isNaN() || !weeklyAPR.isFinite() ? '0' : weeklyAPR.toFixed(2),
    yearlyAPR: yearlyAPR.isNaN() || !yearlyAPR.isFinite() ? '0' : yearlyAPR.toFixed(2),
    monthlyAPR: monthlyAPR.isNaN() || !monthlyAPR.isFinite() ? '0' : monthlyAPR.toFixed(2),
    userDailyRewards: userDailyRewards.isNaN() ? '0' : userDailyRewards.toJSON()
  };
}

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (stakingTokenPrice, rewardTokenPrice, totalStaked, tokenPerBlock, decimalTokenEarning) => {
  const userDailyRewards = new BigNumber(tokenPerBlock).div(BIG_TEN.pow(decimalTokenEarning)).times(new BigNumber(86400).div(KAI_BLOCK_TIME));

  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice)
      .times(new BigNumber(tokenPerBlock).div(BIG_TEN.pow(decimalTokenEarning)))
      .times(KAI_BLOCK_PER_YEAR);
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked);
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);
  return {
    apr: apr.isNaN() || !apr.isFinite() ? null : apr.toNumber(),
    userDailyRewards: userDailyRewards.isNaN() ? '0' : userDailyRewards.toJSON()
  };
};

export const getPoolAprV2 = (stakingTokenPrice, rewardTokensPrice, totalStaked, tokensPerBlock, earningTokens) => {
  const totalRewardsPricePerYear = earningTokens.reduce((acc, earningToken, index) => {
    const totalRewardPricePerYear = new BigNumber(rewardTokensPrice[index])
        .times(new BigNumber(tokensPerBlock[index]).div(BIG_TEN.pow(earningToken.decimals)))
        .times(KAI_BLOCK_PER_YEAR)

    return acc.plus(totalRewardPricePerYear)
  }, new BigNumber(0))

  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardsPricePerYear.div(totalStakingTokenInPool).times(100)

  const userDailyRewards = new BigNumber(tokensPerBlock[0]).div(BIG_TEN.pow(earningTokens?.[0].decimals)).times(new BigNumber(86400).div(KAI_BLOCK_TIME));

  return {
    apr: apr.isNaN() || !apr.isFinite() ? null : apr.toNumber(),
    userDailyRewards: userDailyRewards.isNaN() ? '0' : userDailyRewards.toJSON()
  };
}

export const getPoolAprForFarm = (yearlyAPR) => {
  const monthlyAPR = yearlyAPR * 30 / 365;
  const weeklyAPR = yearlyAPR * 7 / 365;

  return {yearlyAPR, monthlyAPR, weeklyAPR};
};