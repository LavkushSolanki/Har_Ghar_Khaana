import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const food_list = useSelector((state) => state.cart);
  return (
    <div id="food-display">
      <h2>Top dishes near you</h2>
      <div>
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              desc={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
