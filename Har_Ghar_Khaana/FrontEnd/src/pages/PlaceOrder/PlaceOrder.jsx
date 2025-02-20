import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../Store/cartSlice";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = "http://localhost:5000";
  const authToken = localStorage.getItem("authToken");

  // Fetch cart and products from Redux store
  const cart = useSelector((state) => state.cart.items || {});
  const products = useSelector((state) => state.foods.items?.data || []);

  useEffect(() => {
    if (authToken) {
      dispatch(fetchCart());
    }
  }, [dispatch, authToken]);

  // Create cartItems list
  const cartItems = Object.entries(cart)
    .map(([itemId, quantity]) => {
      const product = products.find((p) => p._id === itemId);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  // Calculate total cost
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const cost = subtotal + deliveryFee;

  // State for delivery information
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Check if all fields are filled
  const isFormValid = Object.values(data).every((value) => value.trim() !== "");

  // Place order function
  const placeOrder = async (event) => {
    event.preventDefault();

    if (!authToken) {
      alert("Please log in to place an order.");
      return;
    }

    if (!isFormValid) {
      alert("Please fill all the fields before proceeding.");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: cost,
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { authToken },
      });

      if (response.data.success) {
        alert("Order placed successfully!");
        navigate("/");
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      alert("Failed to place order.");
    }
  };

  useEffect(() => {
    if (!authToken) {
      navigate("/cart");
    } else if (cost === 0) {
      navigate("/cart");
    }
  }, [authToken]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-6 md:p-10 gap-8">
      {/* Delivery Information Section */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Delivery Information
        </h2>
        <form onSubmit={placeOrder} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
              placeholder="First Name"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
              placeholder="Last Name"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            placeholder="Street"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              placeholder="City"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              placeholder="State"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="zipcode"
              value={data.zipcode}
              onChange={onChangeHandler}
              placeholder="Zip Code"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              type="text"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
              placeholder="Country"
              required
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            placeholder="Phone"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
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
            <span>&#8377;{cost === 0 ? 0 : cost - 50}</span>
          </div>
          <div className="flex justify-between text-lg text-gray-700">
            <span>Delivery Fee</span>
            <span>&#8377;{cost === 0 ? 0 : 50}</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>&#8377;{cost === 0 ? 0 : cost}</span>
        </div>
        <button
          onClick={placeOrder}
          className={`mt-4 py-3 px-10 rounded-[4px] cursor-pointer ${
            isFormValid
              ? "bg-[tomato] text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
