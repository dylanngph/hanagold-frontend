import poolNft from 'constants/poolNft';
import erc20Abi from 'config/abi/erc20.json'
import poolNftAbi from 'config/abi/poolNft.json'
import multicall from 'utils/multicall'
import BigNumber from 'bignumber.js';

const fetchUserPoolNft = async(account) => {
    if (!account) return

    const calls = poolNft.map((pool) => {
        return {
            address: pool.tokenAddress.address,
            name: 'allowance',
            params: [account, pool.contractAddress]
        }
    })

    const [allowance] = await multicall(erc20Abi, calls)
    // const userData = await Promise.all(poolNft.map(async(pool) => {
    //     const call = [{
    //         address: pool.contractAddress,
    //         name: 'userStake',
    //         params: [account]
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'hasUserLimit',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'startTime',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'endTime',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'totalNFT',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'totalUser',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'userLimit',
    //         params: []
    //     },
    //     {
    //         address: pool.contractAddress,
    //         name: 'totalTimeStakeRequire',
    //         params: []
    //     }]
    //     const [result, [hasUserLimit], [startTime], [endTime], [totalNFT], [totalUser], [userLimit], [totalTimeStakeRequire]] = await multicall(poolNftAbi, call)
    //     return {
    //         userData: result,
    //         hasUserLimit,
    //         startTime: new BigNumber(startTime._hex).toJSON(),
    //         endTime: new BigNumber(endTime._hex).toJSON(),
    //         totalNFT: new BigNumber(totalNFT._hex).toJSON(),
    //         totalUser: new BigNumber(totalUser._hex).toJSON(),
    //         userLimit: new BigNumber(userLimit._hex).toJSON(),
    //         totalTimeStakeRequire: new BigNumber(totalTimeStakeRequire._hex).toJSON(),
    //     }
    // }))
    
    const data = await Promise.all(poolNft.map(async(pool, index) => {
        const call = [{
            address: pool.contractAddress,
            name: 'userStake',
            params: [account]
        },
        {
            address: pool.contractAddress,
            name: 'hasUserLimit',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'startTime',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'endTime',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'totalNFT',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'totalUser',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'userLimit',
            params: []
        },
        {
            address: pool.contractAddress,
            name: 'totalTimeStakeRequire',
            params: []
        }]
        const [result, [hasUserLimit], [startTime], [endTime], [totalNFT], [totalUser], [userLimit], [totalTimeStakeRequire]] = await multicall(poolNftAbi, call)
        return {
            ...pool,
            account,
            allowance: new BigNumber(allowance).toJSON(),
            userData: result,
            hasUserLimit,
            startTime: new BigNumber(startTime._hex).toJSON(),
            endTime: new BigNumber(endTime._hex).toJSON(),
            totalNFT: new BigNumber(totalNFT._hex).toJSON(),
            totalUser: new BigNumber(totalUser._hex).toJSON(),
            userLimit: new BigNumber(userLimit._hex).toJSON(),
            totalTimeStakeRequire: new BigNumber(totalTimeStakeRequire._hex).toJSON(),
        }
    }))
    return data
}

export default fetchUserPoolNft