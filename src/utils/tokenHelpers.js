export const getTokenName = (tokenSymbol, t0Symbol, t1Symbol) => {
  let lpTokenName = ''
  if (t1Symbol) {
    lpTokenName = `${t1Symbol}-${t0Symbol} ${tokenSymbol === 'KLP' ? '' : tokenSymbol}`
  } else {
    lpTokenName = `${t1Symbol ? `${t1Symbol}-` : ''}${t0Symbol || ''} ${tokenSymbol === 'KLP' ? '' : tokenSymbol}`
  }

  if (tokenSymbol === 'KLP') {
    return lpTokenName.replace('WKAI', 'KAI')
  }

  return lpTokenName
}

export const getPoolName = (earningTokens) => {
  return earningTokens.reduce((acc, earningToken, index) => {
    return acc + `${index !== 0 ? ', ' : ''}${earningToken.symbol}`
  }, '')
}
