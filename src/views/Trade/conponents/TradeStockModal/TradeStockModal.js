import Modal from 'components/Modal/Modal';
import { Field } from 'store/swap/actions';
import { useDefaultsFromTrade, useDerivedSwapInfo } from 'store/swap/hooks';
import styled from 'styled-components';
import CurrencyInputPanel from 'views/Trade/conponents/CurrencyInputPanel/CurrencyInputPanel';

const Card = styled.div`
  background: linear-gradient(90.49deg, rgba(255, 255, 255, 0.06) 6.72%, rgba(255, 255, 255, 0.01) 77.46%);
`;

const TradeStockModal = ({onDismiss, trade}) => {
  useDefaultsFromTrade(trade)

  const {currencies, currencyBalances, inputError} = useDerivedSwapInfo();

  return (
      <Modal title="Trade" onDismiss={onDismiss}
             stylesBody={{
               background: 'linear-gradient(106.94deg, rgba(255, 255, 255, 0.17) 24.69%, rgba(255, 255, 255, 0.1) 82.76%)'
             }}
      >
        <div>
          <Card className="rounded-2xl p-3">
            <CurrencyInputPanel
            currency={currencies[Field.INPUT]}
            otherCurrency={currencies[Field.OUTPUT]}
            />
            <img src="/icon/arrow-swap.png"
                 className="mx-auto"
            />
            <CurrencyInputPanel
                currency={currencies[Field.OUTPUT]}
                otherCurrency={currencies[Field.INPUT]}
            />
          </Card>
        </div>
      </Modal>
  );
};

export default TradeStockModal;