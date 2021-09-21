import kardiaClient from 'plugin/kardia-dx'
import { getAddress } from '@ethersproject/address'

export function isAddress(value) {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function throttle (fn, delay) {
  return args => {
    if (fn.id) return

    fn.id = setTimeout(() => {
      fn.call(this, args)
      clearTimeout(fn.id)
      fn.id = null
    }, delay)
  }
}

export function getParameterCaseInsensitive(object, key) {
  if (object instanceof Object) {
    return object[Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase())]
  }
  return undefined
}

export const getBlockNumber = async () => {
  const BLOCK_NUMBER = 'latest'
  const blockResponse = await kardiaClient.kaiChain.getBlockByBlockNumber(BLOCK_NUMBER)
  return blockResponse.height
}

export const formatNumberMinifiedCharacters = (number, decimals = 2) => {
  if (isNaN(number)) {
    return {
      value: '???',
      unit: '',
    }
  }
  if (number === Infinity) {
    return {
      value: number,
      unit: ''
    }
  }
  // billion
  if (number > 1000 * 1000 * 1000000000) {
    return {
      value: (number / 1000000000)?.toExponential(decimals),
      unit: 'B'
    }
  }
  if (number > 100 * 1000000000) {
    return {
      value: (number / 1000000000)?.toFixed(decimals),
      unit: 'B'
    }
  }
  // million
  if (number > 100 * 1000000) {
    return {
      value: (number / 1000000)?.toFixed(decimals),
      unit: 'M',
    }
  }
  return {
    value: number?.toFixed(decimals),
    unit: ''
  }
}

export const tokenEarnedPerThousandDaily = (stakedTvl, apr) => {
  const userDailyRewards = Number(apr?.userDailyRewards ? +apr?.userDailyRewards : 0);
  if (stakedTvl) {
    const rewards = 1000 * Number(userDailyRewards) / Number(stakedTvl);
    return rewards <= userDailyRewards ? rewards : userDailyRewards;
  }
  return userDailyRewards;
}