import './App.css';
import Home from './pages/Home.jsx'
import Microsoft from './pages/Microsoft.jsx'
import WDIV from './pages/WDIV.jsx'
import AWM from './pages/AWM.jsx'
import Web3 from './pages/Web3.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import { DAppProvider, Mainnet } from '@usedapp/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const config: config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: { [Mainnet.chainId]: 'https://eth-mainnet.alchemyapi.io/v2/NHlccCpTr-XbYJyCNpVaRTDhkuFMlQeC',},
  networks: [Mainnet],
  }

function App() {
  return (
    <DAppProvider config={{config}}>
       <Router>
        <Navbar />
         <Switch>
            <Route path="/Microsoft">
              <Microsoft />
            </Route>
            <Route path="/WDIV">
              <WDIV />
            </Route>
            <Route path="/AWM">
              <AWM />
            </Route>
            <Route path="/Web3">
              <Web3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      <Footer />
    </DAppProvider>
  );
}

export default App;
