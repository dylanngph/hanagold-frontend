import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import CardLogo from 'components/Card/CardLogo';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import Value from 'components/Value/Value';
import address from 'constants/contracts';
import useKardiachain from 'hooks/useKardiachain';
import useHarvest from 'hooks/useHarvest';
import useToast from 'hooks/useToast';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { fetchFarmOutsideUserDataAsync } from 'store/farmsOutside/index';
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance';

import styled from 'styled-components';

const Wrapper = styled(Flex)`
  height: 100%;
`;

const Harvest = ({farm, earnings}) => {
  const {pid} = farm;
  const dispatch = useDispatch();
  const {account} = useKardiachain();
  const {toastSuccess, toastError} = useToast();

  const [pendingTx, setPendingTx] = useState(false);
  const {onHarvest} = useHarvest(pid, address.masterChefDfl);

  const usdTokenEarning = earnings ? new BigNumber(getFullDisplayBalance(earnings)).times(farm.earningTokenPrice).toNumber() : 0;

  const handleHarvest = useCallback(async () => {
    try {
      setPendingTx(true);
      await onHarvest();
      toastSuccess('Harvested', `Your ${farm.earningToken.symbol} earnings have been sent to your wallet!`);
      dispatch(fetchFarmOutsideUserDataAsync(account, farm));
      setPendingTx(false);
    } catch (e) {
      console.log(e);
      setPendingTx(false);
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
      console.error(e);
    }
  }, [account, dispatch, farm, onHarvest, toastError, toastSuccess]);

  return (
      <Card>
        <Wrapper
            justifyContent="space-between"
            flexDirection="column"
        >
          <div>
            <CardLogo src1={
              `/tokens/${farm.earningToken.symbol.toLowerCase()}.png`
            }/>
            <Value
                color="secondary"
                fontSize="32px"
                value={account ? getBalanceNumber(earnings) : 0}
            />
            <Value
                fontSize="14px"
                prefix="~"
                value={account ? usdTokenEarning : 0}
                decimals={2}
                unit="USD"
            />
            <Text>{farm.earningToken.symbol} Earned</Text>
          </div>
          {account ? (
              <Button
                  mt="20px"
                  width="100%"
                  disabled={pendingTx || earnings.eq(new BigNumber(0))}
                  onClick={handleHarvest}
              >
                {pendingTx ? `Collecting ${farm.earningToken.symbol}` : 'Harvest'}
              </Button>
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

Harvest.propTypes = {
  farm: PropTypes.object.isRequired,
  earnings: PropTypes.instanceOf(BigNumber)
};

export default Harvest;
