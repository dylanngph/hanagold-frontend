export const DEFAULT_META = {
  title: 'KShark',
  description: 'KShark',
  image: '/logo.png',
}

export const getCustomMeta = (path, t) => {
  switch (path) {
    case '/':
      return {
        title: `Home | KShark`,
      }
    case '/farms':
      return {
        title: `Farm | KShark`,
      }
    case '/pools':
      return {
        title: `Pool | KShark`,
      }
    case '/member':
      return {
        title: `Member | KShark`,
    }
    case '/dipo':
      return {
        title: `DIPO | KShark`,
    }
    default:
      return null
  }
}