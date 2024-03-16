import React from "react";
import  ReactDOM  from "react";
import resList from "../utils/hardData";
import RestoComponent from "./RestoComponent.jsx";
import { useState } from "react";
import resList from "../utils/hardData";
/*
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <p>Search</p>
            </div>
            <div className="resto-container">
                <RestoComponent resName="TaraMaa" rating="4.5" timeToDeliver="20mins" />
                <RestoComponent resName="KFC" rating="4.6" timeToDeliver="10mins"/>

            </div>
        </div>
    )
}

All props wrap in an object and then pass it to the module.
For every we don't pass the data as props differently.
We can create array list of the object of data which we want to pass as props.
*/

const Body = () => {
    const [restoList,setrestoList] = useState(resList); // Array Destructuring
    const topRatedfilterfun = () => {
        const filterresto = restoList.filter((res) => res.info.avgRating>4);
        setrestoList(filterresto);
        
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={topRatedfilterfun}>Top rated restourent</button>
            </div>
            <div className="resto-container">
                {restoList.map((res) => (<RestoComponent resData={res.info} />))}
            </div>
        </div>
    )
}


export default Body;