import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, GAS_LIMIT_DEFAULT, UINT256_MAX } from 'config/index'
import address from 'constants/contracts'
import kardiaClient from 'plugin/kardia-dx'
import { BIG_TEN } from 'utils/bigNumber'

export const callHelpers = (contract, addressContract, method, params = []) => {
  const invoke = contract.invokeContract(method, params)
  return invoke.call(addressContract, {}, 'latest')
}

export const sendTransactionToExtension = async (account, txData, toAddress) => {
  const kardiaTransaction = kardiaClient.transaction

  const res = await kardiaTransaction.sendTransactionToExtension(
      {
        from: account,
        gas: GAS_LIMIT_DEFAULT,
        data: txData,
        to: toAddress,
      },
      true,
  )

  if (res.status === 0) throw new Error('Failed')

  return res
}

export const approve = async (contract, masterChefAddress, tokenAddress, account) => {
  const txData = contract.invokeContract('approve', [masterChefAddress, UINT256_MAX]).txData()

  const response = await sendTransactionToExtension(account, txData, tokenAddress)

  return response.transactionHash
}

export const approveSousChef = async (contract, tokenAddress, poolAddress, account) => {
  const txData = contract.invokeContract('approve', [poolAddress, UINT256_MAX]).txData()

  const response = await sendTransactionToExtension(account, txData, tokenAddress)

  return response.transactionHash
}

export const stake = async (masterChefContract, masterChefAddress, pid, amount, account, decimals = 18) => {
  const txData = masterChefContract
    .invokeContract('deposit', [pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toFixed()])
    .txData()

  const response = await sendTransactionToExtension(account, txData, masterChefAddress)

  return response.transactionHash
}

export const sousStake = async (souschefContract, poolAddress, amount, decimals, account) => {
  const txData = souschefContract
    .invokeContract('deposit', [new BigNumber(amount).times(BIG_TEN.pow(decimals)).toFixed()])
    .txData()

  const response = await sendTransactionToExtension(account, txData, poolAddress)

  return response.transactionHash
}

export const unstake = async (masterChefContract, masterChefAddress, pid, amount, account, decimals = 18) => {
  const txData = masterChefContract
    .invokeContract('withdraw', [pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toFixed()])
    .txData()

  const response = await sendTransactionToExtension(account, txData, masterChefAddress)

  return response.transactionHash
}

export const sousUnstake = async (souschefContract, poolAddress, amount, decimals, account) => {
  const txData = souschefContract
    .invokeContract('withdraw', [new BigNumber(amount).times(BIG_TEN.pow(decimals)).toFixed()])
    .txData()

  const response = await sendTransactionToExtension(account, txData, poolAddress)

  return response.transactionHash
}

export const sousUnstakeEmergency = async (souschefContract, poolAddress, account) => {
  const txData = souschefContract.invokeContract('emergencyWithdraw', []).txData()

  const response = await sendTransactionToExtension(account, txData, poolAddress)

  return response.transactionHash
}

export const harvest = async (masterChefContract, masterChefAddress, pid, account) => {
  const txData = masterChefContract.invokeContract('deposit', [pid, '0']).txData()

  const response = await sendTransactionToExtension(account, txData, masterChefAddress)

  return response.transactionHash
}

export const soushHarvest = async (souschefContract, poolAddress, account) => {
  const txData = souschefContract.invokeContract('deposit', ['0']).txData()

  const response = await sendTransactionToExtension(account, txData, poolAddress)

  return response.transactionHash
}

export const getStaked = async (masterChefContract, masterChefAddress ,pid, account) => {
  const { amount } = await callHelpers(masterChefContract, masterChefAddress, 'userInfo', [pid, account])

  return amount
}
