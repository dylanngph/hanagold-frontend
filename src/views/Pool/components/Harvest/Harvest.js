import BigNumber from 'bignumber.js'
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button'
import CardLogo from 'components/Card/CardLogo';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import Value from 'components/Value/Value'
import useKardiachain from 'hooks/useKardiachain'
import { useSousHarvest } from 'hooks/useHarvest'
import useToast from 'hooks/useToast';
import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Card from 'components/Card/Card'
import { useDispatch } from 'react-redux'
import { fetchPoolUserDataAsync } from 'store/pools/index';
import styled from 'styled-components';
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'

const Wrapper = styled(Flex)`
  height: 100%;
`;

const Harvest = ({ pool, earnings }) => {
  const dispatch = useDispatch()
  const { account } = useKardiachain()
  const { toastSuccess, toastError } = useToast()

  const earningTokenBalance = getBalanceNumber(earnings, pool.earningToken.decimals)

  const usdTokenEarning = earnings
    ? new BigNumber(getFullDisplayBalance(earnings, pool.earningToken.decimals))
        .times(pool.earningTokenPrice)
        .toNumber()
    : 0

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useSousHarvest(pool.contractAddress)

  const handleReward = useCallback(async () => {
    try {
      setPendingTx(true)
      await onReward()
      dispatch(fetchPoolUserDataAsync(account, pool))
      toastSuccess('Harvested', `Your ${pool.earningToken.symbol} earnings have been sent to your wallet!`)
      setPendingTx(false)
    } catch (e) {
      setPendingTx(false)
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!')
      console.error(e)
    }
  }, [account, dispatch, onReward, pool, toastError, toastSuccess])

  return (
    <div className="flex justify-between flex-wrap">
      <div className="text-left mt-3">
        <Text color="textWhite">{pool.earningToken.symbol} EARNED</Text>
        <Value
          color="textWhite"
          fontSize="20px"
          value={earningTokenBalance} decimals={4}
        />
        {pool.earningTokenPrice ? (
          <Value
            color="textWhite"
            fontSize="14px"
            prefix="~" value={account ? usdTokenEarning : 0} decimals={4} unit="USD" />
        ) : (
            '~??? USD'
        )}
      </div>
      <div>
      {
        account && <Button
            mt="20px"
            width="100%"
            disabled={pendingTx || earnings.eq(new BigNumber(0))}
            onClick={handleReward}
        >
          <span className="text-black">{pendingTx ? `Collecting ${pool.earningToken.symbol}` : 'Harvest'}</span>
        </Button>
      }
      </div>
      {/* <Wrapper
          justifyContent="space-between"
          flexDirection="column"
      >
        <div>
          <CardLogo src1={`/tokens/${pool?.earningToken?.symbol.toLowerCase()}.png`}/>
          <Value
              color="secondary"
              fontSize="32px"
              value={earningTokenBalance} decimals={4} />
          {pool.earningTokenPrice ? (
              <Value
                  fontSize="14px"
                  prefix="~" value={account ? usdTokenEarning : 0} decimals={6} unit="USD" />
          ) : (
              '~???USD'
          )}
          <Text>{pool.earningToken.symbol} Earned</Text>
        </div>
        {account ? (
            <>
              <Button
                  mt="20px"
                  width="100%"
                  disabled={pendingTx || earnings.eq(new BigNumber(0))}
                  onClick={handleReward}
              >
                {pendingTx ? `Collecting ${pool.earningToken.symbol}` : 'Harvest'}
              </Button>
            </>
        ) : (
            <UnlockButton
                mt="20px"
                width="100%"
            />
        )}
      </Wrapper> */}
    </div>
  )
}

Harvest.propTypes = {
  pool: PropTypes.object.isRequired,
  earnings: PropTypes.instanceOf(BigNumber),
}

export default Harvest
