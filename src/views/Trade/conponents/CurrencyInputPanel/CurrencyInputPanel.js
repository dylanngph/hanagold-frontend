import Button from 'components/Button/Button';
import CurrencyLogo from 'components/CurrencyLogo/CurrencyLogo';
import useModal from 'components/Modal/useModal';
import ArrowDownIcon from 'components/Svg/ArrowDownIcon';
import useKardiachain from 'hooks/useKardiachain';
import { useCurrencyBalance } from 'hooks/wallet';
import { useState } from 'react';
import { getBalanceNumber } from 'utils/formatBalance';
import CurrencySearchModal from 'views/Trade/conponents/CurrencySearchModal/CurrencySearchModal';

import { Input as NumericalInput } from './NumericalInput';

export default function CurrencyInputPanel({
                                             value,
                                             onUserInput,
                                             onMax,
                                             showMaxButton,
                                             label,
                                             onCurrencySelect,
                                             currency,
                                             disableCurrencySelect = false,
                                             hideBalance = false,
                                             pair = null, // used for double token logo
                                             hideInput = false,
                                             otherCurrency,
                                             id,
                                             showCommonBases,
                                             fiatValue,
                                             priceImpact,
                                             disableInput = false,
                                             listHideTokens
                                           }) {
  const [PresentCurrencyModal, setPresentCurrencyModal] = useState(false)
  const {account} = useKardiachain();
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined);
  const translatedLabel = label || 'Input';

  const toggleCurrencyModal = () => setPresentCurrencyModal((prevState) => !prevState)

  return (
      <>
        <CurrencySearchModal
            open={PresentCurrencyModal}
            onDismiss={toggleCurrencyModal}
            onCurrencySelect={onCurrencySelect}
            selectedCurrency={currency}
            otherSelectedCurrency={otherCurrency}
        />
        <div className="flex flex-nowrap flex-col bg-blue2 p-2 rounded-2xl" id={id}>
          <div className="rounded-2xl">
            {!hideInput && (
                <div className="flex flex-nowrap items-center justify-between text-white font-bold mb-2">
                  <p>{translatedLabel}</p>
                  <div className="flex items-center cursor-pointer">
                    {account && (
                        <p onClick={onMax}>
                          {!hideBalance && !!currency && selectedCurrencyBalance
                              ? `Balance ${getBalanceNumber(selectedCurrencyBalance, currency?.decimals)}`
                              : ' -'}
                        </p>
                    )}
                    {account && currency && showMaxButton && label !== 'To' && (
                        <button className="text-sm ml-1 bg-primary rounded px-1.5 py-px" onClick={onMax}>
                          MAX
                        </button>
                    )}
                  </div>
                </div>
            )}
            <div
                className="flex items-center justify-between flex-1"
                style={hideInput ? {padding: '0', borderRadius: '8px'} : {}}
            >
              {!hideInput && (
                  <div className="flex-1">
                    <div className="overflow-auto flex-1">
                      <NumericalInput
                          disabled={disableInput}
                          value={value}
                          onUserInput={(val) => {
                            onUserInput(val);
                          }}
                      />
                    </div>
                  </div>
              )}
              <div
                  style={{
                    background: '#101133'
                  }}
                  className="ml-2 whitespace-nowrap h-12 rounded-2xl text-white font-bold px-2"
                  onClick={() => {
                    if (!disableCurrencySelect) {
                      toggleCurrencyModal();
                    }
                  }}
              >
                <div className="flex items-center justify-between h-full">
                  {currency ? (
                      <CurrencyLogo src={currency?.src}/>
                  ) : null}
                  <p className="ml-1">
                    {(currency && currency.symbol && currency.symbol.length > 20
                        ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length
                        )}`
                        : currency?.symbol) || 'Select a token'}
                  </p>

                  {!disableCurrencySelect && <ArrowDownIcon className="w-3 ml-2"/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
