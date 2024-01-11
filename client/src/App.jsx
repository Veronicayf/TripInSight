import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FootBar/FootBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Hello world! Tailwind installed! ✨
      </h1>
      <img src={logo} alt="Trip In Sight" />
      <Footer />
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/aboutus" />
        <Route path="/guides" />
        <Route path="/tours" />
        <Route path="/profile" />
        <Route path="/tour" />
        <Route path="/guide" />
        <Route path="/cart" />
        <Route path="/admin" />
      </Routes>
    </div>
  );
};

export default App;
