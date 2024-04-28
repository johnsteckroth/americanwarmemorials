import React from 'react';
import "../custom.css";
import LOGO from '../images/AWMlogo.png'

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
                        <div><br></br></div>
                        <p>Our mission is to document War Memorials honoring Americans in the U.S. and to aid in their preservation ensuring their existence in our communities forever.  War Memorials commemorate our shared past and it is imperative to remember those who made the ultimate sacrifice for our freedom.</p>
                    <br></br>
                    <p>We aim to create a database of monuments across the United States that is searchable and available to the public. Our goal is also to monitor memorials that are in need of restoration to provide funds for their continued preservation.</p>
                    <p>American War Memorials was founded in 2013 and we are currently reapplying for 501(c)3 non-profit organization status.</p>
                            <img src={LOGO} 
                                   class="img-fluid rounded mb-4 mb-lg-0"
                                />
                    <div class="col-lg-1">
                    <br></br>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-10">
                        <center>
                            <h1 class="font-weight-light"><b>Board of Directors</b></h1>
                        </center>
                        <br></br>
                            <b>John Edward Steckroth  -  Executive Director / Secretary of the Board</b>
                            <p>Community Marketing Manager for Microsoft Teams, former Digital Editor at the NBC affiliate in Detroit, and web designer with vast understanding of database infrastructure. As a former intern with American War Memorials Overseas, his interest and knowledge of American military history is key to the website's development. His undergraduate work was done at the University of Michigan in journalism and English literature.</p>

                            <b>Cynthia Pepper - President of the Board</b>
                            <p>President of Pepper Consulting and expert in professional and organizational development in higher education and non-profit institutions.  Her undergraduate work was done at the University of Michigan in psychology and her graduate work included animal behavior at Bucknell University and counseling at Eastern Michigan University.</p>

                            <b>Michael D. Anthony - Treasurer of the Board</b>
                            <p>Managing Director at Blackstone, Certified Public Accountant, and former Director with PricewaterhouseCoopers. He earned a masters degree in real estate at New York University and his undergraduate work was done at Western Michigan University in accounting.</p>
                            <br></br>
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