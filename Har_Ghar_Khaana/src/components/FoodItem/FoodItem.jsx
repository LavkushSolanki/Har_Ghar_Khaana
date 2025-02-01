import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { addItem, removeItem } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ id, name, price, desc, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const quantity = cart[id] || 0;

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto rounded-2xl shadow-lg">
      {/* Image and Action Icons */}
      <div className="relative">
        <img
          className="w-full rounded-t-2xl object-cover"
          src={image}
          alt={name}
        />
        {quantity === 0 ? (
          <img
            className="absolute w-8 sm:w-10 right-4 bottom-4 cursor-pointer rounded-full"
            onClick={() => dispatch(addItem(id))}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-2 py-1 rounded-full bg-white shadow-md">
            <img
              className="w-6 sm:w-8 cursor-pointer"
              onClick={() => dispatch(removeItem(id))}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p className="text-sm sm:text-base">{quantity}</p>
            <img
              className="w-6 sm:w-8 cursor-pointer"
              onClick={() => dispatch(addItem(id))}
              src={assets.add_icon_green}
              alt="Add More"
            />
          </div>
        )}
      </div>

      {/* Food Details */}
      <div className="p-4 sm:p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-base sm:text-lg font-semibold">{name}</p>
          <img
            className="w-14 sm:w-16"
            src={assets.rating_starts}
            alt="Rating"
          />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#676767] mb-4">{desc}</p>

        {/* Price */}
        <p className="text-tomato text-lg sm:text-xl font-semibold">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
