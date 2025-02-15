import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../Store/cartSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PlaceOrder = ({ cost }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const dispatch = useDispatch();
  const url = "http://localhost:5000";

  // Fetch cart from Redux store
  const cart = useSelector((state) => state.cart.items || {});
  const products = useSelector((state) => state.foods.items?.data || []);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (authToken) {
      dispatch(fetchCart());
    }
  }, [dispatch]);

  // Create cartItems list
  const cartItems = Object.entries(cart)
    .map(([itemId, quantity]) => {
      const product = products.find((p) => p._id === itemId);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

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

  // Handle form input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to place an order
  const placeOrder = async (event) => {
    event.preventDefault();

    if (!authToken) {
      alert("Please log in to place an order.");
      return;
    }
    // Prepare order data
    // let orderItems = cartItems.map((item) => ({
    //   ...item,
    //   quantity: item.quantity,
    // }));

    // let orderData = {
    //   address: data,
    //   items: orderItems,
    //   amount: 410,
    // };
    // console.log("orderdata is: ", orderData);
    // try {
    //   let response = await axios.post(url + "/api/order/place", orderData, {
    //     headers: { authToken },
    //   });

    //   if (response.data.success) {
    //     const { session_url } = response.data;
    //     window.location.replace(session_url);
    //   } else {
    //     alert("Error placing order.");
    //   }
    // } catch (error) {
    //   alert("Failed to place order.");
    // }
    let orderItems = cartItems.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    let orderData = {
      // userId: localStorage.getItem("userId"), // Store user ID from local storage
      address: data,
      items: orderItems,
      amount: 680,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { authToken },
    });

    if (response.data.success) {
      alert("Order placed successfully!");
      navigate("/");
    } else {
      alert("Error placing order");
    }
  };

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
              required
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              required
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <input
            required
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
          <input
            required
            type="text"
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            placeholder="Street"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              type="text"
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              placeholder="City"
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              required
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              placeholder="State"
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              type="text"
              name="zipcode"
              value={data.zipcode}
              onChange={onChangeHandler}
              placeholder="Zip Code"
              className="border border-gray-300 rounded-lg p-4"
            />
            <input
              required
              type="text"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
              placeholder="Country"
              className="border border-gray-300 rounded-lg p-4"
            />
          </div>
          <input
            required
            type="text"
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            placeholder="Phone"
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
          className="bg-[tomato] text-white mt-4 py-3 px-10 rounded-[4px] cursor-pointer"
          type="submit"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
