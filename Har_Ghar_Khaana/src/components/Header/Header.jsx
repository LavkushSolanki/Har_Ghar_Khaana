import React from "react";

const Header = () => {
  return (
    // https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg
    // https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg
    <div className="rounded-4xl h-[40vw] mx-[20px] my-auto bg-[url('https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg')] bg-cover bg-no-repeat relative">
      <div className="text-white absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-extrabold text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-[1vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          similique autem consequuntur rerum architecto? Dolorum illum fugit a
          quod voluptas, aliquid reiciendis repellat nesciunt cum iusto quaerat
          omnis deserunt sapiente.
        </p>
        <button className="border-none text-[#747474] font-semibold px-[1vw] py-[1vw] bg-white rounded-full text-[max(1vw,13px)] cursor-pointer">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
