import React from "react";
import { ReactDOM } from "react";
import { IMAGE_URL } from "../utils/constant";

const RestoComponent = (props) => {
    const {resData} = props; // Destructuring the objects.
    return (
        <div className="detail-container">
            <img className="food-image" src={IMAGE_URL+ resData.cloudinaryImageId}></img>
            <div className="itme-name">
                <h3>{resData.name}</h3>
            </div>
            <div className="cuisine">
                <p>{resData.cuisines.join(",")}</p>
            </div>
            <div className="rating">
                <p>{resData.avgRating}</p>
            </div>
            <div className="time">
                <p>{resData.sla.deliveryTime +" mins"}</p>
            </div>
        </div>
    )
}

export default RestoComponent;