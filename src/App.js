import Menu from 'components/Menu/Menu';
import ToastListener from 'contexts/ToastsContext/Listener';
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
// import Member from 'views/Member/Member';
// import DIPO from 'views/DIPO/dipo';
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
          <Contact/>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/trade">
            <Trade />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>        
          <Route path="/farm/:lpAddress">
            <Farm />
          </Route>
          <Route path="/farmOutside/:lpAddress">
            <FarmOutside />
          </Route>
          <Route path="/pools">
            <Pools />
          </Route>
          <Route path="/pool/:pid">
            <Pool />
          </Route>
          {/*<Route path="/member">*/}
          {/*  <Member />*/}
          {/*</Route>*/}
          {/*<Route path="/dipo">*/}
          {/*  <DIPO />*/}
          {/*</Route>*/}
          {/*<Route path="/demotest" component={DipoOutside} />*/}
          <Route path="/swap">
            <Swap />
          </Route>
          <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
        </Menu>
      </Switch>
      <ToastListener />
    </Router>
  )
}

export default App
