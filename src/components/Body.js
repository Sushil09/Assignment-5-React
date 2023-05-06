import { useState } from "react";
import { restaurantLists } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    const [searchInput,setSearchInput] = useState(); // to create state variables 
    const [restaurant, setRestaurant] = useState(restaurantLists);

    function filterData(searchInput, restaurant) {
       return (restaurant.filter(res=>res.data.name.includes(searchInput)));
    }

  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
        <button className="search-btn" onClick= {()=>{
                const data= filterData(searchInput,restaurant);
                setRestaurant(data);
        }}>Search</button>
    </div>
    <div className="restaurant-list">
       
      {restaurant.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      ;
    </div>
    </>
  );
};

export default Body;
