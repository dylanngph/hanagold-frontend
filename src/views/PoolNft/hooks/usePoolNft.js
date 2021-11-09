import { useCallback } from 'react'
import useKardiachain from 'hooks/useKardiachain'
import { stakePoolNft, withdrawPoolNft, claimPoolNft } from 'utils/callHelpers'
import { getPoolNftContract } from 'utils/contractHelpers'

export const useStakePoolNft = (contractAddress) => {
  const { account } = useKardiachain()

  const handleStake = useCallback(async () => {
    const poolNftContract = getPoolNftContract()
    const txHash = await stakePoolNft(poolNftContract, contractAddress, account)
    console.log(txHash)
  }, [account, contractAddress])

  return { onStake: handleStake }
}

export const useWithdrawPoolNft = (contractAddress) => {
  const { account } = useKardiachain()

  const handleWithdraw = useCallback(async () => {
    const poolNftContract = getPoolNftContract()
    const txHash = await withdrawPoolNft(poolNftContract, contractAddress, account)
    console.log(txHash)
  }, [account, contractAddress])

  return { onWithdraw: handleWithdraw }
}

export const useClaimPoolNft = (contractAddress) => {
  const { account } = useKardiachain()

  const handleClaim = useCallback(async () => {
    const poolNftContract = getPoolNftContract()
    const txHash = await claimPoolNft(poolNftContract, contractAddress, account)
    console.log(txHash)
  }, [account, contractAddress])

  return { onClaim: handleClaim }
}