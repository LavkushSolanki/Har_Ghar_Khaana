import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { addItem, removeItem } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ id, name, price, desc, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Access the cart state
  const quantity = cart[id] || 0; // Default quantity to 0 if item not in cart

  return (
    <div className="w-[100%] m-auto rounded-[15px] shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="relative">
        <img className="w-[100%] rounded-t-[15px]" src={image} alt={name} />
        {quantity === 0 ? (
          <img
            className="absolute w-[35px] right-[15px] bottom-[15px] cursor-pointer rounded-[50%]"
            onClick={() => dispatch(addItem(id))}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img
              className="w-[30px]"
              onClick={() => dispatch(removeItem(id))}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{quantity}</p>
            <img
              className="w-[30px]"
              onClick={() => dispatch(addItem(id))}
              src={assets.add_icon_green}
              alt="Add More"
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-semibold">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="text-[#676767] text-[12px]">{desc}</p>
        <p className="text-[tomato] text-[22px] font-semibold my-[10px] mx-0">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
