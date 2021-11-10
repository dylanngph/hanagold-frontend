import accountData from 'constants/account';
import erc20Abi from 'config/abi/erc20.json'
import bountyAbi from 'config/abi/bounty.json'
import mintnftAbi from 'config/abi/mintnft.json'
import multicall from 'utils/multicall'
import BigNumber from 'bignumber.js';

export const fetchAccount = async(account) => {

    //address test: "0xaE6A8579D2Ff539DBfB36c15d7B01377CeCDa41B"
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
    
    const [balanceOf , voucherBalance, goldBalance] = await multicall(mintnftAbi, callsBalanceOf)
    const valueVoucher = Number(new BigNumber(voucherBalance))
    const valueGold = Number(new BigNumber(goldBalance).toNumber())
    const totalNft = valueVoucher + valueGold

    let callVoucher = []
    for(let i = 0; i < valueVoucher; i++){
        callVoucher.push({
            address: accountData.voucherAddress,
            name: 'tokenOfOwnerByIndex',
            params: [account, i]
        })
    }
    const dataVoucher = await multicall(bountyAbi, callVoucher)
    const dataVoucherArr = dataVoucher.map(item => Number(new BigNumber(item))) ?? [];

    let callGold = []
    for(let i = 0; i < valueGold; i++){
        callGold.push({
            address: accountData.goldAddress,
            name: 'tokenOfOwnerByIndex',
            params: [account, i]
        })
    }

    const dataGold = await multicall(mintnftAbi, callGold)
    const dataGoldArr = dataGold.map(item => Number(new BigNumber(item))) ?? [];

    return {
        ...accountData,
        balanceOf: new BigNumber(balanceOf) / 10**accountData.tokenDisplay.decimals,
        valueVoucher,
        valueGold,
        totalNft,
        account,
        dataVoucherArr,
        dataGoldArr
    }
}  