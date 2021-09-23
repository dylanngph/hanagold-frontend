import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import IconButton from 'components/Button/IconButton';
import CardLogo from 'components/Card/CardLogo';
import CurrencyModal from 'components/CurrencyModal/CurrencyModal';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import address from 'constants/contracts';
import useStake from 'hooks/useStake';
import useToast from 'hooks/useToast';
import useUnstake from 'hooks/useUnstake';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchFarmUserDataAsync } from 'store/farms/index';
import styled from 'styled-components';
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance';

import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import Value from 'components/Value/Value';
import { useApprove } from 'hooks/useApprove';
import useKardiachain from 'hooks/useKardiachain';

const Wrapper = styled(Flex)`
  height: 100%;
`;

const Stake = ({farm, lpTokenName, userData}) => {
  const pid = farm.pid;
  const lpAddress = farm.lpAddress;
  const {toastSuccess, toastError} = useToast();
  const dispatch = useDispatch();
  const {account} = useKardiachain();
  const [requestedApproval, setRequestedApproval] = useState(false);

  const allowance = userData.allowance;
  const {onApprove} = useApprove(lpAddress, address.masterChef);
  const isApproved = account && allowance && allowance.isGreaterThan(0);

  const stakedBalance = userData.stakedBalance;
  const tokenBalance = userData.tokenBalance;

  const usdTokenStaking = stakedBalance
      ? new BigNumber(getFullDisplayBalance(stakedBalance, farm.decimals)).times(farm.price).toNumber()
      : 0;

  const {onStake} = useStake(pid, address.masterChef);
  const {onUnstake} = useUnstake(pid, address.masterChef);


  const handleStake = async (amount) => {
    await onStake(amount, farm.decimals);
    dispatch(fetchFarmUserDataAsync(account, farm));
    toastSuccess('Staked', `Your ${lpTokenName} funds have been staked in the pool!`);
  };

  const handleUnstake = async (amount) => {
    await onUnstake(amount, farm.decimals);
    dispatch(fetchFarmUserDataAsync(account, farm));
    toastSuccess('Unstaked', `Your ${lpTokenName} earnings have also been harvested to your wallet!`);
  };

  const [onPresentStakeModal] = useModal(<CurrencyModal
      title={`Deposit ${lpTokenName} Tokens`}
      max={tokenBalance}
      lpTokenName={lpTokenName}
      onConfirm={handleStake}
      priceCurrency={farm.price}
      decimals={farm.decimals}
  />);

  const [onPresentUnstakeModal] = useModal(<CurrencyModal
      title={`Withdraw ${lpTokenName}`}
      max={stakedBalance}
      lpTokenName={lpTokenName}
      onConfirm={handleUnstake}
      priceCurrency={farm.price}
      decimals={farm.decimals}
  />);


  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      await onApprove();
      toastSuccess('Contract Enabled', `You can now stake in the ${lpTokenName} pool!`);
      dispatch(fetchFarmUserDataAsync(account, farm));
      setRequestedApproval(false);
    } catch (e) {
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
      setRequestedApproval(false);
    }
  }, [account, dispatch, farm, lpTokenName, onApprove, toastError, toastSuccess]);

  return (
      <>
        <Card>
          <Wrapper
              justifyContent="space-between"
              flexDirection="column"
          >
            <div>
              {
                farm?.token0?.symbol
                  ?  <CardLogo
                        src1={`/tokens/${farm?.token0?.symbol?.toLowerCase()}.png`}
                        src2={`/tokens/${farm?.token1?.symbol?.toLowerCase()}.png`}
                    />
                    :  <CardLogo
                        src1={`/tokens/${farm?.symbol?.toLowerCase()}.png`}
                    />
              }
              <Value
                  color="secondary"
                  fontSize="32px"
                  value={account ? getBalanceNumber(stakedBalance, farm.decimals) : 0}
                  decimals={4}
              />
              <Value
                  fontSize="14px"
                  prefix="~"
                  value={account ? usdTokenStaking : 0}
                  decimals={2}
                  unit=" USD"
              />
              <Text>{lpTokenName} Tokens Staked</Text>
            </div>
            {account ? (
                userData.userDataLoaded
                    ? isApproved ? (
                        <Flex alignItems="center" justifyContent="center">
                          <Button
                              mt="20px"
                              mr="10px"
                              style={{flex: 1}}
                              disabled={stakedBalance.eq(new BigNumber(0))}
                              onClick={onPresentUnstakeModal}
                          >
                            Unstake
                          </Button>
                          <IconButton
                              onClick={onPresentStakeModal}
                              mt="20px"

                          >
                            <Text color="black" fontSize="32px" bold>+</Text>
                          </IconButton>
                        </Flex>
                    ) : (
                        <Button
                            width="100%"
                            mt="20px"
                            disabled={requestedApproval}
                            onClick={handleApprove}
                        >
                          Approve Contract
                        </Button>
                    )
                    : <Button
                        width="100%"
                        mt="20px"
                        disabled
                    >...</Button>
            ) : (
                <UnlockButton
                    mt="20px"
                    width="100%"
                />
            )}
          </Wrapper>
        </Card>
      </>
  );
};

Stake.propTypes = {
  farm: PropTypes.object.isRequired,
  lpTokenName: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired
};

export default Stake;
