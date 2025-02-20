import axios from "axios";
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:5000";
  const authToken = localStorage.getItem("authToken");

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { authToken } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (authToken) {
      fetchOrders();
    }
  }, [authToken]);

  // Status Color Mapping
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-500 text-white";
      case "food processing":
        return "bg-orange-500 text-white";
      case "ordered":
        return "bg-green-500 text-white";
      case "delivered":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        My Orders
      </h2>

      <div className="container mx-auto max-w-5xl grid gap-6">
        {data.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No orders found.</p>
        ) : (
          data.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 transition-transform hover:scale-[1.02]"
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
                  Items: {order.items.length}
                </p>
                <p className="text-lg font-semibold text-gray-700 mt-2">
                  ₹{order.amount}.00
                </p>
              </div>

              {/* Order Status & Track Button */}
              <div className="text-center">
                <p
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </p>
                <button
                  onClick={fetchOrders}
                  className="block mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition cursor-pointer"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
