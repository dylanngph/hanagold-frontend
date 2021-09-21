import Modal from 'components/ModalCustom/Modal';
import ModalTitle from 'components/ModalCustom/ModalTitle';
import { useCallback } from 'react';
import CurrencySearch from 'views/Trade/conponents/CurrencySearchModal/CurrencySearch';

const CurrencySearchModal = ({
                               open,
                               onDismiss,
                               onCurrencySelect,
                               selectedCurrency,
                               otherSelectedCurrency
                             }) => {

  const handleCurrencySelect = useCallback(
      (currency) => {
        onDismiss();
        onCurrencySelect(currency);
      },
      [onDismiss, onCurrencySelect]
  );

  return (
      <Modal open={open} onClose={onDismiss} className="w-full sm:w-unset">
        <ModalTitle onClose={onDismiss}>Select a Token</ModalTitle>
        <div>
          <CurrencySearch
              onCurrencySelect={handleCurrencySelect}
              selectedCurrency={selectedCurrency}
              otherSelectedCurrency={otherSelectedCurrency}
          />
        </div>
      </Modal>
  );
};

export default CurrencySearchModal;