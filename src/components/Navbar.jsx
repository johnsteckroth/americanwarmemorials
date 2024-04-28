import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import Banner from '../images/banner2.png'



const Navbar = () => {
    return (
        
        <div>
                <div class="banner">
                    <center>
                    <img src={Banner} />
                    </center>
                </div>
                
            
           
            <div className="navigation">
            
            <nav className="navbar navbar-custom navbar-expand-md navbar-light">
            
                <div className="container">
                    
                    <NavLink className="navbar-brand" to="/">
                        <div class="nav-text">AMERICAN WAR MEMORIALS</div>
                        <span className="sr-only"></span>
                    </NavLink>
                    
                    <div>
                        <ul className="navbar-nav ml-auto">

                           
                        
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Search"><div class="nav-text">SEARCH DATABASE</div></NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Submit"><div class="nav-text">SUBMIT MEMORIAL</div></NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About"><div class="nav-text">ABOUT</div></NavLink>
                            </li>
                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Donate"><div class="nav-text">DONATE</div></NavLink>
                            </li>




                            
                        </ul>
                    </div>
                    
               </div>
            </nav>
            </div>  
        </div>
    )
}


;
export default Navbar;