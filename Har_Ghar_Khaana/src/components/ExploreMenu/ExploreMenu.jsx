import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      {" "}
      <h1 className="text-[#262626] font-semibold text-3xl">
        Explore our Menu
      </h1>
      <p className=" max-w-[60%] columns-[#808080]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        nulla quos deserunt commodi! Sunt, deserunt?
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-20px mx-0 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <img
                src={item.menu_image}
                className={`${
                  category === item.menu_name
                    ? "border-4 rounded-full border-red-500 p-1"
                    : ""
                } w-[7.5vw] min-w-[80px] cursor-pointer rounded-full"`}
                alt=""
              />
              <p className="my-[10px] text-[#747474] text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] border-none bg-[#2f3030]" />
    </div>
  );
};

export default ExploreMenu;
