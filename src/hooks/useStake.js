import useKardiachain from 'hooks/useKardiachain'
import { useCallback } from 'react'
import { sousStake, stake } from 'utils/callHelpers'
import { getMasterChefContract, getSouschefContract } from 'utils/contractHelpers'

const useStake = (pid, masterChefAddress) => {
  const { account } = useKardiachain()

  const handleStake = useCallback(
    async (amount, decimals) => {
      const masterChefContract = getMasterChefContract()
      const txHash = await stake(masterChefContract, masterChefAddress, pid, amount, account, decimals)
    },
    [account, masterChefAddress, pid],
  )

  return { onStake: handleStake }
}

export const useSousStake = (poolAddress) => {
  const { account } = useKardiachain()

  const handleStake = useCallback(
    async (amount, decimals) => {
      const souschefContract = getSouschefContract()
      const txHash = await sousStake(souschefContract, poolAddress, amount, decimals, account)
    },
    [account, poolAddress],
  )

  return { onStake: handleStake }
}

export default useStake
