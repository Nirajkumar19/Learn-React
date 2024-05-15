import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [data,setdata] = useState([]);
    const {id} = useParams(); // This hook will take the id from the path
    const fetchMenuData = async () => {
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const jsonMenuData = await menuData.json();
        setdata(jsonMenuData);
        console.log(jsonMenuData);
    }

    useEffect(() => {
        fetchMenuData();
    },[])

    if(data.length === 0){
        return <Shimmer />
    } 
    const {text} = data?.data?.cards[0]?.card?.card;
    const {itemCards} = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {cards} = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR; // ?.cards[1]?.card?.card;
    
    return(
        <div className="menu">
            <h1>{text}</h1>
            {cards.map(item => 
            <div key={item.card.card.id}>
                <h2>{item.card.card.title}</h2>
                
                <ul>
                    {itemCards.map(item2 =><li>{item2?.card?.info?.name} - Rs.{item2?.card?.info?.price/100}</li> )}
                </ul>
            </div>)}
            
        </div>
    )
}

export default RestaurantMenu;