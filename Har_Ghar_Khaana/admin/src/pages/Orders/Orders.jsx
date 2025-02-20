import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets.js";

const Orders = () => {
  const url = "http://localhost:5000";
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;
    // Optimistically update the UI
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );

    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus,
      });

      if (!response.data.Orderssuccess) {
        await fetchAllOrders(); // Revert if backend update fails
      }
    } catch (error) {
      toast.error("Something went wrong!");
      await fetchAllOrders(); // Revert if there's an error
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Admin Orders Management
      </h3>

      <div className="container mx-auto max-w-6xl grid gap-6">
        {orders.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-transform hover:scale-[1.02]"
            >
              {/* Order Icon */}
              <img
                src={assets.parcel_icon}
                alt="Order"
                className="w-16 h-16 object-contain"
              />

              {/* Order Details */}
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">
                  {order.items.map((item, i) => (
                    <span key={i}>
                      {item.name} x {item.quantity}
                      {i !== order.items.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Ordered by:{" "}
                  <span className="font-semibold">
                    {order.address.firstName} {order.address.lastName}
                  </span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Contact: {order.address.phone}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Items: {order.items.length}
                </p>
                <p className="text-lg font-semibold text-gray-700 mt-2">
                  ₹{order.amount}.00
                </p>
              </div>

              {/* Address */}
              <div className="text-gray-500 text-sm">
                <p className="font-semibold text-gray-800">Delivery Address:</p>
                <p>
                  {order.address.street}, {order.address.city}
                </p>
                <p>
                  {order.address.state}, {order.address.country} -{" "}
                  {order.address.zipcode}
                </p>
              </div>

              {/* Order Status Dropdown */}
              <div className="text-center">
                <label className="text-gray-600 text-sm font-semibold">
                  Order Status
                </label>
                <select
                  onChange={() => statusHandler(event, order._id)}
                  value={order.status}
                  className="block mt-1 px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  defaultValue={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
