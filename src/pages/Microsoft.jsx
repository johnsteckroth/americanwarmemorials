import React from 'react';
import "../custom.css";
import LOGO from '../images/Microsoft_logo.png'
import LOGO1 from '../images/MicrosoftTeams_logo.png'
import CONF1 from '../images/MSIgnite.png'
import CONF2 from '../images/SharePointConf.png'

const Microsoft = () => {
    
    return (
    <div className="AWM">
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>Microsoft Tech Community</b></h1>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-5">
                        <div><br></br></div>
                        <p>The <a href="https://techcommunity.microsoft.com/">Microsoft Tech Community</a> is a public platform for product teams, Microsoft MVPs, and IT Professionals to share information and build communities about products and services. It is an immensely useful resource to hundreds of thousands of daily active users and brings together people from around the world to push their technological goals to the finish line. I joined the team in 2018 and my role combined website management with strategic digital marketing.  </p>
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
                            <p>Here's a brief look at what ourr team provides for our stakeholders at Microsoft:</p>
                            <ul>
                                <li>Copywriting, editing, and staging of offical blogs, support creation of visual assets, publishing and preparing social media posts to coincide.</li>
                                <li>Host official 'Ask Microsoft Anything' AMA events that enable customers to engage directly to product team members and share feedback.</li>
                                <li>Generate monthly analytics reports for stakeholders, provide moderation for communities, and grant site admin permissions for users.</li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-1">
                        </div>
                        </div>
                        <div class="row align-items-center">


                        <div class="col-lg-1">
                        </div>
                                <div class="col-lg-5">
                                    <div><br></br></div>
                                    <p>Microsoft Teams has been the flagship product in Microsoft 365 since its launch in 2017 and leadership wanted to take a unified approach to strategy across blogs and social media. As a part of the Tech Community team, I was brought on to manage the <a href="https://twitter.com/MicrosoftTeams">Microsoft Teams Twitter handle</a> and integrate Teams across the other official Microsoft social channels. From the product's infancy to the giant it's become, I've played an integral part in the storytelling process. </p>
                                    
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
                                    
                                        
                                        <div class="row align-items-center">
                                        <br></br>
                        </div>
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                            <p> Owning an official Microsoft social channel comes with many challenges but under my editorial calender we increased our follwing to over a quarter million followers. Beyond growing a larger following, I've used both the social channels and forum spaces to amplify product news and engage with users to ensure our messaging is effectively received. I've created and executed campaigns, generated monthly analytics reports, hosted both in-person and virtual events, produced webinars, moderated forums, provided copy writing and editing services, staged demo content, and managed the blog and social editorial calendars for one of the most important products at Microsoft. I'm exctied to tackle any project, but its a lot more fun when your work has high visibility. </p>
                        </div>
                        
                        <div class="col-lg-1">
                        </div>

                        
                                 
                    <div class="col-lg-1">
                        </div>
                        
                        <div class="col-lg-5">
                        <div class="contain1">
                            
                                <div><br></br><br></br></div>
                                    <img src={CONF1} 
                                        class="img-fluid rounded mb-4 mb-lg-0"
                                    />
                            
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="contain1">
                            
                                <div><br></br><br></br></div>
                                    <img src={CONF2} 
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

export default Microsoft;