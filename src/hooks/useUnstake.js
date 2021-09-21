import useKardiachain from 'hooks/useKardiachain'
import { useCallback } from 'react'
import { sousUnstake, sousUnstakeEmergency, unstake } from 'utils/callHelpers'
import { getMasterChefContract, getSouschefContract } from 'utils/contractHelpers'

const useUnstake = (pid, masterChefAddress) => {
  const { account } = useKardiachain()

  const handleUnstake = useCallback(
    async (amount, decimals) => {
      const masterChefContract = getMasterChefContract()
      const txHash = await unstake(masterChefContract, masterChefAddress, pid, amount, account, decimals)
      console.log(txHash)
    },
    [account, masterChefAddress, pid],
  )

  return { onUnstake: handleUnstake }
}

export const useSousUnstake = (poolAddress) => {
  const { account } = useKardiachain()

  const handleUnstake = useCallback(
    async (amount, decimals) => {
      const souschefContract = getSouschefContract()
      const txHash = await sousUnstake(souschefContract, poolAddress, amount, decimals, account)
      console.log(txHash)
    },
    [account, poolAddress],
  )

  return { onUnstake: handleUnstake }
}

export const useSousUnstakeEmergency = (poolAddress) => {
  const { account } = useKardiachain()

  const handleUnstake = useCallback(async () => {
    const souschefContract = getSouschefContract()
    const txHash = await sousUnstakeEmergency(souschefContract, poolAddress, account)
    showToastTx(txHash)
    console.log(txHash)
  }, [account, poolAddress])

  return { onUnstakeEmergency: handleUnstake }
}

export default useUnstake
