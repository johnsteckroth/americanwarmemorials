import React from 'react';
import "../custom.css";
import LOGO from '../images/AmericanWarMemorials_logo.jpg'

const AWM = () => {
    
    return (
        <div className="AWM">
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>American War Memorials</b></h1>
                        </center>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-5">
                        <div><br></br></div>
                        <p>In 2013, I founded a 501(c)3 non-profit organization dedicated to preserving and indexing war monuments on U.S. soil. The goal is to create a database available to the public with historically accurate digital content and provide funding for monuments in need to restoration. It is a massive project but I believe that it is a valuable catalog of data and will help the public remember the true cost of war.</p>
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
                            <p>The website is currently under construction but normally can be found at <a href="http://americanwarmemorials.org/">AmericanWarMemorials.org</a>.</p>
                            
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

export default AWM;