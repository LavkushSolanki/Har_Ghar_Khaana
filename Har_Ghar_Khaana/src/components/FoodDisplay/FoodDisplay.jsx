import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assets/frontend_assets/assets";

const FoodDisplay = ({ category }) => {
  return (
    <div id="food-display" className="mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid mt-[30px] gap-[30px] grid-cols-4">
        {food_list.map((item, index) => {
          if (category === "All" || item.category === category) {
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
          } else {
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
