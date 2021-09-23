import useKardiachain from 'hooks/useKardiachain'
import { useCallback } from 'react'
import { approve, approveSousChef } from 'utils/callHelpers'
import { getERC20Contract } from 'utils/contractHelpers'

export const useApprove = (tokenAddress, masterChefAddress) => {
  const { account } = useKardiachain()

  const handleApprove = useCallback(async () => {
    const contract = getERC20Contract()
    const txHash = await approve(contract, masterChefAddress, tokenAddress, account)
    return txHash
  }, [account, masterChefAddress, tokenAddress])

  return { onApprove: handleApprove }
}

export const useSousApprove = (tokenAddress, poolAddress) => {
  const { account } = useKardiachain()

  const handleApprove = useCallback(async () => {
    const contract = getERC20Contract()
    const txHash = await approveSousChef(contract, tokenAddress, poolAddress, account)
    return txHash
  }, [account, poolAddress, tokenAddress])

  return { onApprove: handleApprove }
}
