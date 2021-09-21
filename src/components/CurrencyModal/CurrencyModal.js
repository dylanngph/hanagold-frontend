import BigNumber from 'bignumber.js';
import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import TokenInput from 'components/TokenInput/TokenInput';
import useToast from 'hooks/useToast';
import { useCallback, useMemo, useState } from 'react';
import { formatNumber, getFullDisplayBalance } from 'utils/formatBalance';
import PropTypes from 'prop-types';

const CurrencyModal = ({onDismiss, lpTokenName, max, onConfirm, title, priceCurrency, decimals = 18}) => {
  const [value, setValue] = useState('');
  const [pendingTx, setPendingTx] = useState(false);
  const {toastError} = useToast();

  const usdValue = value && formatNumber(new BigNumber(value).times(priceCurrency).toNumber());

  const isInsufficientBalance = useMemo(() => {
    return new BigNumber(value).isGreaterThan(getFullDisplayBalance(max, decimals));
  }, [value, max, decimals]);

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
    setValue(getFullDisplayBalance(max, decimals));
  }, [decimals, max]);

  return (
      <Modal title={title} onDismiss={onDismiss}>
        <div>
          <TokenInput
              currencyValue={priceCurrency && priceCurrency !== 0 && `~${usdValue || 0} USD`}
              max={max}
              onMax={handleMaxInput}
              symbol={lpTokenName}
              value={value}
              onUserInput={handleTypeInput}
              decimals={decimals}
          />
        </div>
        <Flex justifyContent="flex-end" mt="2">
          <Button
              disabled={pendingTx} color="secondary"
              mr="2"
              onClick={onDismiss}
          >
            Cancel
          </Button>
          <Button
              disabled={pendingTx || !new BigNumber(value).isGreaterThan(0) || isInsufficientBalance}
              onClick={handleConfirm}
          >
            {isInsufficientBalance
                ? `Insufficient ${lpTokenName} balance`
                : pendingTx
                    ? 'Pending Confirmation'
                    : 'Confirm'}
          </Button>
        </Flex>
      </Modal>
  );
};

CurrencyModal.propTypes = {
  onDismiss: PropTypes.func,
  lpTokenName: PropTypes.string.isRequired,
  max: PropTypes.any,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  priceCurrency: PropTypes.number,
  decimals: PropTypes.number,
}

export default CurrencyModal;