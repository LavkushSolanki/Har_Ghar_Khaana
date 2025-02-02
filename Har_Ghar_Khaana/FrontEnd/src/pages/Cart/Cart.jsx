import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../../Store/cartSlice";
import { food_list } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = ({ setCost }) => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart); // Get cart from Redux
  const dispatch = useDispatch();

  // Filter food_list that are in the cart
  const cartItems = Object.keys(cart).map((id) => {
    return {
      ...food_list.find((item) => item._id === id), // Find product details
      quantity: cart[id], // Get quantity from cart state
    };
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 50 : 0; // Add a delivery fee
  const total = subtotal + deliveryFee;
  setCost(total);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100 text-center text-gray-600 font-semibold">
                <th className="p-3 border border-gray-300">Item</th>
                <th className="p-3 border border-gray-300">Title</th>
                <th className="p-3 border border-gray-300">Price</th>
                <th className="p-3 border border-gray-300">Quantity</th>
                <th className="p-3 border border-gray-300">Total</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item._id}
                  className="text-center border border-gray-300"
                >
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl mx-auto"
                    />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">&#8377;{item.price}</td>
                  <td className="p-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 cursor-pointer"
                        onClick={() => dispatch(removeItem(item._id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 cursor-pointer"
                        onClick={() => dispatch(addItem(item._id))}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">
                    &#8377;{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Clear Cart Button */}
          <div className="flex justify-end mt-6">
            <button
              className="bg-black cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-900"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}

      {/* Promo Code Section */}
      <div className="mt-3 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Apply Promo Code</h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Promo Code"
            className="w-full border bg-gray-200 border-gray-300 p-3 py-2 rounded-[4px] outline-none"
          />
          <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-[4px] cursor-pointer">
            Apply
          </button>
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="mt-1 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Cart Summary</h3>
        <div className="flex justify-between text-lg mb-2">
          <span>Subtotal</span>
          <span>&#8377;{subtotal}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg mb-2">
          <span>Delivery Fee</span>
          <span>&#8377;{deliveryFee}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-xl font-bold mb-4">
          <span>Total</span>
          <span>&#8377;{total}</span>
        </div>
        <button
          onClick={() => navigate("/order")}
          className="bg-[tomato] text-white py-3 px-10 rounded-[4px] cursor-pointer"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
