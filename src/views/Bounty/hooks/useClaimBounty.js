import { useCallback } from 'react'
import useKardiachain from 'hooks/useKardiachain'
import { claimNFTVoucher } from 'utils/callHelpers'
import { getBountyNftVoucher } from 'utils/contractHelpers'

export const useClaimBounty = (contractAddress) => {
  const { account } = useKardiachain()

  const handleClaim = useCallback(async () => {
    const bountyNftContract = getBountyNftVoucher()
    const txHash = await claimNFTVoucher(bountyNftContract, contractAddress, account)
    console.log(txHash)
  }, [account, contractAddress])

  return { onClaim: handleClaim }
}

export default useClaimBounty
