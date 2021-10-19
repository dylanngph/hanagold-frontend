import Menu from 'components/Menu/Menu';
import ToastListener from 'contexts/ToastsContext/Listener';
import { ToastContainer } from 'react-toastify'
import LayoutSwap from 'components/Layout/LayoutSwap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useFetchPublicData, usePollBlockNumber } from 'store/hooks';
import GlobalStyle from 'styles/Global';
import ResetCSS from 'styles/ResetCSS';
import FarmOutside from 'views/FarmOutside/FarmOutside';
import Pool from 'views/Pool/Pool';
import Pools from 'views/Pools/Pools';
import Trade from 'views/Trade/Trade';
import history from './routerHistory'
import Home from 'views/Home/Home'
import Farm from 'views/Farm/Farm';
import Farms from 'views/Farms/Farms';
import Contact from 'components/Contact/Contact';
import Swap from 'views/Swap/Swap'
import { RedirectToSwap } from 'views/Swap/redirects'
import Liquidity from 'views/Liquidity/Liquidity'
import AddLiquidity from 'views/AddLiquidity/AddLiquidity'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from 'views/AddLiquidity/redirects'
import RemoveLiquidity from 'views/RemoveLiquidity/RemoveLiquidity'
import PoolFinder from 'views/PoolFinder/index'
import Launchpad from 'views/Launchpad/Launchpad';
import ComingSoon from 'views/ComingSoon/ComingSoon'
import LaunchpadDetails from 'views/Launchpad/LaunchpadDetails'
import MarketplaceDetails from 'views/Marketplace/MarketplaceDetails'
import Info from 'views/Info/Info'
import Bounty from 'views/Bounty/Bounty'
import Mint from 'views/Mint/Mint'
// import Member from 'views/Member/Member';
import DIPO from 'views/DIPO/dipo';
import Marketplace from 'views/Marketplace/Marketplace';
// import DipoOutside from 'views/DipoOutside/DipoOutside';
// import Trade from 'views/Trade/Trade';
// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function App() {
  useFetchPublicData()
  usePollBlockNumber()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Menu>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/launchpad">
            <ComingSoon />
          </Route>
          <Route exact path="/launchpad-details">
            <ComingSoon />
          </Route>
          {/* <Route path="/trade">
            <Trade />
          </Route> */}
          <Route path="/farms">
            <Farms />
          </Route>        
          <Route path="/farm/:lpAddress">
            <Farm />
          </Route>
          <Route path="/farmOutside/:lpAddress">
            <ComingSoon />
          </Route>
          <Route path="/pools">
            <Pools />
          </Route>
          <Route path="/pool/:pid">
            <Pool />
          </Route>
          <Route path="/marketplace">
            <ComingSoon />
          </Route>
          <Route path="/marketplace-details">
            <ComingSoon />
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/bounty">
            <Bounty/>
          </Route>
          <Route path="/mint">
            <Mint/>
          </Route>
          {/*<Route path="/member">*/}
          {/*  <Member />*/}
          {/*</Route>*/}
          <Route path="/dipo">
            <DIPO />
          </Route>
          {/*<Route path="/demotest" component={DipoOutside} />*/}
          <LayoutSwap>
            <Route path="/swap">
              <Swap />
            </Route>
            <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
            <Route exact strict path="/liquidity" component={Liquidity} />
            <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
            <Route exact path="/add" component={AddLiquidity} />
            <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact strict path="/find" component={PoolFinder} />
          </LayoutSwap>
        </Menu>
      </Switch>
      <ToastListener />
      {/* <ToastContainer newestOnTop /> */}
    </Router>
  )
}

export default App
