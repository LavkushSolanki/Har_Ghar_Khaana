import React, { useState, useEffect } from "react";

const Header = () => {
  // Slider images
  const images = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=2048x2048&w=is&k=20&c=jSUKc_lszNyaCpDzL-yU1nvcMNC7nECgPgKv_ndaYYs=",
    "https://media.istockphoto.com/id/477614569/photo/makki-ki-roti-with-paneer-and-saag-and-buttermilk.jpg?s=2048x2048&w=is&k=20&c=tAul1ss7fZkWoahtL72SoxcOVVCNXC-eWZYlNAJ52tY=",
    "https://media.istockphoto.com/id/855894476/photo/pilaf-rice-with-meat-and-vegetables.jpg?s=2048x2048&w=is&k=20&c=VAt1EivXBfCe1tnnbm_KQigCIJzgt7d80RkjXvDh7Go=",
    "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=2048x2048&w=is&k=20&c=5qfqYi5DEhhVjJ-DIYB4MxUq31EmkvyEnNgNLm5LVpY=",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div
      className="h-[50vh] md:h-[40vw] mx-5 my-auto rounded-4xl bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="absolute bottom-[10%] left-5 md:left-[6vw] text-white flex flex-col items-start gap-4 md:gap-[1.5vw] max-w-[90%] md:max-w-[50%]">
        {/* Heading */}
        <h2 className="font-extrabold text-[max(6vw,24px)] md:text-[max(4.5vw,22px)] leading-tight">
          Order your favourite food here
        </h2>

        {/* Description */}
        <p className="text-sm md:text-[1vw]">
          <span className="block md:hidden">
            Discover the best dishes in town.
          </span>
          <span className="hidden md:block">
            Indulge in the finest culinary experiences crafted with love and
            fresh ingredients. Whether you're craving a hearty meal, a light
            snack, or a sweet treat, we have it all. Savor the taste of
            excellence, one bite at a time.
          </span>
        </p>

        {/* Button */}
        <button className="border-none text-[#747474] font-semibold px-4 py-3 md:px-[1vw] md:py-[1vw] bg-white rounded-full text-sm md:text-[max(1vw,13px)] cursor-pointer">
          View Menu
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? "bg-white" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
