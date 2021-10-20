import { useCallback } from 'react'
import useKardiachain from 'hooks/useKardiachain'
import { mintNft } from 'utils/callHelpers'
import { getMintNftContract } from 'utils/contractHelpers'

export const useMintNft = (contractAddress) => {
  const { account } = useKardiachain()

  const handleMint = useCallback(async () => {
    const mintNftContract = getMintNftContract()
    const txHash = await mintNft(mintNftContract, contractAddress, account)
    console.log(txHash)
  }, [account, contractAddress])

  return { onMint: handleMint }
}

export default useMintNft
