import classnames from 'classnames'
import Card from 'components/Card/Card'
import useLastTruthy from 'hooks/useLast'
import { AdvancedSwapDetails } from './AdvancedSwapDetails'

export default function AdvancedSwapDetailsDropdown({ trade, ...rest }) {
  const lastTrade = useLastTruthy(trade)

  return (
    <AdvancedSwapDetails {...rest} trade={trade ?? lastTrade ?? undefined} className={classnames(Boolean(trade) ? 'block' : 'hidden')} />
  )
}
