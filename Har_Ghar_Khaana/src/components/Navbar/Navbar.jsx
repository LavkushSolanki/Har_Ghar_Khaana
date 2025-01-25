import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="py-20 px-0 flex justify-between items-center">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className="flex gap-10 list-none text-[#49557e] text-[20px]">
        <li
          className={`${
            menu === "home" ? "underline underline-offset-4" : ""
          } cursor-pointer`}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={`${
            menu === "menu" ? "underline underline-offset-4" : ""
          } cursor-pointer`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={`${
            menu === "app" ? "underline underline-offset-4" : ""
          } cursor-pointer`}
          onClick={() => setMenu("app")}
        >
          Mobile-App
        </li>
        <li
          className={`${
            menu === "contact" ? "underline underline-offset-4" : ""
          } cursor-pointer`}
          onClick={() => setMenu("contact")}
        >
          Contact-Us
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[red] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button
          className="bg-transparent text-[16px] text-[#49557e] border-3 border-red-300 px-[30px] py-[10px] cursor-pointer rounded-full
            hover:bg-[#fff4f2]
        "
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
