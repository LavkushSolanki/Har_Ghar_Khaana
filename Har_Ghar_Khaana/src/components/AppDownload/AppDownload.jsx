import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app"
      className="m-auto mt-[100px] text-[max(3vw,20px)] text-center font-semibold"
    >
      <p>
        For better experience Download <br />
        Har_Ghar_Khaana
      </p>
      <div className="flex justify-center mt-[40px] gap-[max(2vw,10px)]">
        <img
          src={assets.play_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer transition-0.5s"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer transition-0.5s"
        />
      </div>
    </div>
  );
};

export default AppDownload;
