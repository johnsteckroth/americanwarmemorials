import React from 'react';
import "../custom.css";
import LOGO from '../images/Web3.png';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';


const Web3 = () => {
    const { account } = useEthers()
    const etherBalance = useEtherBalance(account)

    return (
        <div className="AWM">
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>Web 3 Developer</b></h1>
                            <h3 class="font-weight-light"><b>johnsteckroth.eth</b></h3>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-5">
                        <div><br></br></div>
                        <p>The new layer of the internet is here! I have experience writing Solidity and deploying smart contracts to the ethereum network, as well as working within the React JavaScript library to create wicked sweet frontends.</p>
                        <p>I like to keep my web3 persona separate from my real life identity so I'm not going to link to the many projects I am working on here, but reach out if you are interested in seeing that side of my portfolio and I will provide you with links.</p>
                    </div>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-4">
                        <div class="contain1">
                            <div class="contain4">
                                <div><br></br><br></br></div>
                                    <img src={LOGO} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            </div>
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                            <p>If you connect your wallet to the site using the button in the navigation bar, then I have some fun info for you below: </p>
                            <ul>
                            <li><strong>Account:</strong> {account ? <>{account && <> {account}</>}</> : 'not connected'}&nbsp; &nbsp;{account ? '💳Nice wallet address you got there💳' : ''}</li>
                            <li><strong>Balance:</strong> {etherBalance ? <>{etherBalance && <> {formatEther(etherBalance)}</>}</> : 'not connected'}&nbsp; &nbsp;{etherBalance ? <>{etherBalance <= 0 ? '💵You are crypto poor. Go get yourself some computer cash💵' : '💰Look at you Mr. Moneybags💰'}</> : ''}</li>
                                <li>HMMM </li>
                                <li>ENS: </li>
                                <li>Something Else</li>
                                <li>HMMM</li>
                                
                                
                            </ul>
                        </div>
                        
                        <div class="col-lg-1">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                            
                            
                        </div>
                        
                        <div class="col-lg-1">
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <p><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
);
}



export default Web3;