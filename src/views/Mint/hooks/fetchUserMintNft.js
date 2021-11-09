import mints from 'constants/mints';
import erc20Abi from 'config/abi/erc20.json'
import multicall from 'utils/multicall'

const fetchUserMintNft = async(account) => {
    const calls = await Promise.all([
        ...mints.map((nft) => {
            return nft.listTokens.map((token) => ({
                address: token.token.address,
                name: 'allowance',
                params: [account, nft.contractAddress]
            }))
        })
    ])

    const dataAllow = calls.map(async(call, index, arr) => {
        return await multicall(erc20Abi, call)
    })

    const value = await Promise.all(dataAllow).then(v => v)

    const data = mints.map((nft, index) => {
        const vIndex = value[index]
        vIndex.map((v, i) => {
            nft.listTokens[i] = {...nft.listTokens[i], allowance: v[0]}
        })
        return {
            ...nft,
            account
        }
    })
    return data
}

export default fetchUserMintNft