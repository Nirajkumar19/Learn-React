import React from "react";
import  ReactDOM  from "react";
import { LOGO_URL } from "../utils/constant"; //Named Import
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={toggle}>{loginstate}</button>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;