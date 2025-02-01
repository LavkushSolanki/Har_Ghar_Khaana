import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form
        action=""
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] rounded-[8px] text-[14px]"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-medium">{currState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-2 border-[1px solid #cfcfcf] p-[10px] rounded-[4px]"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="outline-2 border-[1px solid #cfcfcf] p-[10px] rounded-[4px]"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="outline-2 border-[1px solid #cfcfcf] p-[10px] rounded-[4px]"
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="border-none p-[10px] rounded-[4px] text-white cursor-pointer bg-[tomato] text-[15px]">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-[8px] mt-[15px]">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the term of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-[tomato] cursor-pointer font-medium"
              onClick={() => setCurrState("Sign Up")}
            >
              Click Here
            </span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-[tomato] cursor-pointer font-medium"
              onClick={() => setCurrState("Login")}
            >
              Login Here
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
