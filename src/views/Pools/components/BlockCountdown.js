import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import { KAI_BLOCK_TIME } from 'config/index'
import { useMemo } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { useCurrentBlock } from 'store/hooks'
import styled from 'styled-components';
import { getPoolBlockInfo } from 'views/Pools/helpers'
import {ClockIcon} from '@heroicons/react/solid';
import PropTypes from 'prop-types'

const StyledFlex = styled(Flex)`
  // border-radius: 43px;
  // padding: 15px 21px;
  // border: 1px solid ${({ theme }) => theme.colors.secondary};
    justify-content: space-between;
  color: ${({theme}) => theme.colors.text};
  margin-top: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;

  svg{
    margin-left: 5px;
  }
`;

const BlockCountdown = ({ pool }) => {
  const currentBlock = useCurrentBlock()
  const {
    shouldShowBlockCountdown,
    blocksUntilStart,
    blocksRemaining,
    hasPoolStarted,
    blocksToDisplay,
  } = getPoolBlockInfo(pool, currentBlock)

  const timer = useMemo(() => {
    return blocksToDisplay * KAI_BLOCK_TIME * 1000 + Date.now() + 60000
  }, [blocksToDisplay])

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return null

    return (
      <span className="text-white">
        {days > 0 ? `${zeroPad(days)}d-` : ''}
        {zeroPad(hours)}h-{zeroPad(minutes)}m-{zeroPad(seconds)}s
      </span>
    )
  }

  return (
    <>
      {shouldShowBlockCountdown && (
        <StyledFlex className="px-4">
          <Text color="textWhite">{hasPoolStarted ? 'Rewards end in' : 'Rewards start in'}</Text>
          <Flex alignItems="center">
            {(blocksRemaining || blocksUntilStart) && currentBlock ? (
              <Countdown color="textWhite" zeroPadTime={2} date={timer} renderer={renderCountdown} />
            ) : (
              '...'
            )}
            <ClockIcon color="white" width="18px" />
          </Flex>
        </StyledFlex>
      )}
    </>
  )
}

BlockCountdown.propTypes = {
  pool: PropTypes.object.isRequired,
}

export default BlockCountdown
