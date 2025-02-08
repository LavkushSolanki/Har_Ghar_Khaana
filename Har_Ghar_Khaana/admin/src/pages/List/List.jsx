import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:5000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Failed to fetch data");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.delete(`${url}/api/food/remove/${foodId}`); // Send ID in URL
      await fetchList();

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food item.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Foods List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-medium">
              <th className="py-4 px-6 text-left">Image</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Category</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  {/* Image */}
                  <td className="py-4 px-6">
                    <img
                      className="w-14 h-14 rounded-md object-cover border border-gray-200"
                      src={`${url}/images/${item.image}`}
                      alt="Food"
                    />
                  </td>
                  {/* Name */}
                  <td className="py-4 px-6 text-gray-800">{item.name}</td>
                  {/* Category */}
                  <td className="py-4 px-6 text-gray-600">{item.category}</td>
                  {/* Price */}
                  <td className="py-4 px-6 text-green-600 font-semibold">
                    &#8377;{item.price}
                  </td>
                  {/* Action */}
                  <td className="py-4 px-6">
                    <button
                      className="text-red-500 hover:text-red-700 font-medium cursor-pointer"
                      onClick={() => removeFood(item._id)}
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-6 px-4 text-center text-gray-500 text-lg"
                >
                  No items found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
