import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../../Store/foodSlice"; // Import the fetchFoods action
import FoodItem from "../FoodItem/FoodItem";

const SkeletonLoader = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto rounded-2xl shadow-lg animate-pulse bg-gray-200 h-[280px]"></div>
  );
};

const FoodDisplay = ({ category }) => {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foods.items); // Get foods from Redux
  const loading = useSelector((state) => state.foods.loading);
  const error = useSelector((state) => state.foods.error);
  const url = "https://har-ghar-khaana.onrender.com";

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  console.log("Food items are: ", foodList);

  return (
    <div id="food-display" className="mt-8 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#262626]">
        Top dishes near you
      </h2>

      <div className="grid mt-8 gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          // Show 6 skeletons while loading
          [...Array(6)].map((_, index) => <SkeletonLoader key={index} />)
        ) : foodList?.data?.length > 0 ? (
          foodList.data.map((item) =>
            category === "All" || item.category === category ? (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                desc={item.description}
                price={item.price}
                image={url + "/images/" + item.image}
              />
            ) : null
          )
        ) : (
          <p className="text-gray-500">No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
