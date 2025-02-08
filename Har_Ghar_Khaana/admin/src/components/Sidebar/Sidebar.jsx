import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdShoppingCart} from "react-icons/md"; 


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-5 left-3 z-20 p-2 rounded-md bg-gray-900 text-white focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`h-full bg-gray-900 text-white z-10 transform transition-all duration-300 ease-in-out ${
          isOpen ? "w-[250px]" : "w-[60px]"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-between px-4 py-5 border-b border-gray-700 ${
            isOpen ? "justify-center" : "justify-center"
          }`}
        >
          <img
            className={`w-[100px] transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
            src={assets.logo}
            alt="Logo"
          />
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-3 mt-5">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all ${
                isActive ? "bg-gray-800 border-l-4 border-red-500" : ""
              }`
            }
          >
            <FaPlus size={24} className="border-2 border-white" />
            <p
              className={`transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Add Items
            </p>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all ${
                isActive ? "bg-gray-800 border-l-4 border-red-500" : ""
              }`
            }
          >
            <MdDashboard size={24} />
            <p
              className={`transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              List Items
            </p>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all ${
                isActive ? "bg-gray-800 border-l-4 border-red-500" : ""
              }`
            }
          >
            <MdShoppingCart size={24} />
            <p
              className={`transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Orders
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
