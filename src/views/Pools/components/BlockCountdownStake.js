import { ClockIcon } from '@heroicons/react/solid';
import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import { KAI_BLOCK_TIME } from 'config/index'
import { useMemo } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { useCurrentBlock } from 'store/hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { getPoolBlockInfoStake } from 'views/Pools/helpers';

const StyledFlex = styled(Flex)`
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
    justify-content: space-between;
  color: ${({theme}) => theme.colors.text};
  margin-top: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;

  svg{
    margin-left: 5px;
  }
`;

const BlockCountdownStake = ({ pool }) => {
  const currentBlock = useCurrentBlock()
  const {
    shouldShowBlockCountdown,
    blocksUntilStake,
    blocksRemaining,
    hasPoolStaked,
    blocksToDisplay,
    shouldShowBlockCountdownUnStaking,
    blocksUntilUnStaking,
  } = getPoolBlockInfoStake(pool, currentBlock)

  const timer = useMemo(() => {
    return blocksToDisplay * KAI_BLOCK_TIME * 1000 + Date.now()
  }, [blocksToDisplay])

  const timerBlockUnstaking = useMemo(() => {
    return blocksUntilUnStaking * KAI_BLOCK_TIME * 1000 + Date.now()
  }, [blocksUntilUnStaking])

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return null

    return (
        <>
          {days > 0 ? `${zeroPad(days)}d-` : ''}
          {zeroPad(hours)}h-{zeroPad(minutes)}m-{zeroPad(seconds)}s
        </>
    )
  }

  return (
      <>
        {shouldShowBlockCountdown && (
            <StyledFlex>
              <Text>{hasPoolStaked ? 'Staking is open until' : 'Staking starts in'}</Text>
              <Flex alignItems="center">
                {(blocksRemaining || blocksUntilStake) && currentBlock ? (
                    <Countdown zeroPadTime={2} date={timer} renderer={renderCountdown} />
                ) : (
                    '...'
                )}
                <ClockIcon width="18px" />
              </Flex>
            </StyledFlex>
        )}
        {shouldShowBlockCountdownUnStaking && (
            <StyledFlex>
              <Text>Un stake open in</Text>
              <Flex alignItems="center">
                {blocksUntilUnStaking && currentBlock ? (
                    <Countdown zeroPadTime={2} date={timerBlockUnstaking} renderer={renderCountdown} />
                ) : (
                    '...'
                )}
                <ClockIcon width="18px" />
              </Flex>
            </StyledFlex>
        )}
      </>
  )
}

BlockCountdownStake.propTypes = {
  pool: PropTypes.object.isRequired,
}

export default BlockCountdownStake
