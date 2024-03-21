import React, { useEffect } from "react";
import  ReactDOM  from "react";
import resList from "../utils/hardData";
import RestoComponent from "./RestoComponent.jsx";
import { useState } from "react";
// import resList from "../utils/hardData"; No need of Hard data after using API
import Shimmer from "./Shimmer.js";
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
    const [restoList,setrestoList] = useState([]); // Array Destructuring
    const [temprestoList,settemprestoList] = useState([]);

    const [textValue,settextValue] = useState("");
    

    /* Use Effect*/
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setrestoList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        settemprestoList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // By using the useEffect() the page will render very fast after nothing on the display which is not a good user experiance.
        // For great user experiance we have to use the concept of "Shimmer UI".
    };
    
    
    useEffect(() => {
        fetchData();
    },[]);
    

    const changeTextValue = (e) =>{
        settextValue(e.target.value);
    }
    
    const topRatedfilterfun = () => {
        const filterresto = restoList.filter((res) => res.info.avgRating>4);
        setrestoList(filterresto);
        
    }
    
    const searchFilter = () => {
        const filterresto = temprestoList.filter((res) => res.info.name.toLowerCase().includes(textValue.toLowerCase()));
        console.log(filterresto);
        setrestoList(filterresto);
    }

    if(restoList.length === 0){
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <input type="text" value={textValue} onChange={changeTextValue}/>
                <button className="search-btn" onClick={searchFilter}>Search</button>
                <button className="filter-btn" onClick={topRatedfilterfun}>Top rated restourent</button>
            </div>
            <div className="resto-container">
                {restoList.map((res) => (<RestoComponent key={res.info.id} resData={res.info} />))}
            </div>
        </div>
    )
}


export default Body;