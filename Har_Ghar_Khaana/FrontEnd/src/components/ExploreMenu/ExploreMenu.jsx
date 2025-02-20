import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="menu" className="flex w-[80%] mx-auto flex-col gap-5">
      <h1 className="text-[#262626] font-semibold text-3xl">
        Explore our Menu
      </h1>
      <p className="text-[#808080]">
        Select the food that you like and get it here at the best price.
      </p>

      <div
        className="flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="shrink-0 cursor-pointer"
          >
            <div
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 p-1 transition-transform hover:scale-110 ${
                category === item.menu_name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <img
                src={item.menu_image}
                className="w-full h-full object-cover"
                alt={item.menu_name}
                loading="lazy"
              />
            </div>
            <p className="my-2 text-[#747474] text-[max(1.4vw,16px)]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-3 h-[2px] border-none bg-[#2f3030]" />
    </div>
  );
};

export default ExploreMenu;
