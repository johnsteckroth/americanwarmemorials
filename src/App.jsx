import './App.css';
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Submit from './pages/Submit.jsx'
import About from './pages/About.jsx'
import Donate from './pages/Donate.jsx'

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
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Submit">
              <Submit />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Donate">
              <Donate />
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
