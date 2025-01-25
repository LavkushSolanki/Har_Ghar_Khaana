import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, desc, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p>{desc}</p>
        <p>&#8377;{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
