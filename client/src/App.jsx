import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./App.css";
import TourDetail from "./views/TourDetail/Tour";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FootBar/FootBar";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Cart from "./views/ShoppingCart/Cart";
import BannedPage from "./views/BannedPage/BannedPage";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import CreateTour from "./views/CreateTour/CreateTour";
import CreateGuide from "./views/CreateGuide/CreateGuide";
import ToursList from "./views/Tours/Tours";
import AdminTous from "./views/AdminTours/AdminTous";
import { useAuth0 } from "@auth0/auth0-react";
import Guides from "./views/Guides/Guides";
import {
  getAllFav,
  getUserId,
  loggedUser,
} from "./redux/userStore/usersActions";
import AdminGuides from "./views/AdminGuides/AdminGuides";
import { useDispatch, useSelector } from "react-redux";
import GuideDetail from "./views/GuideDetail/Guide";
import Checkout from "./views/CheckOut/CheckOut";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProfileEdit from "./views/ProfileSettings/ProfileSettings";
import ProfileFavs from "./views/ProfileFavs/ProfileFavs";
import ReviewFavorites from "./views/ReviewFavorites/ReviewFavorites";
import AdminTransactions from "./views/AdminTransactions/AdminTransactions";
import AdminUsers from "./views/AdminUsers/AdminUsers";
import AdminReviews from "./views/AdminReviews/AdminReviews";

const initialOptions = {
  "client-id":
    "Ae43YNhNcy82WK7N3f27yDbXklBUj1Pozc0NPYBJrayPxISs85PIMt9WPorvGk20mza-F3aKJd-z9HJI",
  currency: "USD",
  intent: "capture",
};

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();

  const fetchUserId = () => {
    if (isAuthenticated && userProfile.id) {
      dispatch(getUserId(userProfile.id));
    }
  };

  const authenticateUser = async () => {
    if (isAuthenticated) {
      const userAuth = {
        name: user.name,
        email: user.email,
        image: user.picture,
        auth0Id: user.sub,
      };
      await dispatch(loggedUser(userAuth));
    }
    fetchUserId();
  };

  // Verificar la autenticación del usuario cuando cambia su estado
  useEffect(() => {
    authenticateUser();
  }, [isAuthenticated, user]);

  const location = useLocation();

  const isOnAdminRoute = location.pathname.toLowerCase().startsWith("/admin");
  useEffect(() => {
    if (isAuthenticated && userProfile.isBanned) {
      navigate("/login");
    }

    if (isOnAdminRoute && userProfile.isAdmin) {
      // Redirect to a different page or display a message
      navigate("/"); // Redirect to the home page in this example
    }
  }, [
    isAuthenticated,
    userProfile.isBanned,
    userProfile.isAdmin,
    isOnAdminRoute,
    navigate,
  ]);

  return (
    <div>
      {!isOnAdminRoute && !userProfile.isBanned && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/tours" element={<ToursList />} />
        <Route path="/profile/:id" element={<ProfileEdit />} />
        <Route path="/profilefavs/:id" element={<ProfileFavs />} />
        <Route path="/profile/review" element={<ReviewFavorites />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/guides/:id" element={<GuideDetail />} />
        <Route path="/cart" element={<Cart />} />

          <>
            <Route path="/admin/" element={<AdminPanel />} />
            <Route path="/admin/createtour" element={<CreateTour />} />
            <Route path="/admin/createguide" element={<CreateGuide />} />
            <Route path="/admin/viewTours" element={<AdminTous />} />
            <Route path="/admin/viewGuides" element={<AdminGuides />} />
            <Route path="/admin/transactions" element={<AdminTransactions />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/review" element={<AdminReviews />} />
          </>

        <Route path="/banned" element={<BannedPage />} />

        <Route
          path="/checkout"
          element={
            <PayPalScriptProvider options={initialOptions}>
              <Checkout />
            </PayPalScriptProvider>
          }
        />
      </Routes>

      {!isOnAdminRoute && <Footer />}
    </div>
  );
};

export default App;
