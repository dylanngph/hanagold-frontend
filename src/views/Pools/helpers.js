import { KAI_BLOCK_TIME } from 'config/index'

export const getPoolBlockInfo = (pool, currentBlock) => {
  const { startBlock, endBlock, isFinished } = pool
  const shouldShowBlockCountdown = Boolean(!isFinished && startBlock && endBlock)
  const blocksUntilStart = Math.max(startBlock - currentBlock, 0)
  const blocksRemaining = Math.max(endBlock - currentBlock, 0)
  const duration = Math.max(endBlock - startBlock, 0)
  const durationDisplay = Number.isNaN((duration * KAI_BLOCK_TIME) / 86400) ? 0 : (duration * KAI_BLOCK_TIME) / 86400
  const hasPoolStarted = blocksUntilStart === 0 && blocksRemaining > 0
  const blocksToDisplay = hasPoolStarted ? blocksRemaining : blocksUntilStart
  return {
    shouldShowBlockCountdown,
    blocksUntilStart,
    blocksRemaining,
    hasPoolStarted,
    blocksToDisplay,
    durationDisplay,
  }
}

export const getPoolBlockInfoStake = (pool, currentBlock) => {
  const { stakingBlock, stakingEndBlock, unStakingBlock, isFinished } = pool
  const shouldShowBlockCountdown = Boolean(stakingBlock && stakingEndBlock && !isFinished)
  const blocksUntilStake = Math.max(stakingBlock - currentBlock, 0)
  const blocksRemaining = Math.max(stakingEndBlock - currentBlock, 0)
  const hasPoolStaked = blocksUntilStake === 0 && blocksRemaining > 0
  const blocksToDisplay = hasPoolStaked ? blocksRemaining : blocksUntilStake

  const shouldShowBlockCountdownUnStaking = Boolean(
      unStakingBlock && currentBlock < unStakingBlock && stakingBlock !== unStakingBlock,
  )
  const blocksUntilUnStaking = Math.max(unStakingBlock - currentBlock, 0)

  return {
    shouldShowBlockCountdown,
    blocksUntilStake,
    blocksRemaining,
    hasPoolStaked,
    blocksToDisplay,
    shouldShowBlockCountdownUnStaking,
    blocksUntilUnStaking,
  }
}
