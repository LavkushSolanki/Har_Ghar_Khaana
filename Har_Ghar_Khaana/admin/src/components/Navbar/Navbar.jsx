import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow-md">
      {/* Logo */}
      <img className="w-[100px] md:w-[140px]" src={assets.logo} alt="Logo" />

      {/* Profile Image */}
      <img
        className="w-10 h-10 rounded-full border-2 border-gray-300"
        src={assets.profile_image}
        alt="Profile"
      />
    </div>
  );
};

export default Navbar;
