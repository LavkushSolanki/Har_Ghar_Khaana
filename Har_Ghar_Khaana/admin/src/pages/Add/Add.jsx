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
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="flex-colm">
        <div className="flex-colm ">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px] cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex-colm w-[max(40%,280px)]">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            className="p-[10px]"
            type="text"
            value={data.name}
            name="name"
            placeholder="Type here"
            id=""
          />
        </div>
        <div className="flex-colm w-[max(40%,280px)]">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-[10px]"
            rows="6"
            type="text"
            name="description"
            placeholder="Write here"
            id=""
          />
        </div>
        <div className="flex gap-[30px]">
          <div>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              className="max-w-[120px] p-[10px]"
              name="category"
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
          <div>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px]"
              type="number"
              name="price"
              placeholder="20"
            />
          </div>
        </div>
        <button
          className="max-w-[120px] border-none bg-black text-white cursor-pointer"
          type="submit"
          onClick={onSubmitHandler}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
