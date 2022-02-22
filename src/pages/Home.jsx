import React from 'react';
import "../custom.css";
import ABOUT from '../images/about.jpg';
import SKI1 from '../images/Ski1.jpg'
import SKI2 from '../images/Ski2.jpg'
import PHONE from '../images/Phone.gif'
import ICON1 from '../images/Icon_Twitter.png'
import ICON2 from '../images/Icon_LinkedIn.png'
import ICON3 from '../images/Icon_Email.png'
import ICON4 from '../images/Icon_MSFT.png'


const Home = () => {
    
    return (
        <div className="Web3">
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>John Steckroth</b></h1>
                            <h3 class="font-weight-light"><b>The Website</b></h3>
                            </center>
                            <br></br>
                            <div class="row align-items-center my-5">
                            <div class="col-lg-1">
                            </div>
                                <div class="col-lg-5">

                                    <center>
                                <h5 class="font-weight-light"><b>Former Journalist</b></h5>
                                <h5 class="font-weight-light"><b>Current Community Manager</b></h5>
                                <h5 class="font-weight-light"><b>Future Web3 Developer</b></h5>
                                </center>
                                                      
                            </div>
                            <div class="col-lg-5">
                            <center>
                            <h5 class="font-weight-light"><b>Competitive Time Traveler</b></h5>
                            <h5 class="font-weight-light"><b>Best Skier on the Mountain</b></h5>
                            <h5 class="font-weight-light"><b>Undefeated in All Professional Sports</b></h5>
                                </center>
                            </div>
                            <div class="col-lg-1">
                            </div>
                            </div>
                            </div>

</div>
<div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            
                            <h3 class="font-weight-light"><b>About</b></h3>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        <p>Marketing communications professional, currently living in Seattle and working as the lead community manager for Microsoft Teams. </p>
                        <p>For the last few years I've been providing blog and editorial strategy for Microsoft Teams while overseeing multiple official Microsoft social channels. In this time, I've created digital marketing campaigns, amplified product news, engaged with users, hosted virtual events, produced webinars, generated analytics reports, and managed the editorial calendar.</p>
                        <p>I previously worked as a web producer at the NBC affiliate in Detroit and had the chance to write about subjects ranging from a major city in post-bankruptcy and the automotive world within it, to leaded water and the local crime beat in one of America's most dangerous cities. </p>
                        <p>I hold a B.A. in Journalism and English, along with certifications related to Microsoft 365, Microsoft Teams, Tech Adoption, and social media management. I don't have any formal CS training but have a basic understanding of solidity, javascript, css, html, and a little pit of python.</p>
                    </div>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-4">
                        <div class="contain1">
                            <div class="contain4">
                                <div><br></br><br></br></div>
                                    <img src={ABOUT} 
                                        class="img-fluid rounded-circle mb-4 mb-lg-0"
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
                            <p>Danger isn't my middle name, it's Edward, but I like to live to the fullest and sometimes participate in extreme activities. My hobbies include skiing, sailing, and camping. Here are some photographs for you to enjoy:</p>
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                    <div class="col-lg-1">
                        </div>
                        
                        <div class="col-lg-5">
                        <div class="contain1">
                            
                                
                                    <img src={SKI2} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="contain1">
                            
                                
                                    <img src={SKI1} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        
                        <div class="col-lg-12">
                            
                            <br></br>
                        </div>
                        
                        
                       
                    </div>
                    
                </div>
                </div>
            
          
                        <div className="contain2">
                            <div class="row align-items-center my-5">
                            <div><br></br></div>
                                <center>
                                    <h3 class="font-weight-light"><b>Contact</b></h3>
                                </center>
                                <div class="col-lg-1">
                                </div>
                                    <div class="col-lg-5">
                                        
                                        <p>Direct contact information can be found here: <a href="http://localhost:3000/src/images/John_Steckroth_Resume.pdf" target="_blank" >John Steckroth CV</a> </p>
                                        
                                        
                                        <div className="contain2">
                                        <div class="row align-items-center my-5">
                                        <div class="col-lg-1">
                                </div>
                                    <div class="col-lg-5">
                                    <a href="https://www.linkedin.com/in/johnsteckroth/" target="_blank"><img 
                                        src={ICON2}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://www.linkedin.com/in/johnsteckroth/" target="_blank">LinkedIn</a></>
                                        <br></br>
                                        <br></br>
                                        <a href="https://twitter.com/John_Steckroth" target="_blank"><img 
                                        src={ICON1}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://twitter.com/John_Steckroth" target="_blank">Twitter</a></>
                                        
                                        
                                    </div>

                                    <div class="col-lg-5">
                                        <a href="mailto: johnsteckroth@gmail.com" target="_blank"><img 
                                        src={ICON3}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="mailto: johnsteckroth@gmail.com" target="_blank">Email</a></>
                                        <br></br>
                                        <br></br>
                                        <a href="https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/605370#profile" target="_blank"><img 
                                        src={ICON4}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/605370#profile" target="_blank">Tech Community</a></>
                                    </div>
                                    <div class="col-lg-1">
                                </div>

                                    </div></div>

                                    </div>
                                <div class="col-lg-1">
                                </div>
                                <div class="col-lg-4">
                                    <div class="contain1">
                                        <div class="contain4">
                                            <div><br></br><br></br></div>
                                                <img src={PHONE} 
                                                    class="img-fluid rounded-corners"

                                                />
                                        </div>
                                    </div>
                                <div class="col-lg-1">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">
                        
                        <div class="col-lg-12">
                            
                            <br></br><br></br>
                        </div>
                        
                        
                       
                    </div>
               
                
                    </div>
    </div>
);
}

export default Home;