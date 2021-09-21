import { useCallback } from 'react'
import useKardiachain from 'hooks/useKardiachain'
import { harvest, soushHarvest } from 'utils/callHelpers'
import { getMasterChefContract, getSouschefContract } from 'utils/contractHelpers'

const useHarvest = (pid, masterChefAddress) => {
  const { account } = useKardiachain()

  const handleHarvest = useCallback(async () => {
    const masterChefContract = getMasterChefContract()
    const txHash = await harvest(masterChefContract, masterChefAddress, pid, account)
    console.log(txHash)
  }, [account, masterChefAddress, pid])

  return { onHarvest: handleHarvest }
}

export const useSousHarvest = (poolAddress) => {
  const { account } = useKardiachain()

  const handleReward = useCallback(async () => {
    const souschefContract = getSouschefContract()
    const txHash = await soushHarvest(souschefContract, poolAddress, account)
    console.log(txHash)
  }, [account, poolAddress])

  return { onReward: handleReward }
}

export default useHarvest
