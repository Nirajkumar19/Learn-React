import React from "react";
import  ReactDOM  from "react";
import { LOGO_URL } from "../utils/constant"; //Named Import

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img> 
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;