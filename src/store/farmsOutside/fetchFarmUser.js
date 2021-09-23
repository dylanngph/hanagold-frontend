import BigNumber from 'bignumber.js';
import address from 'constants/contracts';
import multicall from 'utils/multicall';
import erc20Abi from 'config/abi/erc20.json'
import masterChefAbi from 'config/abi/masterchef.json'

export const fetchFarmUser = async (account, farm) => {
  const callsErc = [
    {
      address: farm.lpAddress,
      name: 'allowance',
      params: [account, address.masterChefDfl],
    },
    {
      address: farm.lpAddress,
      name: 'balanceOf',
      params: [account],
    },
  ]

  const callsMasterChef = [
    {
      address: address.masterChefDfl,
      name: 'userInfo',
      params: [farm.pid, account],
    },
    {
      address: address.masterChefDfl,
      name: 'pendingRewards',
      params: [farm.pid, account],
    },
  ]

  const [[allowance], tokenBalance] = await multicall(erc20Abi, callsErc)
  const [stakedBalance, earnings] = await multicall(masterChefAbi, callsMasterChef)

  return {
    allowance: new BigNumber(allowance._hex).toJSON(),
    tokenBalance: new BigNumber(tokenBalance).toJSON(),
    stakedBalance: new BigNumber(stakedBalance.amount._hex).toJSON(),
    earnings: new BigNumber(earnings).toJSON(),
  }
}