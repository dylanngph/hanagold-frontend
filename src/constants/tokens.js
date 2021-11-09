 import address from 'constants/contracts'

import { ChainId, Token } from 'kshark-sdk'
const tokens = {
  kai: {
    symbol: 'KAI',
    projectLink: 'https://kardiachain.io/',
  },
  dragon: {
    symbol: 'DRAGON',
    address: '0x18f4f7A1fa6F2c93d40d4Fd83c67E93B88d3a0b1',
    decimals: 18,
    projectLink: 'https://defily.io/',
  },
  defily: {
    symbol: 'DFL',
    address: '0xD675fF2B0ff139E14F86D87b7a6049ca7C66d76e',
    decimals: 18,
    projectLink: 'https://defily.io/',
  },
  dpet: {
    symbol: 'DPET',
    address: '0xfb62AE373acA027177D1c18Ee0862817f9080d08',
    decimals: 18,
    projectLink: 'https://mydefipet.com/',
  },
  kusd: {
    symbol: 'KUSD-T',
    address: '0x92364Ec610eFa050D296f1EEB131f2139FB8810e',
    decimals: 6,
    projectLink:
        'https://medium.com/kardiachain/kusd-t-the-first-krc20-usd-pegged-stablecoin-for-the-best-defi-experiences-35550e6ca582',
  },
  wkai: {
    symbol: 'WKAI',
    address: address.wKai,
    decimals: 18,
    projectLink: 'https://kardiachain.io/',
  },
  bossDoge: {
    symbol: 'BossDogeOld',
    address: '0xE7B2ad1AF170405D7c6354D61b32E44EF44b45dE',
    decimals: 9,
    projectLink: 'https://www.bossdoge.finance/',
  },
  bossDogev2: {
    symbol: 'BossDoge',
    address: '0x5995F16246DfA676A44B8bD7E751C1226093dcd7',
    decimals: 9,
    projectLink: 'https://www.bossdoge.finance/',
  },
  ltd: {
    symbol: 'LTD',
    address: '0xf631BdC21A77AFAc69B9B3e966E85d7fBcf00b1f',
    decimals: 18,
    projectLink: 'https://ltd.livetrade.io/en/',
  },
  kaiDflKlp: {
    symbol: 'KAI-DFL',
    address: '0x256B8A99f69DBDBb5aC781E97f11080a336f5507',
    decimals: 18,
    projectLink: 'https://kardiachain.io/',
    token0: 'kai',
    token1: 'dfl',
  },
  vndc: {
    symbol: 'VNDC',
    address: '0xeFF34B63f55200a9D635B8ABBBFCC719b4977864',
    decimals: 0,
    projectLink: 'https://vndc.io/',
  },
  vidb: {
    symbol: 'VIDB',
    address: '0x75b9d2A0007A6866e32Ac0A976FeF60ccA151f87',
    decimals: 8,
    projectLink: 'https://vndc.io/vidb',
  },
  beco: {
    symbol: 'Beco',
    address: '0x2Eddba8b949048861d2272068A94792275A51658',
    decimals: 18,
    projectLink: 'https://becoswap.com/',
  },
  kaiLtdKlp: {
    symbol: 'KAI-LTD',
    address: '0x1f95bD3A7d5c9DF6bF56504bbA948A7ADF1c3e27',
    decimals: 18,
    projectLink: 'https://kardiachain.io/',
    token0: 'kai',
    token1: 'ltd',
  },
  sen: {
    symbol: 'SEN',
    address: '0xb697231730C004110A86f51BfF4B8DD085c0CB28',
    decimals: 18,
    projectLink: 'https://sleepearn.finance/',
  },
  tph: {
    symbol: 'TPH',
    address: '0xc1c319434bd861A335752b4b6993C13f139B26fa',
    decimals: 8,
    projectLink: 'https://trustpay.vn/',
  },
  chi: {
    symbol: 'CHI',
    address: '0xf8bB30c912a46f57F2B499111cb536dB13A044c3',
    decimals: 3,
    projectLink: '',
  },
  bamiOld: {
    symbol: 'BAMI',
    address: '0xb3b39589Cf5ECf173e5191cdef3563f7677E3703',
    decimals: 18,
    projectLink: 'https://app.bami.money/',
  },
  bami: {
    symbol: 'BAMI',
    address: '0xC0884cCE945fCf7F3AE4471B5A16d83065D35c31',
    decimals: 18,
    projectLink: 'https://app.bami.money/',
  },
  bds: {
    symbol: 'BDS',
    address: '0x72b7181bd4a0B67Ca7dF2c7778D8f70455DC735b',
    decimals: 8,
    projectLink: 'https://bigbds.io/',
  },
  bdsKaiKlp: {
    symbol: 'BDS-KAI',
    address: '0xab951b7c56682040DC62FFf35c8Bdb8fdEca8861',
    decimals: 18,
    projectLink: 'https://kardiachain.io/',
    token0: 'kai',
    token1: 'bds',
  },
  lpdi: {
    symbol: 'LPDi',
    address: '0x32a6bD9800276be19050bd97459A7a36B26bD899',
    decimals: 18,
    projectLink: '',
  },
  lpdiKusd: {
    symbol: 'LPDi-KUSD-T',
    address: '0x5D6724F4ac40AEb1A47b9CcFe293363D100d4e5f',
    decimals: 18,
    token0: 'LPDi',
    token1: 'KUSD-T',
    projectLink: 'https://kardiachain.io/',
  },
  nami: {
    symbol: 'NAMI',
    address: '0xA43B455F935A7f4184B5B8Aa345e22DbA3bBb286',
    decimals: 18,
    projectLink: 'https://nami.io/',
  },
  chat: {
    symbol: 'CHAT',
    address: '0x274064d87952e4782150396153b50b1ab3a81Ca2',
    decimals: 18,
    projectLink: '#',
  },
  xChat: {
    symbol: 'XCHAT',
    address: '0x3d255696Fe96cA5EeD3e16cF25AB3301EbCC2f98',
    decimals: 18,
    projectLink: '#',
  },
  ksc: {
    symbol: 'KSC',
    address: '0x7221B169aD5e8415753ebbC583924519AFc96B26',
    decimals: 18,
    projectLink: '#',
  },
  hng: {
    symbol: 'HNG',
    address: '0x148De93957ED77f8D5546323b1EdA0Bf06eB52f3',
    decimals: 6,
    projectLink: 'https://hanagold.finance',
  },

  t_lgl: {
    symbol: 'LGL',
    address: '0x94899AB173d1400d80C06e904839f717d8F7EC18',
    decimals: 18,
    projectLink: 'https://hanagold.finance',
  },
  t_thg: {
    symbol: 'THG',
    address: '0xFf8A96980Ec27D22fBeF7f3861aA76c590da04Ed',
    decimals: 18,
    projectLink: 'https://hanagold.finance',
  },
}

export const WKAI = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.wkai.address, 18, 'WKAI', 'Wrapped KAI')
}
export const BECO = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.beco.address, 18, 'BECO', 'BECO')
}

export const CHAT = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.chat.address, 18, 'CHAT', 'Chat Token'),
}

export const xCHAT = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.xChat.address, 18, 'xCHAT', 'xCHAT'),
}

export const BOSSDOGE = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x5995F16246DfA676A44B8bD7E751C1226093dcd7',
    9,
    'BossDoge',
    'BossDoge',
  )
}

export const VNDC = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.vndc.address, 0, 'VNDC', 'VNDC')
}

export const HNG = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.hng.address, 6, 'HNG', 'HanaGold'),
}

export const DFL = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.defily.address, 18, 'DFL', 'Defily'),
}

export const DRAGON = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.dragon.address, 18, 'DRAGON', 'Defily'),
}
export const KUSD = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, tokens.kusd.address, 6, 'KUSD-T', 'KUSD-T'),
}


export default tokens
