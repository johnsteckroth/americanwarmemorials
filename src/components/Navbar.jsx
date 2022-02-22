import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import ConnectToWalletButton from './ConnectToWalletButton';
import styled from 'styled-components';
import { useEthers } from '@usedapp/core';


const Navbar = () => {
    const { account, deactivate } = useEthers()
    
    function handleDeactivateAccount() {
        deactivate()
    }
  

    return (
        <div>
            <div className="navigation">
            <nav className="navbar navbar-custom navbar-expand-md navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        john steckroth
                        <span className="sr-only"></span>
                    </NavLink>

                    <div>
                        <ul className="navbar-nav ml-auto">

                           
                        
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Microsoft">microsoft</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/WDIV">wdiv-local4</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/AWM">awm</NavLink>
                            </li>
                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Web3">web3</NavLink>
                            </li>




                            <li className="nav-item">
                               
                                {account ? <ConnectButton onClick={() => handleDeactivateAccount()}> {account && `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`} </ConnectButton>
                        : <ConnectToWalletButton />}
                            </li>
                        </ul>
                    </div>
               </div>
            </nav>
            </div>  
        </div>
    )
}

const ConnectButton = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  border-radius: 6px;
  border: none;
  margin-top: 2px;

  background: #282c34;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: white;
  font-size: smaller;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:disabled {
      color: #282c34;

  }

`;

export default Navbar;