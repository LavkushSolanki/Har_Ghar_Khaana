import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cost, setCost] = useState(0);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      {/* Wrapper */}
      <div className="app mx-auto">
        <ToastContainer />
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <div className="min-h-[calc(100vh-200px)] pt-[80px]">
          {/* Ensure enough padding to avoid overlap with Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart setCost={setCost} />} />
            <Route path="/order" element={<PlaceOrder cost={cost} />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
