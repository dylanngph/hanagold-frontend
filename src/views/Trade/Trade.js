import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { TABS } from 'constants/index';
import useDebounce from 'hooks/useDebounce';
import { useMemo, useState } from 'react';
import { useTrade } from 'store/trade/hooks';
import Search from 'views/Trade/conponents/Search/Search';
import TableTokenizedStocks from 'views/Trade/conponents/TokenizedStocks/TableTokenizedStocks/TableTokenizedStocks';
import TradeTabButtons from 'views/Trade/conponents/TradeTabButtons/TradeTabButtons';

const Trade = () => {
  const [tab, setTab] = useState(TABS.swap)
  return (
        <Page>
          <PageHeader
              logo="/hng-logo.png"
              title="Swap"
          />
          <div className="px-3">
            <TradeTabButtons tab={tab} setTab={setTab}/>
          </div>
        </Page>
    );
  };
  
  export default Trade;