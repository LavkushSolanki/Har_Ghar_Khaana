import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { food_list } from "../../assets/frontend_assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cart = useSelector((state) => state.cart); // Get cart from Redux
  const dispatch = useDispatch();

  // Filter food_list that are in the cart
  const cartItems = Object.keys(cart).map((id) => {
    return {
      ...food_list.find((item) => item.id === id), // Find product details
      quantity: cart[id], // Get quantity from cart state
    };
  });

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-[120px] md:w-[150px] cursor-pointer"
        />

        {/* Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-4 list-none text-[#49557e] text-[17px] font-medium">
          {["home", "menu", "app", "contact"].map((item) => (
            <ScrollLink
              to={item} // This will scroll to the element with the matching id
              spy={true} // Enables tracking of the scroll position
              smooth={true} // Enables smooth scrolling
              offset={-70} // Offset to adjust the scroll position
              duration={500} // Duration for the smooth scroll
              key={item}
              className={`cursor-pointer capitalize ${
                menu === item ? "text-red-500 border-b-2 border-red-500" : ""
              } hover:text-red-500 transition-all`}
              onClick={() => setMenu(item)}
            >
              {item === "app"
                ? "Mobile-App"
                : item === "contact"
                ? "Contact-Us"
                : item}
            </ScrollLink>
          ))}
        </ul>

        {/* Right Section: Search, Cart, Sign In */}
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-[22px] cursor-pointer hover:scale-110 transition"
          />

          {/* Cart Icon */}
          <RouterLink to="/cart">
            <div className="relative cursor-pointer">
              <img src={assets.basket_icon} alt="Basket" className="w-[25px]" />
              <div className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </div>
            </div>
          </RouterLink>

          {/* Sign In Button (Visible on All Devices) */}
          <button
            onClick={() => setShowLogin(true)}
            className="border-2 border-red-300 px-6 py-2 text-[#49557e] font-medium rounded-full transition-all hover:bg-red-500 hover:text-white cursor-pointer"
          >
            Sign In
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="md:hidden p-2 text-[#49557e] cursor-pointer"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <img src={assets.logo} alt="Logo" className="w-[100px]" />
          <button
            className="p-2 text-[#49557e] cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-5 text-[#49557e] text-[18px] font-medium">
          {["home", "menu", "app", "contact"].map((item) => (
            <ScrollLink
              to={item} // This will scroll to the element with the matching id
              spy={true} // Enables tracking of the scroll position
              smooth={true} // Enables smooth scrolling
              offset={-70} // Offset to adjust the scroll position
              duration={500} // Duration for the smooth scroll
              key={item}
              className="cursor-pointer capitalize hover:text-red-500 transition-all"
              onClick={() => {
                setMenu(item);
                setIsDrawerOpen(false);
              }}
            >
              {item === "app"
                ? "Mobile-App"
                : item === "contact"
                ? "Contact-Us"
                : item}
            </ScrollLink>
          ))}
        </ul>
      </div>

      {/* Background Overlay when Drawer is Open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
