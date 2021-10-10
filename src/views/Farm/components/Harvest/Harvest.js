import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button';
import {Box} from '@mui/material'
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
import { fetchFarmUserDataAsync } from 'store/farms/index';
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
  const {onHarvest} = useHarvest(pid, address.masterChef);

  const usdTokenEarning = earnings ? new BigNumber(getFullDisplayBalance(earnings)).times(farm.earningTokenPrice).toNumber() : 0;

  const handleHarvest = useCallback(async () => {
    try {
      setPendingTx(true);
      await onHarvest();
      toastSuccess('Harvested', `Your token earnings have been sent to your wallet!`);
      dispatch(fetchFarmUserDataAsync(account, farm));
      setPendingTx(false);
    } catch (e) {
      console.log(e);
      setPendingTx(false);
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
      console.error(e);
    }
  }, [account, dispatch, farm, onHarvest, toastError, toastSuccess]);

  return (
      <>
        {/* <Wrapper
            justifyContent="space-between"
            flexDirection="column"
        >
          <div>
            <div style={{
              padding: '20px',
              backgroundColor: '#FFC247',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px'
            }}>
              <CardLogo src1="/tokens/ltd.png"/>
            </div>
            <div  style={{
              padding: '20px',
            }}>
              <Value
                  color="secondary"
                  fontSize="32px"
                  value={account ? getBalanceNumber(earnings) : 0}
              />
              <Value
                  color="primary"
                  fontSize="14px"
                  prefix="~"
                  value={account ? usdTokenEarning : 0}
                  decimals={2}
                  unit=" USD"
              />
              <Text color="primary">LTD Earned</Text>
            </div>
          </div>
          {account ? (
              <Button
                  mt="20px"
                  width="100%"
                  disabled={pendingTx || earnings.eq(new BigNumber(0))}
                  onClick={handleHarvest}
              >
                {pendingTx ? 'Collecting LTD' : 'Harvest'}
              </Button>
          ) : (
              <UnlockButton
                  mt="20px"
                  width="100%"
              />
          )}
        </Wrapper> */}
        <ParameterSection>
          <Box display="flex" flexDirection="column" textAlign="left">
            <Text bold color="primary">HNG Earn:</Text>
            <Box>
              <Value
                  color="primary"
                  fontSize="28px"
                  value={account ? getBalanceNumber(earnings, 6) : 0}
                  decimals={6}
              />
              <Value
                  color="rgba(255,255,255, .5)"
                  fontSize="14px"
                  prefix="~"
                  value={account ? usdTokenEarning : 0}
                  decimals={6}
                  unit=" USD"
              />
            </Box>
          </Box>
          <Box display= "flex" alignItems="center">
            <HarvestButton
                  mt="20px"
                  width="100%"
                  disabled={pendingTx || earnings.eq(new BigNumber(0))}
                  onClick={handleHarvest}
              >
                {pendingTx ? 'Collecting' : 'Harvest'}
              </HarvestButton>
          </Box>
        </ParameterSection>
      </>
  );
};
const ParameterSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px
`
const HarvestButton = styled(Button)`
  background-color: #31D0AA;
  color: #000;
  border-radius: 4px;
`

Harvest.propTypes = {
  farm: PropTypes.object.isRequired,
  earnings: PropTypes.instanceOf(BigNumber)
};

export default Harvest;
