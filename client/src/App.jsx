import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import logo from "./assets/img/logo.png";
import "./App.css";
import TourDetail from "./views/TourDetail/Tour";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FootBar/FootBar";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Cart from "./views/ShoppingCart/Cart";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import CreateTour from "./views/CreateTour/CreateTour";
import CreateGuide from "./views/CreateGuide/CreateGuide";
import ToursList from "./views/Tours/Tours";
import AdminTous from "./views/AdminTours/AdminTous";

import { getTourId } from "./redux/tourStore/toursActions";

import Register from "./components/Register/Register";


import { useAuth0 } from "@auth0/auth0-react";
import Guides from "./views/Guides/Guides";
import Profile from "./views/Profile/Profile";
import AdminGuides from "./views/AdminGuides/AdminGuides";



// import PruebaBack from "./views/pruebaBack/PruebaBack";

const App = () => {

  //dana
  const { user, isAuthenticated, isLoading } = useAuth0();

  const location = useLocation();
  const isOnAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
        {!isOnAdminRoute && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" />
          <Route path="/guides" element={<Guides />}/>
          <Route path="/tours" element={<ToursList />}/>
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/guide/:id" />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/admin/" element={<AdminPanel />} />
          <Route path="/admin/createtour" element={<CreateTour />} />
          <Route path="/admin/createguide" element={<CreateGuide />} />
          <Route path="/admin/viewTours" element={<AdminTous />} />
          <Route path="/admin/viewGuides" element={<AdminGuides />} />
          {/* <Route path="/register" element={<Register setAuth={setAuth} />} /> */}
          {/* <Route path="/pruebaback" element={<PruebaBack />} /> */}

        </Routes>
      
        {!isOnAdminRoute && <Footer />}
    </div>
  );
};

export default App;
