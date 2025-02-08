import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border border-gray-400 border-t-0 text-[max(1vw,10px)]">
      <div className="pt-[50%] pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-400 border-r-0 px-3 py-2 rounded-l cursor-pointer 
            ${isActive ? "bg-red-300" : "bg-white"}`
          }
        >
          <img src={assets.add_icon} alt="Add Items" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-400 border-r-0 px-3 py-2 rounded-l cursor-pointer 
            ${isActive ? "bg-red-300" : "bg-white"}`
          }
        >
          <img src={assets.order_icon} alt="List Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-400 border-r-0 px-3 py-2 rounded-l cursor-pointer 
            ${isActive ? "bg-red-300" : "bg-white"}`
          }
        >
          <img src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
