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
  const data = useTrade()
  const [tab,setTab] = useState(TABS.stocks)
  const [search, setSearch] = useState('')
  const debouncedQuery = useDebounce(search, 300)

  const filterDataBySearch = useMemo(() => {
    return data.filter((trade) => {
      const nameDisplay = trade?.market?.base
      return nameDisplay.toLowerCase().includes(debouncedQuery.toLowerCase())
    })
  }, [data, debouncedQuery])

  return (
        <Page>
          <PageHeader
              logo="/logo.png"
              title="Swap"
          />
          <div className="px-3">
            <TradeTabButtons tab={tab} setTab={setTab}/>
            <Search setSearch={setSearch}/>
            <TableTokenizedStocks data={filterDataBySearch}/>
          </div>
        </Page>
    );
  };
  
  export default Trade;