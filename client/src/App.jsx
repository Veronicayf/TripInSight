import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./App.css";
import TourDetail from "./views/TourDetail/Tour";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FootBar/FootBar";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Cart from "./views/ShoppingCart/Cart";
import AdminPanel from "./views/AdminPanel/AdminPanel";

import { getTourId } from "./redux/tourStore/toursActions";

import Register from "./components/Register/Register";


import { useAuth0 } from "@auth0/auth0-react";
import Guides from "./views/Guides/Guides";
import ToursList from "./views/Tours/Tours";
// import PruebaBack from "./views/pruebaBack/PruebaBack";

const App = () => {

  //dana
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" />
        <Route path="/guides" element={<Guides />}/>
        <Route path="/tours" element={<ToursList />}/>
        <Route path="/profile" />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/guide/:id" />
         <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* <Route path="/register" element={<Register setAuth={setAuth} />} /> */}
        {/* <Route path="/pruebaback" element={<PruebaBack />} /> */}

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
