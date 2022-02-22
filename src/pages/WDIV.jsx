import React from 'react';
import "../custom.css";
import LOGO from '../images/Local4_logo.jpg';
import LOGO1 from '../images/JasonCarrLive_logo.jpg';
import LOGO3 from '../images/JasonCarrLive.jpg';
import LOGO2 from '../images/LiveStream.jpg';

const WDIV = () => {
    
    return (
        <div className="AWM">
            <div class="container">
                <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>WDIV - Local 4 News</b></h1>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-5">
                            <div><br></br></div>
                            <p>The Detroit news market is unlike any in the country and we at ClickOnDetroit.com aimed to provide both fast and accurate information to the public each day. With the work of a small dedicated web staff, we consistently beat out all other Metro Detroit TV, newspaper and media websites. As the senior digital editor, I sat on the assignment desk and was actively coordinating our daily web strategy, gathering information from reporters at the scene and monitoring video feeds from photographers to produce long-form content for the website. </p>
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
                            <p>Here's a brief look at just a few of the tens of thousands of stories I worked on: </p>
                            <ul>
                                <li><a href="https://www.clickondetroit.com/news/2018/04/10/michigan-supreme-court-hears-arguments-over-banning-guns-in-schools/">Michigan Supreme Court hears arguments over banning guns in schools</a></li>
                                <li><a href="https://www.clickondetroit.com/news/2017/12/20/detroit-teens-deadly-atv-crash-prosecutor-seeks-murder-charge-against-state-trooper/">Detroit teen's deadly ATV crash: Prosecutor seeks murder charge against state trooper</a></li>
                                <li><a href="https://www.clickondetroit.com/news/2016/09/12/detroit-police-address-another-summer-weekends-violence/">Detroit police address another summer weekend's violence</a></li>
                                <li><a href="https://www.clickondetroit.com/news/2018/01/23/watch-day-6-of-victims-addressing-former-doctor-larry-nassar-at-sentencing-in-sexual-abuse-cases/">Victims continue addressing former doctor Larry Nassar at sentencing in sexual abuse cases</a></li>
                                <li><a href="https://www.clickondetroit.com/news/2018/03/07/man-sentenced-to-probation-for-accessory-to-fatal-shooting-of-detroit-auto-parts-store-manager/">Man sentenced to probation for accessory to fatal shooting of Detroit auto parts store manager</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-1">
                        </div>
                        
                            <div class="col-lg-1">
                            </div>
                                <div class="col-lg-5">
                                    <div><br></br></div>
                                    <p>I was tasked with building an informal variety talk show to live stream on ClickOnDetroit.com and Facebook Live in the goal of selling a sponsorship and engaging with our audience. The result was Jason Carr Live. As the producer, I organized content involving world record attempts and animals doing amazing things. As the director, I handled the technical aspects of the stream and operated the studio. As co-host, I simply gave Jason a person to banter with and kept a bad joke ready. And when Jason was out sick, I got a little camera time and hosted the show myself. </p>
                                    
                                </div>
                                <div class="col-lg-1">
                                </div>
                                <div class="col-lg-4">
                                    <div class="contain1">
                                        <div class="contain5">
                                            <div><br></br><br></br></div>
                                                <img src={LOGO1} 
                                                    class="img-fluid rounded mb-4 mb-lg-0"
                                                />
                                        </div>
                                    </div>
                                <div class="col-lg-1">
                                </div>
                                    </div>
                                    <div class="col-lg-1">
                                        </div>

                    <div class="col-lg-1">
                        </div>
                        
                        <div class="col-lg-5">
                        <div class="contain1">
                            
                                <div><br></br><br></br></div>
                                    <img src={LOGO2} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="contain1">
                            
                                <div><br></br><br></br></div>
                                    <img src={LOGO3} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                        <div class="row align-items-center my-5">
                            <div class="col-lg-5">
                            </div>
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

export default WDIV;