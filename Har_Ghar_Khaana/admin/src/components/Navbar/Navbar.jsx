import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-1">
      {/* Logo */}
      <img
        className="w-[80px] md:w-[120px] lg:w-[150px]"
        src={assets.logo}
        alt="Logo"
      />

      {/* Profile Image */}
      <img
        className="w-10 h-10 rounded-full"
        src={assets.profile_image}
        alt="Profile"
      />
    </div>
  );
};

export default Navbar;
