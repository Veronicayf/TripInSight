import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import logo from "./../../assets/img/logo.png";
import cart from "./../../assets/icons/cartIcon.png";
import login from "./../../assets/icons/loginIcon.png";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Auth0/ProfileAuth0";
import LogoutButton from '../Auth0/LogoutButton';

const NavBar = () => {
  const location = useLocation();
  const loginRout = location.pathname === "/login";

  const { isAuthenticated } = useAuth0();

  return (
    <div className="bg-fixed bg-gradient-to-b from-black fixed z-50 to-transparent to-15% h-35 w-full font-bold text-white flex flex-row place-content-stretch">
      <div className="flex flex-row basis-2/5 justify-start items-center gap-5">
        <img src={logo} alt="Trip In Sight" className="w-28 h-28" />
        <Link to="/" className={` ${location.pathname === '/' ? 'text-green-400' : ''}`}>
          <h3>Home</h3>
        </Link>
        <Link to="/tours" className={` ${location.pathname === '/tours' ? 'text-green-400' : ''}`}>
          <h3>Tours List</h3>
        </Link>
        <Link to="/aboutus" className={` ${location.pathname === '/aboutus' ? 'text-green-400' : ''}`}>
          <h3>About Us</h3>
        </Link>
      </div>
      {!loginRout && (
        <div className="flex flex-row basis-3/5 justify-between items-center gap-5 p-5">
          <SearchBar />
          <div className="flex flex-row  items-center gap-5">
            <Link to="/cart">
              <button className="bg-white text-green-600 flex flex-row rounded-full items-center gap-3 p-1.5">
                <img src={cart} alt="Cart" />
                <h3>Cart</h3>
              </button>
            </Link>

          {isAuthenticated && isAuthenticated ? (
              <div className="flex justify-center items-center"> 
                <Profile /> 
                <div className="flex flex-row p-1 items-center"> <LogoutButton /> </div>
              </div> 
              
            ) 
            : (
            <Link to="/login">
              <button className="bg-green-600 flex flex-row rounded-full items-center gap-3 p-1.5">
                <img src={login} alt="Login" />
                <h3>Login</h3>
              </button>
            </Link> 
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
