import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-20px px-[8vw] pt-[80px]"
    >
      <div className="w-[100%] grid grid-cols-3 gap-[80px]">
        {/* left */}
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis nesciunt quia fuga? Voluptates repudiandae officia amet
            sequi alias cupi totam pariatur quaerat ducimus beatae velit
            consequuntur placeat iusto sed, hic consequatur. Perspiciatis.
          </p>
          <div className="flex flex-row">
            <img
              className="w-[40px] mr-[15px] cursor-pointer"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="w-[40px] mr-[15px] cursor-pointer"
              src={assets.linkedin_icon}
              alt=""
            />
            <img
              className="w-[40px] mr-[15px] cursor-pointer"
              src={assets.twitter_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white font-extrabold text-2xl">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white font-extrabold text-2xl">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px]">+91 9090230239</li>
            <li className="mb-[10px]">lavkushsolanki12@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] m-[20px 0px] bg-gray-600" />
      <p>Copyright 2025 @Har_Ghar_Khaana -All Right Reserved </p>
    </div>
  );
};

export default Footer;
