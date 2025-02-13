import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <br />
      <ExploreMenu category={category} setCategory={setCategory} />
      <br />
      <FoodDisplay category={category} />
      <AppDownload/>
      <br />
    </div>
  );
};

export default Home;
