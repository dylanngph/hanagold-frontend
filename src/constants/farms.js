import tokens from 'constants/tokens'

export const farmsConfig = [
  {
    pid: 1,
    lpAddress: '0x8623Be398EE4db3D89e4d1868f2e421b4061B3E6',
    symbol: 'KLP',
    token0: tokens.hng,
    token1: tokens.kusd,
  },
  {
    pid: 2,
    lpAddress: '0x687ce55E06A90FD75b6B8fd13468973eeA2c6513',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.chi,
  },
  
]

export const farmsOutsideConfig = [
  // {
  //   pid: 13,
  //   lpAddress: tokens.ltd.address,
  //   earningToken: tokens.defily,
  //   allocPoint: '100',
  //   symbol: 'LTD',
  //   icon: 'ltd.png',
  // },
]

export default farmsConfig
