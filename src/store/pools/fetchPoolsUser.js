import erc20Abi from 'config/abi/erc20.json'
import sousChefAbi from 'config/abi/sousChef.json'
import sousChefV2Abi from 'config/abi/sousChefV2.json'
import BigNumber from 'bignumber.js'
import { callHelpers } from 'utils/callHelpers'
import { getERC20Contract, getSouschefContract } from 'utils/contractHelpers'
import multicall from 'utils/multicall'

export const fetchPoolUser = async (account, pool) => {
  const callsErc = [
    {
      address: pool.stakingToken.address,
      name: 'allowance',
      params: [account, pool.contractAddress],
    },
    {
      address: pool.stakingToken.address,
      name: 'balanceOf',
      params: [account],
    },
    {
      address: pool.earningToken.address,
      name: 'balanceOf',
      params: [account],
    },
  ]

  const callsSousChef = [
    {
      address: pool.contractAddress,
      name: 'userInfo',
      params: [account],
    },
    {
      address: pool.contractAddress,
      name: 'pendingReward',
      params: [account],
    },
  ]

  const [[allowance], tokenBalance, earningsTokenBalance] = await multicall(erc20Abi, callsErc)
  const [stakedBalance, earnings] = await multicall(sousChefAbi, callsSousChef)

  return {
    allowance: new BigNumber(allowance._hex).toJSON(),
    stakingTokenBalance: new BigNumber(tokenBalance).toJSON(),
    earningsTokenBalance: new BigNumber(earningsTokenBalance).toJSON(),
    earnings: new BigNumber(earnings).toJSON(),
    stakedBalance: new BigNumber(stakedBalance.amount._hex).toJSON(),
  }
}

export const fetchPoolV2User = async (account, pool) => {
  const callsErc = [
    {
      address: pool.stakingToken.address,
      name: 'allowance',
      params: [account, pool.contractAddress],
    },
    {
      address: pool.stakingToken.address,
      name: 'balanceOf',
      params: [account],
    },
  ]

  const callsEarningTokensBalance = pool.earningTokens.map((earningToken) => ({
    address: earningToken.address,
    name: 'balanceOf',
    params: [account],
  }))

  const callsSousChef = [
    {
      address: pool.contractAddress,
      name: 'userInfo',
      params: [account],
    },
    {
      address: pool.contractAddress,
      name: 'pendingReward',
      params: [account],
    },
  ]

  const [[allowance], tokenBalance, ...earningBalance] = await multicall(erc20Abi, [
    ...callsErc,
    ...callsEarningTokensBalance,
  ])
  const [balances, earnings] = await multicall(sousChefV2Abi, callsSousChef)

  return {
    allowance: new BigNumber(allowance._hex).toJSON(),
    stakingTokenBalance: new BigNumber(tokenBalance).toJSON(),
    earningsTokenBalance: earningBalance.map((earningsTokenBalance) =>
        new BigNumber(earningsTokenBalance.balance._hex).toJSON(),
    ),
    earnings: earnings[0].map((earning) => new BigNumber(earning._hex).toJSON()),
    stakedBalance: new BigNumber(balances.amount._hex).toJSON(),
    lastStakingBlock: balances?.lastStakingBlock?._hex ? new BigNumber(balances.lastStakingBlock._hex).toJSON() : '0',
  }
}

export const fetchPoolAllowance = async (account, pool) => {
  const contract = getERC20Contract()
  const res = await callHelpers(contract, pool.stakingToken.address, 'allowance', [account, pool.contractAddress])
  return new BigNumber(res).toJSON()
}

export const fetchUserBalance = async (account, pool) => {
  const contract = getERC20Contract()
  const res = await callHelpers(contract, pool.stakingToken.address, 'balanceOf', [account])

  return new BigNumber(res).toJSON()
}

export const fetchPoolUserStakeBalance = async (account, pool) => {
  const souschefContract = getSouschefContract()

  const { amount } = await callHelpers(souschefContract, pool.contractAddress, 'userInfo', [account])

  return new BigNumber(amount).toJSON()
}

export const fetchPoolUserEarning = async (account, pool) => {
  const souschefContract = getSouschefContract()

  const balance = await callHelpers(souschefContract, pool.contractAddress, 'pendingReward', [account])

  return new BigNumber(balance).toJSON()
}

export const fetchPoolUserEarningTokenBalance = async (account, pool) => {
  const contract = getERC20Contract()

  const balance = await callHelpers(contract, pool.earningToken.address, 'balanceOf', [account])

  return new BigNumber(balance).toJSON()
}
