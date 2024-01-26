import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import { useAuth0 } from "@auth0/auth0-react";
import Guides from "./views/Guides/Guides";
import { getUserId, loggedUser } from "./redux/userStore/usersActions";
import AdminGuides from "./views/AdminGuides/AdminGuides";
import { useDispatch } from "react-redux";
import GuideDetail from "./views/GuideDetail/Guide";
import Checkout from "./views/CheckOut/CheckOut";
import ProfileEdit from "./views/ProfileSettings/ProfileSettings";
import ProfileFavs from "./views/ProfileFavs/ProfileFavs";
import ReviewFavorites from "./views/ReviewFavorites/ReviewFavorites";
import AdminTransactions from "./views/AdminTransactions/AdminTransactions";



const App = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const dispatch = useDispatch();
  const [userRegistered, setUserRegistered] = useState(false);

  //verificar si el user esta autenticado cuando ingresa.
  useEffect(() => {
    const data = async () => {
      if (isAuthenticated && !userRegistered) {
        //si lo esta destructuro la info para mandarla al back
        const userAuth = {
          name: user.name,
          email: user.email,
          image: user.picture,
          auth0Id: user.sub,
        };
        await dispatch(loggedUser(userAuth));
        setUserRegistered(true);
      }
    };
    data();
  }, [dispatch, isAuthenticated, user, userRegistered]);

  const location = useLocation();
  const isOnAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>

      {!isOnAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" />
        <Route path="/guides" element={<Guides />} />
        <Route path="/tours" element={<ToursList />} />
        <Route path="/profile/:id" element={<ProfileEdit/>} />
        <Route path="/profilefavs/:id" element={<ProfileFavs/>} />
        <Route path="/profile/review" element={<ReviewFavorites/>}/>
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/guides/:id" element={<GuideDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/" element={<AdminPanel />} />
        <Route path="/admin/createtour" element={<CreateTour />} />
        <Route path="/admin/createguide" element={<CreateGuide />} />
        <Route path="/admin/viewTours" element={<AdminTous />} />
        <Route path="/admin/viewGuides" element={<AdminGuides />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {!isOnAdminRoute && <Footer />}
    </div>
  );
};

export default App;
