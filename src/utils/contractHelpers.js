// Addresses

// ABI
import erc20Abi from 'config/abi/erc20.json'
import masterchefAbi from 'config/abi/masterchef.json'
import sousChefAbi from 'config/abi/sousChef.json'
import multicallAbi from 'config/abi/multicall.json'
import lpContractAbi from 'config/abi/lpToken.json'
import wethAbi from 'config/abi/weth.json'
import dragonAbi from 'config/abi/dragon.json'
import xchatAbi from 'config/abi/xchat.json'
import routerAbi from 'config/abi/router.json'
import { RPC_ENDPOINT } from 'config/index'
import { KardiaContract } from 'kardia-js-sdk'
import sousChefV2Abi from 'config/abi/sousChefV2.json'
import bountyAbi from 'config/abi/bounty.json'
import mintNFTAbi from 'config/abi/mintnft.json'

export const getContract = (abi) => {
  const contract = new KardiaContract({
    provider: RPC_ENDPOINT,
    abi: abi,
  })
  return contract
}

export const getERC20Contract = () => {
  return getContract(erc20Abi)
}

export const getMasterChefContract = () => {
  return getContract(masterchefAbi)
}

export const getSouschefContract = () => {
  return getContract(sousChefAbi)
}

export const getSouschefV2Contract = () => {
  return getContract(sousChefV2Abi)
}

export const getMulticallContract = () => {
  return getContract(multicallAbi)
}

export const getLpContract = () => {
  return getContract(lpContractAbi)
}

export const getWETHContract = () => {
  return getContract(wethAbi)
}

export const getXChatContract = () => {
  return getContract(xchatAbi)
}

export const getDragonContract = () => {
  return getContract(dragonAbi)
}

export function getRouterContract() {
  return getContract(routerAbi)
}

export function getBountyNftVoucher() {
  return getContract(bountyAbi)
}

export function getMintNftContract() {
  return getContract(mintNFTAbi)
}