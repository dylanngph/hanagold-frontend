import tokens from 'constants/tokens'

export const farmsConfig = [
  {
    pid: 1,
    lpAddress: '0xa0535d0c6989ea1e2d126bdd333912186aad68a1',
    symbol: 'KLP',
    token0: tokens.ksc,
    token1: tokens.kusd,
  },
  
]

export const farmsOutsideConfig = [
  {
    pid: 13,
    lpAddress: tokens.ltd.address,
    earningToken: tokens.defily,
    allocPoint: '100',
    symbol: 'LTD',
    icon: 'ltd.png',
  },
]

export default farmsConfig
