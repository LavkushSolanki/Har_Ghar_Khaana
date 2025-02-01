import React from "react";

const PlaceOrder = ({ cost }) => {
  const validCost = isNaN(cost) || cost <= 0 ? 0 : cost;

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-6 md:p-10 gap-8">
      {/* Delivery Information Section */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Delivery Information
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-4 "
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full border border-gray-300 rounded-lg p-4 "
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg p-4 "
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded-lg p-4 "
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </form>
      </div>

      {/* Cart Summary Section */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Cart Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between text-lg text-gray-700">
            <span>Subtotal</span>
            <span>&#8377;{validCost === 0 ? 0 : validCost - 50}</span>
          </div>
          <div className="flex justify-between text-lg text-gray-700">
            <span>Delivery Fee</span>
            <span>&#8377;{validCost === 0 ? 0 : 50}</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>&#8377;{validCost === 0 ? 0 : validCost}</span>
        </div>
        <button
          onClick={() => navigate("/order")}
          className="bg-[tomato] text-white mt-4 py-3 px-10 rounded-[4px] cursor-pointer"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
