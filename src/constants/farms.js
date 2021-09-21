import tokens from 'constants/tokens'

export const farmsConfig = [
  {
    pid: 7,
    lpAddress: '0x44F22875E07c98354Dd0A8D165e7f82f7c73b02d',
    allocPoint: '1000',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.ltd,
  },
  {
    pid: 0,
    lpAddress: '0x1f95bD3A7d5c9DF6bF56504bbA948A7ADF1c3e27',
    allocPoint: '500',
    symbol: 'KLP',
    token0: tokens.wkai,
    token1: tokens.ltd,
  },
  {
    pid: 1,
    lpAddress: '0xe504898459c682b95B60feD35de410a74216Fc92',
    allocPoint: '200',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.vndc,
  },
  {
    pid: 2,
    lpAddress: '0xC2cAFdF64d0e403aaF9817556bd99D479C6D4859',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.vidb,
    token1: tokens.kusd,
  },
  {
    pid: 3,
    lpAddress: '0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.wkai,
  },
  {
    pid: 4,
    lpAddress: '0x3e82F9290A28D4296d34d0c1e6E5366c4220248a',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.defily,
  },
  {
    pid: 5,
    lpAddress: '0x8a9Fc881fC8a2570f403012DB123F31842242Bec',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.tph,
  },
  {
    pid: 6,
    lpAddress: '0x687ce55E06A90FD75b6B8fd13468973eeA2c6513',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.kusd,
    token1: tokens.chi,
    icon: 'chi.png',
  },
  {
    pid: 8,
    lpAddress: '0xeD2d01C124A562160a87cAcf59092B6Bf7083D09',
    allocPoint: '0',
    symbol: 'KLP',
    token0: tokens.wkai,
    token1: tokens.bamiOld,
    isFinished: true,
    icon: 'bami.png',
  },
  {
    pid: 9,
    lpAddress: '0x53E6a1271D89A067055DCD66bAA9dc3a15e18FC4',
    allocPoint: '100',
    symbol: 'KLP',
    token0: tokens.wkai,
    token1: tokens.bami,
    icon: 'bami.png',
  },
  {
    pid: 11,
    lpAddress: '0x6c98542a41b820491a4a8B7a71dA26b8eA524b07',
    allocPoint: '50',
    symbol: 'KLP',
    token0: tokens.nami,
    token1: tokens.wkai,
    icon: 'nami.png',
  },
  {
    pid: 10000,  // get price bds-kai lp
    lpAddress: '0xab951b7c56682040DC62FFf35c8Bdb8fdEca8861',
    allocPoint: '0',
    symbol: 'KLP',
    token0: tokens.bds,
    token1: tokens.wkai,
    icon: 'bds.png',
    isHide: true
  },
  {
    pid: 10001,  // get price lpdi-kusd lp
    lpAddress: '0x5D6724F4ac40AEb1A47b9CcFe293363D100d4e5f',
    allocPoint: '0',
    symbol: 'KLP',
    token0: tokens.lpdi,
    token1: tokens.kusd,
    icon: 'bds.png',
    isHide: true
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
