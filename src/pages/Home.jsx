import React from 'react';
import "../custom.css";
import HOMEPAGE from '../images/homepage1.jpg'
import ICON1 from '../images/Icon_Twitter.png'
import ICON2 from '../images/Icon_LinkedIn.png'
import ICON3 from '../images/Icon_Email.png'
import ICON4 from '../images/awmologo.png'
import { NavLink } from "react-router-dom";


const Home = () => {
    
    return (
        <div className="Home">
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-5">
                        <div><br></br></div>
                        <img src={HOMEPAGE} class="img-fluid rounded mb-4 mb-lg-0" />
                        <div class="col-lg-1">
                        <br></br>
                    </div>    
                </div>
            </div>
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                    <div><br></br></div>
                        <center>  
                            <h3 class="font-weight-light"><b>Welcome to American War Memorials</b></h3>
                            <br></br>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                            <p>Our mission at American War Memorials is to compile a database of monuments, plaques, statues, museums, and permanent objects that commemorate America’s wartime legacy.  We also aim to provide assistance to monuments in need of restoration to ensure the memory of our fallen soldiers is permanent.  Search through our database and learn about America’s military history.</p>
                            <br></br>
                            <p><b>Help Us</b><br></br>
                            We understand how this is a huge undertaking.  Find your local war memorials and send us any information to help us complete our goal.  We are building a submission page for you to help us build our database so please check back soon.</p>
                            <br></br>
                            <p><b>Search our Database</b><br></br>
                            Our database is currently under construction and we're working create a functional environment for users. Soon you'll be able to search by keywords, location, wars, people, and more. </p><br></br>
                            
                            <p><b>Donate</b><br></br>
                            American War Memorials Inc. is not currently a recognized 501(c)3 non-profit organization and so we are not taking donations at this time. Please learn more here.
                            </p><br></br>
                            <p><b>Newsletter</b><br></br>
                            Join our newsletter to receive updates to our progress, see new memorials, and stay connected to America’s history. We are currently working on getting this publication back underway.
                            </p>
                        </div>
                        <div><br></br></div>
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
                    <div><br></br></div>
                        <center>  
                        <h3 class="font-weight-light"><b>Contact</b></h3>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                        <p>Follow us on social media and feel free to contact us by email with any inqueries. Be sure to check back as we continue to make improvements to the website. </p>
                        </div>                  
                        <center>
                            <div class="col-lg-5">
                                <div className="contain1">
                                    <div class="row align-items-center my-5">
                                    <div class="col-lg-5">
                                    <a href="https://www.linkedin.com/company/american-war-memorials/" target="_blank"><img 
                                        src={ICON2}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://www.linkedin.com/company/american-war-memorials/" target="_blank">LinkedIn</a></>
                                        <br></br>
                                        <br></br>
                                        <a href="https://twitter.com/USWarMemorials" target="_blank"><img 
                                        src={ICON1}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://twitter.com/USWarMemorials" target="_blank">Twitter</a></>
                                    </div>
                                    <div class="col-lg-5">
                                        <a href="mailto: americanwarmemorials@gmail.com" target="_blank"><img 
                                        src={ICON3}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="mailto: americanwarmemorials@gmail.com" target="_blank">Email</a></>
                                        <br></br>
                                        <br></br>
                                        <a href="https://www.uswarmemorials.org/" target="_blank"><img 
                                        src={ICON4}
                                        height="35px"
                                        class="rounded-circle"
                                        /></a><>&nbsp;<a href="https://www.uswarmemorials.org/" target="_blank">AWMO</a></>
                                    </div>
                                    <div class="col-lg-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </center>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-12"> 
                            <br></br>
                        </div>   
                    </div>
                </div>
            </div>
            <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <br></br><br></br>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default Home;