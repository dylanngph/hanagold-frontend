import ModalProvider from 'components/Modal/ModalContext';
import { KardiachainContextProvider } from 'contexts/KardiachainContext';
import { LanguageProvider } from 'contexts/Localization/Provider';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { ToastsProvider } from 'contexts/ToastsContext/Provider';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async'
import ApplicationUpdater from 'store/application/updater'
import MulticallUpdater from 'store/multicall/updater'

import { RefreshContextProvider } from 'contexts/RefreshContext';
import store from 'store';

function Updaters() {
  return (
      <>
        <ApplicationUpdater />
        <MulticallUpdater />
      </>
  )
}

const Providers = ({children}) => {
  return (
      <KardiachainContextProvider>
        <Provider store={store}>
          <ToastsProvider>
          <HelmetProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <RefreshContextProvider>
                <ModalProvider>
                  <Updaters />
                  {children}
                </ModalProvider>
             </RefreshContextProvider>
            </LanguageProvider>
          </ThemeContextProvider>
          </HelmetProvider>
          </ToastsProvider>
        </Provider>
      </KardiachainContextProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node
};

export default Providers;
