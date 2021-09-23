export const DEFAULT_META = {
  title: 'HanaGold',
  description: 'HanaGold',
  image: '/hng-logo.png',
}

export const getCustomMeta = (path, t) => {
  switch (path) {
    case '/':
      return {
        title: `Home | HanaGold`,
      }
    case '/farms':
      return {
        title: `Farm | HanaGold`,
      }
    case '/pools':
      return {
        title: `Pool | HanaGold`,
      }
    case '/member':
      return {
        title: `Member | HanaGold`,
    }
    case '/dipo':
      return {
        title: `DIPO | HanaGold`,
    }
    default:
      return null
  }
}