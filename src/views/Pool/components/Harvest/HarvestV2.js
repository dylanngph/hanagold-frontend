import BigNumber from 'bignumber.js'
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button'
import CardLogo, { CardLogoPool } from 'components/Card/CardLogo';
import QuestionHelper from 'components/QuestionHelper';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import Value from 'components/Value/Value'
import useKardiachain from 'hooks/useKardiachain'
import { useSousHarvest } from 'hooks/useHarvest'
import useToast from 'hooks/useToast';
import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {Fragment} from 'react';

import Card from 'components/Card/Card'
import { useDispatch } from 'react-redux'
import { fetchPoolUserDataAsync } from 'store/pools/index';
import styled from 'styled-components';
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { getPoolName } from 'utils/tokenHelpers';

const Wrapper = styled(Flex)`
  height: 100%;
`

const StyledFees = styled(Flex)`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

const Harvest = ({ pool, earnings }) => {
  const dispatch = useDispatch()
  const { account } = useKardiachain()
  const { toastSuccess, toastError } = useToast()

  const tokensEarningLabel = getPoolName(pool.earningTokens)

  const usdTokensEarning = earnings.map((earning, index) => {
    return earning
        ? new BigNumber(getFullDisplayBalance(earning, pool.earningTokens[index].decimals))
            .times(pool?.earningTokensPrice?.[index] || 0)
            .toNumber()
        : 0
  })

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
      <Card>
        <Wrapper
            justifyContent="space-between"
            flexDirection="column"
        >
          <div>
            {
              pool?.earningTokens[1]
                ?  <CardLogoPool
                      src1={`/tokens/${pool?.earningTokens[0]?.symbol.toLowerCase()}.png`}
                      src2={`/tokens/${pool?.earningTokens[1]?.symbol.toLowerCase()}.png`}
                      src3={pool?.earningTokens[2] ? `/tokens/${pool?.earningTokens[2]?.symbol.toLowerCase()}.png` : ''}
                  />
                  :  <CardLogo
                      src1={`/tokens/${pool?.earningTokens[0]?.symbol.toLowerCase()}.png`}
                  />
            }
            {pool.earningTokens.map((earningToken, index) => (
                <Fragment key={index}>
                  <div className="text-primary text-2xl break-words">
                    <Value
                        color="secondary"
                        fontSize="32px"
                        value={getBalanceNumber(earnings[index], earningToken.decimals)} decimals={6} />
                  </div>
                  <div>
                    {pool?.earningTokensPrice ? (
                        <Value
                            fontSize="14px"
                            prefix="~" value={account ? usdTokensEarning[index] : 0} decimals={3} unit="USD" />
                    ) : (
                        '~???USD'
                    )}
                  </div>
                  <Text className="text-white text-xl">{earningToken.symbol} Earned</Text>
                </Fragment>
            ))}
            {pool.feesHarvest && (
                  <StyledFees>
                    Harvest fee: {pool.feesHarvest}%
                    <QuestionHelper
                        width="16"
                        text={`${pool.feesHarvest}% harvest fee will be charged on your rewards`}
                    />
                  </StyledFees>
            )}
          </div>
          {account ? (
              <>
                <Button
                    mt="20px"
                    width="100%"
                    disabled={pendingTx || earnings[0].eq(new BigNumber(0))}
                    onClick={handleReward}
                >
                  {pendingTx ? `Collecting ${tokensEarningLabel}` : 'Harvest'}
                </Button>
              </>
          ) : (
              <UnlockButton
                  mt="20px"
                  width="100%"
              />
          )}
        </Wrapper>
      </Card>
  )
}

Harvest.propTypes = {
  pool: PropTypes.object.isRequired,
  earnings: PropTypes.instanceOf(BigNumber),
}

export default Harvest
