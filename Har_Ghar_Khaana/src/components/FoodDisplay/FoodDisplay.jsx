import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assets/frontend_assets/assets";

const FoodDisplay = ({ category }) => {
  return (
    <div id="food-display" className="mt-8 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#262626]">
        Top dishes near you
      </h2>

      {/* Grid Container */}
      <div className="grid mt-8 gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
