import Flex from 'components/Box/Flex';
import QuestionHelper from 'components/QuestionHelper/QuestionHelper';
import { KAI_BLOCK_TIME } from 'config/index'
import useKardiachain from 'hooks/useKardiachain'
import Countdown, { zeroPad } from 'react-countdown'
import { useCurrentBlock } from 'store/hooks';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  justify-content: center;
  svg {
    margin-left: 5px;
  }
`;

const WithdrawalFeeTimer = ({ lastStakingBlock, blockPeriod }) => {
  const currentBlock = useCurrentBlock()

  const timer = (lastStakingBlock + blockPeriod - currentBlock) * KAI_BLOCK_TIME * 1000 + Date.now()

  const renderCountdown = ({ days, hours, minutes, completed }) => {
    if (completed) return <p className="mb-0">0d-0h-0m</p>

    return (
      <p className="ml-2">
        {zeroPad(days)}d-{zeroPad(hours)}h-{zeroPad(minutes)}m
      </p>
    )
  }
  return <Countdown zeroPadTime={2} date={timer} renderer={renderCountdown} />
}

const UnstakingFeeCountdownRow = ({ fees, lastStakingBlock, blockPeriod }) => {
  const currentBlock = useCurrentBlock()
  const { account } = useKardiachain()

  const hasUnstakingFee = lastStakingBlock + blockPeriod > currentBlock

  // The user has made a deposit, but has no fee
  const noFeeToPay = lastStakingBlock + blockPeriod < currentBlock

  // Show the timer if a user is connected, has deposited, and has an unstaking fee
  const shouldShowTimer = Boolean(account && lastStakingBlock && hasUnstakingFee)

  const getRowText = () => {
    if (noFeeToPay) {
      return 'Unstaking Fee'
    }
    if (shouldShowTimer) {
      return 'unstaking fee until'
    }
    return 'unstaking fee if withdrawn within 72h'
  }

  if (!fees) return null

  return (
    <StyledFlex>
      <Flex alignItems="center">
        {noFeeToPay ? '0' : fees}% {getRowText()}
        <QuestionHelper
          text={
            <>
              <p>Unstaking fee: {fees}%</p>
              <p>
                Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every
                time you stake in the pool.
              </p>
            </>
          }
        />
      </Flex>
      {shouldShowTimer && <WithdrawalFeeTimer lastStakingBlock={lastStakingBlock} blockPeriod={blockPeriod} />}
    </StyledFlex>
  )
}

export default UnstakingFeeCountdownRow
