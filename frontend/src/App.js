import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./pages/Signup";
import { CartDetail } from "./Reducer";
import MyOrderHistory from "./pages/MyOrderHistory";

function App() {
  return (
    <>
      <CartDetail>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myOrderhistoy" element={<MyOrderHistory/>} />
          </Routes>
        </Router>
      </CartDetail>
    </>
  );
}

export default App;
