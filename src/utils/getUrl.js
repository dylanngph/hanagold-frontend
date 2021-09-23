export const getUrlTx = (txHash) => {
  return `https://explorer.kardiachain.io/tx/${txHash?.toLowerCase()}`
}

export const getUrlAddress = (address) => {
  return `https://explorer.kardiachain.io/address/${address?.toLowerCase()}`
}

export const getUrlPair = (address) => {
  return `https://kaidex.io/exchange/${address?.toLowerCase()}`
}
