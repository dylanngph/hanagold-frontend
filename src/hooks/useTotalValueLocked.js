import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useFarms } from 'store/hooks'

const useTotalValueLocked = () => {
  const farms = useFarms()

  const totalValueLocked = useMemo(() => {
    if (!farms.length) return new BigNumber(0)
    const totalFarmsTVL = farms.reduce((accum, farm) => {
      let stakedTvl = Number.isNaN(farm?.stakedTvl) ? 0 : farm?.stakedTvl ?? 0

      return accum.plus(new BigNumber(stakedTvl))
    }, new BigNumber(0))

    return totalFarmsTVL
  }, [farms])

  return totalValueLocked
}

export default useTotalValueLocked
