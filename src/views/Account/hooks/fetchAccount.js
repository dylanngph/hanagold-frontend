import accountData from 'constants/account';
// import bountyAbi from 'config/abi/bounty.json'
import erc20Abi from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import BigNumber from 'bignumber.js';

export const fetchAccount = async(account) => {
    

    const callsBalanceOf = [
        {
            address: accountData.tokenDisplay.address,
            name: 'balanceOf',
            params: [account]
        },
        {
            address: accountData.voucherAddress,
            name: 'balanceOf',
            params: [account]
        },
        {
            address: accountData.goldAddress,
            name: 'balanceOf',
            params: [account]
        },
    ]
    
    const [balanceOf , voucherBalance, goldBalance] = await multicall(erc20Abi, callsBalanceOf)

    const valueVoucher = Number(new BigNumber(voucherBalance))
    const valueGold = Number(new BigNumber(goldBalance).toNumber())
    const totalNft = valueVoucher + valueGold

    return {
        ...accountData,
        balanceOf: new BigNumber(balanceOf) / 10**accountData.tokenDisplay.decimals,
        valueVoucher,
        valueGold,
        totalNft,
        account
    }
}  