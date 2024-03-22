import React from "react";
import  ReactDOM  from "react";
import { LOGO_URL } from "../utils/constant"; //Named Import
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {  
    const [loginstate,setloginstate] = useState("Login");
    const toggle = () =>{
        if(loginstate === "Login"){
            setloginstate("Logout");
        }else{
            setloginstate("Login");
        }
    }
    // console.log("Render");
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img> 
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to ="/" >Home</Link></li>
                    <li><Link to ="/About" >About Us</Link></li>
                    <li><Link to ="/Contact" >Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={toggle}>{loginstate}</button>
                </ul>
            </div>
            
        </div>
    )
}

// For lining the page we simply write the anchor tag.
// But with the help of anchor tag if we go for another page then it will reload the page. So it very costly 
// Hence we use Link to instead of "a href"(anchor tag)

// By using that our whole page will not load only the component on which we go will replace with the older component 
// That why we called React as single page application because all the needed loaded at the very first time and after just component on the main page getting changed.

export default Header;