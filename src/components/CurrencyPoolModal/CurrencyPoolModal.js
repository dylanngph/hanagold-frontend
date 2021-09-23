import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import TokenInput from 'components/TokenInput/TokenInput';
import useToast from 'hooks/useToast';
import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance';

const CurrencyPoolModal = ({
                             onDismiss,
                             max,
                             onConfirm,
                             userData,
                             pool,
                             priceCurrency,
                             isCanStake,
                             isDeposit
                           }) => {
  const {toastError} = useToast();
  const {stakingToken, stakingLimit, poolLimit} = pool;
  const [value, setValue] = useState('');
  const [pendingTx, setPendingTx] = useState(false);
  const [hasReachedStakeLimit, setHasReachedStakedLimit] = useState(false);

  const usdValue = value && formatNumber(new BigNumber(value).times(priceCurrency).toNumber());

  useEffect(() => {
    if (stakingLimit.gt(0) && isDeposit) {
      const fullDecimalStakeAmount = new BigNumber(value);
      setHasReachedStakedLimit(
          fullDecimalStakeAmount
              .plus(getBalanceNumber(userData.stakedBalance, stakingToken.decimals))
              .gt(getBalanceNumber(stakingLimit, stakingToken.decimals))
      );
    }
  }, [value, stakingLimit, userData, stakingToken, isDeposit, setHasReachedStakedLimit]);

  const isInsufficientBalance = useMemo(() => {
    return new BigNumber(value).isGreaterThan(getFullDisplayBalance(max, stakingToken.decimals));
  }, [value, max, stakingToken.decimals]);

  const handleTypeInput = (valueInput) => {
    setValue(valueInput);
  };

  const handleConfirm = useCallback(async () => {
    try {
      setPendingTx(true);
      await onConfirm(value);
      setPendingTx(false);
      onDismiss();
    } catch (e) {
      console.log(e);
      toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
      setPendingTx(false);
    }
  }, [onConfirm, onDismiss, toastError, value]);

  const handleMaxInput = useCallback(() => {
    if (stakingLimit.gt(0) && isDeposit) {
      const valueUserPossibleStaking = new BigNumber(getBalanceNumber(stakingLimit, stakingToken.decimals)).minus(
          getBalanceNumber(userData.stakedBalance, stakingToken.decimals)
      );

      if (valueUserPossibleStaking.lte(getBalanceNumber(userData.stakingTokenBalance, stakingToken.decimals))) {
        return setValue(valueUserPossibleStaking.toString());
      }
    }

    setValue(getFullDisplayBalance(max, stakingToken.decimals));
  }, [isDeposit, max, stakingLimit, stakingToken.decimals, userData.stakedBalance, userData.stakingTokenBalance]);

  return (
      <Modal
          onDismiss={onDismiss}
          title={isDeposit ? `Deposit ${stakingToken.symbol} Tokens` : `Withdraw ${stakingToken.symbol}`}>
        <div>
          <TokenInput
              decimals={stakingToken.decimals}
              currencyValue={priceCurrency && priceCurrency !== 0 && `~${usdValue || 0} USD`}
              max={max}
              onMax={handleMaxInput}
              symbol={stakingToken.symbol}
              value={value}
              onUserInput={handleTypeInput}
          />
        </div>
        {
          hasReachedStakeLimit && (
              <Text
                  ml="auto"
              >
                Maximum total stake: {formatNumber(getBalanceNumber(stakingLimit, stakingToken.decimals), 0)}{' '}
                {stakingToken.symbol}
              </Text>
          )
        }
        {!isCanStake && isDeposit && (
            <Text
                mt="2"
                color="failure"
            >
              Pool has not started yet. Your transaction will fail!
            </Text>
        )}
        <Flex justifyContent="flex-end" mt="2">
          <Button
              disabled={pendingTx} color="secondary"
              mr="2"
              onClick={onDismiss}
          >
            Cancel
          </Button>
          <Button
              disabled={
                pendingTx || !new BigNumber(value).isGreaterThan(0) || isInsufficientBalance || hasReachedStakeLimit
              }
              onClick={handleConfirm}
          >
            {isInsufficientBalance
                ? `Insufficient ${stakingToken.symbol} balance`
                : pendingTx
                    ? 'Pending Confirmation'
                    : 'Confirm'}
          </Button>
        </Flex>
      </Modal>
  );
};

CurrencyPoolModal.propTypes = {
  onDismiss: PropTypes.func,
  max: PropTypes.any,
  onConfirm: PropTypes.func.isRequired,
  pool: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  isDeposit: PropTypes.bool,
  isCanStake: PropTypes.bool,
  priceCurrency: PropTypes.number
};

export default CurrencyPoolModal;
