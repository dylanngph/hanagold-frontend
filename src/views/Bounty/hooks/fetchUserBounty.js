import bouties from 'constants/bounties';
import bountyAbi from 'config/abi/bounty.json'
import multicall from 'utils/multicall'
import BigNumber from 'bignumber.js';

export const fetchUserBounty = async(account) => {
    const calls = bouties.map((bounty) => {
        return {
            address: bounty.contractAddress,
            name: 'totalSupply',
            params: []
        }
    })
    
    const [totalSupply] = await multicall(bountyAbi, calls)

    const callsWhitelist = bouties.map((bounty) => {
        return {
            address: bounty.contractAddress,
            name: 'whitelistClaim',
            params: [account]
        }
    })
    
    const [[isAllow]] = await multicall(bountyAbi, callsWhitelist)
    return bouties.map((bounty) => {
        return {
            ...bounty,
            totalSupply,
            whiteList: isAllow,
            account
        }
    })
}

export const fetchBounty = async(account, id) => {
    if (!account) return
    const bounty = bouties.find((bounty) => bounty.id === Number(id))
    const calls = [{
        address: bounty.contractAddress,
        name: 'totalSupply',
        params: []
    },
    {
        address: bounty.contractAddress,
        name: 'whitelistClaim',
        params: [account]
    }]

    const [[totalSupply], [isWhitelist]] = await multicall(bountyAbi, calls)

    return {
        ...bounty,
        account,
        totalSupply: new BigNumber(totalSupply._hex).toJSON(),
        isWhitelist
    }
}  