import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import IconButton from 'components/Button/IconButton';
import CardLogo from 'components/Card/CardLogo';
import CurrencyPoolModal from 'components/CurrencyPoolModal/CurrencyPoolModal';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import { POOLS_TAGS } from 'constants/index';
import { useSousStake } from 'hooks/useStake';
import useToast from 'hooks/useToast';
import { useSousUnstake, useSousUnstakeEmergency } from 'hooks/useUnstake';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useCurrentBlock } from 'store/hooks';
import { fetchPoolUserDataAsync } from 'store/pools/index';
import styled from 'styled-components';
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance';

import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import Value from 'components/Value/Value';
import { useSousApprove } from 'hooks/useApprove';
import useKardiachain from 'hooks/useKardiachain';
import { getPoolName } from 'utils/tokenHelpers';
import UnstakingFeeCountdownRow from 'views/Pools/components/UnstakingFeeCountdownRow';

const Wrapper = styled(Flex)`
  height: 100%;
`;

const Stake = ({pool, userData}) => {
  const currentBlock = useCurrentBlock()
  const dispatch = useDispatch();
  const {toastSuccess, toastError} = useToast();
  const {account} = useKardiachain();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = userData.allowance;
  const {onApprove} = useSousApprove(pool.stakingToken.address, pool.contractAddress);
  const isApproved = account && allowance && allowance.isGreaterThan(0);

  const isCanStake = currentBlock >= pool.stakingBlock || !pool.stakingBlock

  const stakedBalance = userData.stakedBalance;
  const stakingTokenBalance = userData.stakingTokenBalance;

  const tokensEarningLabel = getPoolName(pool.isV2 ? pool.earningTokens : [pool.earningToken])

  const usdTokenStaking = stakedBalance
      ? new BigNumber(getFullDisplayBalance(stakedBalance, pool.stakingToken.decimals))
          .times(pool.stakingTokenPrice)
          .toNumber()
      : 0;

  const {onStake} = useSousStake(pool.contractAddress);
  const {onUnstake} = useSousUnstake(pool.contractAddress);
  const {onUnstakeEmergency} = useSousUnstakeEmergency(pool.contractAddress);

  const handleStake = async (amount) => {
    await onStake(amount, pool.stakingToken.decimals);
    dispatch(fetchPoolUserDataAsync(account, pool));
    toastSuccess('Staked', `Your ${pool.stakingToken.symbol} funds have been staked in the pool!`);
  };

  const handleUnstake = async (amount) => {
    await onUnstake(amount, pool.stakingToken.decimals);
    dispatch(fetchPoolUserDataAsync(account, pool));
    toastSuccess('Unstaked', `Your ${pool.stakingToken.symbol} earnings have also been harvested to your wallet!`);
  };

  const handleUnstakeEmergency = async () => {
    try {
      await onUnstakeEmergency();
      dispatch(fetchPoolUserDataAsync(account, pool));
      toastSuccess('Unstaked');
    } catch (e) {
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
    }
  };

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      await onApprove();
      toastSuccess('Contract Enabled', `You can now stake in the ${tokensEarningLabel} pool!`);
      dispatch(fetchPoolUserDataAsync(account, pool));
      setRequestedApproval(false);
    } catch (e) {
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
      setRequestedApproval(false);
    }
  }, [onApprove, toastSuccess, tokensEarningLabel, dispatch, account, pool, toastError]);

  const [onPresentStakeModal] = useModal(<CurrencyPoolModal
      isDeposit
      isCanStake={isCanStake}
      max={stakingTokenBalance}
      onConfirm={handleStake}
      userData={userData}
      pool={pool}
      priceCurrency={pool.stakingTokenPrice}
  />);

  const [onPresentUnstakeModal] = useModal(<CurrencyPoolModal
      max={stakedBalance}
      onConfirm={handleUnstake}
      userData={userData}
      pool={pool}
      priceCurrency={pool.stakingTokenPrice}
      isRemovingStake
      isIfo={pool.tag === POOLS_TAGS.ifo}
  />);

  const toggleDeposit = () => {
    onPresentStakeModal();
  };

  return (
      <Card>
        <Wrapper
            justifyContent="space-between"
            flexDirection="column"
        >
          <div>
            <div className="h-20">
              {
                pool?.stakingToken.token0
                  ?   <CardLogo
                        src1={`/tokens/${pool?.stakingToken.token0.toLowerCase()}.png`}
                        src2={`/tokens/${pool?.stakingToken.token1.toLowerCase()}.png`}
                    />
                    :   <CardLogo
                        src1={`/tokens/${pool?.stakingToken.token1 ? 'kai' : pool?.stakingToken.symbol.toLowerCase()}.png`}
                    />
              }

            </div>
            <Value
                color="secondary"
                fontSize="32px"
                value={account ? getBalanceNumber(stakedBalance, pool.stakingToken.decimals) : 0}
                decimals={4}
            />
            <Value
                fontSize="14px"
                prefix="~"
                value={account ? usdTokenStaking : 0}
                decimals={2}
                unit="USD"
            />
            <Text>{pool.stakingToken.symbol} Tokens Staked</Text>
          </div>
          <UnstakingFeeCountdownRow
              fees={pool.fees}
              blockPeriod={pool.blockPeriod}
              lastStakingBlock={userData.lastStakingBlock}
          />
          {account ? (
              <>
                {
                  userData.userDataLoaded
                    ? pool.isFinished ? (
                          pool?.isEmergencyWithdraw ? (
                              <Button
                                  mt="20px"
                                  width="100%"
                                  disabled={stakedBalance.eq(new BigNumber(0))}
                                  onClick={handleUnstakeEmergency}
                              >
                                Unstake
                              </Button>
                          ) : (
                              <Button
                                  mt="20px"
                                  width="100%"
                                  disabled={stakedBalance.eq(new BigNumber(0))}
                                  onClick={onPresentUnstakeModal}
                              >
                                Unstake
                              </Button>
                          )
                      ) : (
                          <>
                            {isApproved ? (
                                pool.tag === POOLS_TAGS.ifo ? (
                                    <Button
                                        mt="20px"
                                        mr="10px"
                                    >
                                      Stake
                                    </Button>
                                ) : (
                                    <Flex alignItems="center" justifyContent="center">
                                      <Button
                                          width="100%"
                                          mt="20px"
                                          mr="10px"
                                          disabled={stakedBalance.eq(new BigNumber(0))}
                                          onClick={onPresentUnstakeModal}
                                      >
                                        Unstake
                                      </Button>
                                      <IconButton
                                          onClick={toggleDeposit}
                                          mt="20px"
                                      >
                                        <Text color="black" fontSize="32px" bold>+</Text>
                                      </IconButton>
                                    </Flex>
                                )
                            ) : (
                                <Button
                                    width="100%"
                                    mt="20px"
                                    disabled={requestedApproval} onClick={handleApprove}>
                                  Approve Contract
                                </Button>
                            )}
                          </>
                      )
                      :  <Button
                          width="100%"
                          mt="20px"
                          disabled
                      >
                        ...
                      </Button>
                }
              </>
          ) : (
              <UnlockButton
                  mt="20px"
                  width="100%"
              />
          )}
        </Wrapper>
      </Card>
  );
};

Stake.propTypes = {
  pool: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default Stake;
