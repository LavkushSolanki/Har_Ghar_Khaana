import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      id="contact"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-8 py-8 px-6 md:px-16"
    >
      {/* Grid Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-6">
          <img src={assets.logo} alt="Logo" className="w-36" />
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis nesciunt quia fuga? Voluptates repudiandae officia amet
            sequi alias cupi totam pariatur quaerat ducimus beatae velit
            consequuntur placeat iusto sed, hic consequatur. Perspiciatis.
          </p>
          <div className="flex gap-4">
            <img
              className="w-8 cursor-pointer"
              src={assets.facebook_icon}
              alt="Facebook"
            />
            <img
              className="w-8 cursor-pointer"
              src={assets.linkedin_icon}
              alt="LinkedIn"
            />
            <img
              className="w-8 cursor-pointer"
              src={assets.twitter_icon}
              alt="Twitter"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-white font-bold text-lg md:text-xl">COMPANY</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer text-sm md:text-base">Home</li>
            <li className="cursor-pointer text-sm md:text-base">About</li>
            <li className="cursor-pointer text-sm md:text-base">Delivery</li>
            <li className="cursor-pointer text-sm md:text-base">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-white font-bold text-lg md:text-xl">
            GET IN TOUCH
          </h2>
          <ul className="space-y-2">
            <li className="text-sm md:text-base">+91 9090230239</li>
            <li className="text-sm md:text-base">lavkushsolanki12@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-t border-gray-600" />

      {/* Footer Bottom */}
      <p className="text-center text-xs md:text-sm">
        Copyright 2025 @Har_Ghar_Khaana - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
