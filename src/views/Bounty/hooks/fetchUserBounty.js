import bouties from 'constants/bounties';
import bountyAbi from 'config/abi/bounty.json'
import multicall from 'utils/multicall'

const fetchUserBounty = async(account) => {
    const calls = bouties.map((bounty) => {
        return {
            address: bounty.contractAddress,
            name: 'whitelistClaim',
            params: [account]
        }
    })
    
    const [[isAllow]] = await multicall(bountyAbi, calls)
    return bouties.map((bounty) => {
        return {
            ...bounty,
            whiteList: isAllow,
            account
        }
    })
}

export default fetchUserBounty