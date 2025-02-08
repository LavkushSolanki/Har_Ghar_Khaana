import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:5000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-5">
      <form
        className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6"
        onSubmit={onSubmitHandler}
      >
        {/* Image Upload */}
        <div className="flex flex-col gap-2 items-center">
          <p className="font-medium text-gray-700">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              className="w-32 h-32 rounded-md border border-gray-300 object-cover"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder="Type here"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            name="description"
            id="description"
            value={data.description}
            onChange={onChangeHandler}
            placeholder="Write here"
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
        </div>

        {/* Category and Price */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="category" className="font-medium text-gray-700">
              Product Category
            </label>
            <select
              name="category"
              id="category"
              value={data.category}
              onChange={onChangeHandler}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="price" className="font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={data.price}
              onChange={onChangeHandler}
              placeholder="Enter price"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
