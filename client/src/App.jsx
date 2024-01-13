import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./App.css";
import TourDetail from "./views/TourDetail/Tour";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FootBar/FootBar";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import PruebaBack from "./views/pruebaBack/PruebaBack";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" />
        <Route path="/guides" />
        <Route path="/tours" />
        <Route path="/profile" />
        <Route path="/tour" element={<TourDetail />} />
        <Route path="/guide" />
        <Route path="/cart" />
        <Route path="/admin" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
