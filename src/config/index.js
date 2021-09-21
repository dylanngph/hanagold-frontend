import TelegramIcon from 'components/Svg/TelegramIcon';
import TwitterIcon from 'components/Svg/TwitterIcon';
import YoutubeIcon from 'components/Svg/YoutubeIcon';
import { BIG_TEN } from 'utils/bigNumber'

export const SIDEBAR_WIDTH_FULL = 250;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const MENU_HEIGHT = 74;
export const MENU_ENTRY_HEIGHT = 55;

export const UINT256_MAX = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
export const KAI_BLOCK_TIME = 5
export const KAI_BLOCK_PER_YEAR = 6311520
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const RPC_ENDPOINT = 'https://rpc.kardiachain.io'
export const GAS_LIMIT_DEFAULT = 10000000
export const TRADING_FEE = 0.25
export const TOTAL_SUPPLY = 100000
export const TOTAL_CIRCULATION = 100000
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/Livetrade_io/",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/LiveTradeLTD/",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/LiveTradeVN/",
      },
    ],
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/channel/UCFOIIUjZyK7H3sHpDgIXKyw/",
  },
];

export const homeSocials = [
  {
    icon: 'globe.svg',
    href: "https://livetrade.io/",
  },
  {
    href: "https://www.facebook.com/livetrade.io/",
    icon: 'fb.svg',
  },
  {
    href: "https://twitter.com/Livetrade_io/",
    icon: 'tw.svg',
  },
  {
    href: "https://www.youtube.com/channel/UCFOIIUjZyK7H3sHpDgIXKyw/",
    icon: 'yt.svg',
  },
  {
    icon: 'tele.svg',
    items: [
      {
        label: "English",
        href: "https://t.me/LiveTradeLTD/",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/LiveTradeVN/",
      },
    ],
  },
];