import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../../Store/foodSlice"; // Import the fetchFoods action
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foods.items); // Get foods from Redux
  const loading = useSelector((state) => state.foods.loading);
  const error = useSelector((state) => state.foods.error);
  const url = "http://localhost:5000";
  // Fetch foods on component mount
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  // Safe check: If foodList is undefined or foodList.data is undefined, show loading
  if (!foodList || !foodList.data) {
    return <p>Loading food items...</p>;
  }

  return (
    <div id="food-display" className="mt-8 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#262626]">
        Top dishes near you
      </h2>

      {/* Grid Container */}
      <div className="grid mt-8 gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foodList != undefined && foodList.data.length > 0 ? (
          foodList.data.map((item) => {
            if (category === "All" || item.category === category) {
              return (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  image={url + "/images/" + item.image}
                />
              );
            }
          })
        ) : (
          <p className="text-gray-500">No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
