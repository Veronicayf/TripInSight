import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import logo from "./../../assets/img/logo.png";
import cart from "./../../assets/icons/cartIcon.png";
import login from "./../../assets/icons/loginIcon.png";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Auth0/ProfileAuth0";
import LogoutButton from '../Auth0/LogoutButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const loginRout = location.pathname === "/login";

  return (
    <div className={`bg-fixed font-Nunito bg-gradient-to-b from-black fixed z-50 to-transparent to-15% h-35 w-full font-bold text-white flex flex-row place-content-stretch`}>
      <button onClick={toggleMenu} className="lg:hidden ml-3 focus:outline-none h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <div className="lg:flex flex-row basis-2/5 justify-start items-center gap-5 hidden">
        <img src={logo} alt="Trip In Sight" className="w-28 h-28" />
        <Link to="/" className={` ${location.pathname === '/' ? 'text-green-400' : ''}`}>
          <h3 className="transition hover:duration-300 hover:scale-110 ease-in-out" >Home</h3>
        </Link>
        <Link to="/tours" className={` ${location.pathname === '/tours' ? 'text-green-400' : ''}`}>
          <h3 className="transition hover:duration-300 hover:scale-110 ease-in-out" >Tours List</h3>
        </Link>
        <Link to="/guides" className={` ${location.pathname === '/guides' ? 'text-green-400' : ''}`}>
          <h3 className=" transition hover:duration-300 hover:scale-110 ease-in-out ">Guides List</h3>
        </Link>
        <Link to="/aboutus" className={` ${location.pathname === '/aboutus' ? 'text-green-400' : ''}`}>
          <h3 className="transition hover:duration-300 hover:scale-110 ease-in-out">About Us</h3>
        </Link>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute w-full top-16 left-0 right-0 bg-black text-white`}>
        {/* Menú de navegación en dispositivos pequeños */}
        <Link to="/" onClick={toggleMenu} className={`${location.pathname === '/' ? 'text-green-400' : ''} block p-2 border-b border-gray-600`}>
          Home
        </Link>
        <Link to="/tours" onClick={toggleMenu} className={`${location.pathname === '/tours' ? 'text-green-400' : ''} block p-2 border-b border-gray-600`}>
          Tours List
        </Link>
        <Link to="/guides" onClick={toggleMenu} className={`${location.pathname === '/guides' ? 'text-green-400' : ''} block p-2 border-b border-gray-600`}>
          Guides List
        </Link>
        <Link to="/aboutus" onClick={toggleMenu} className={`${location.pathname === '/aboutus' ? 'text-green-400' : ''} block p-2 border-b border-gray-600`}>
          About Us
        </Link>
        
        {/* Vista sm */}
        {isAuthenticated && isAuthenticated ? (
          <div>
            <Link to="/cart" onClick={toggleMenu} className={`${location.pathname === '/aboutus' ? 'text-green-400' : ''} block p-2 border-b border-gray-600`}>
          Cart Shop
        </Link>
          
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center"> 
              <Profile /> 
              <div className="flex flex-row p-1 justify-center items-center"> <LogoutButton /> </div>
            </div>
          </div> 
            

          ) : (
            <div className="flex flex-row p-1 justify-center items-center">
            <Link to="/login">
              <button className="h-12 w-36 bg-primary flex flex-row justify-center rounded-full items-center gap-3 p-1.5 hover:bg-btn-hover transition hover:duration-300 hover:scale-110 ease-in-out">
                <img className="h-10" src={login} alt="Login" />
                <h3>Login</h3>
              </button>
            </Link>
            </div>
          )}
      </div>
            {/* Vista LG */}
      <div className=" hidden lg:flex flex-row basis-3/5 justify-between items-center gap-5 p-5">
        <SearchBar />
        <div className="flex flex-row items-center gap-5">
          <Link to="/cart">
            <button className="h-12 w-36 bg-white text-primary flex flex-row justify-center rounded-full items-center gap-3 p-1.5 hover:bg-btn-hover transition hover:duration-300 hover:scale-110 ease-in-out">
              <img src={cart} alt="Cart" />
              <h3>Cart</h3>
            </button>
          </Link>

          {isAuthenticated && isAuthenticated ? (
            <div className="flex justify-center items-center"> 
              <Profile /> 
              <div className="flex flex-row p-1 items-center"> <LogoutButton /> </div>
            </div> 
          ) : (
            
            <Link to="/login">
              <button className="h-12 w-36 bg-primary flex flex-row justify-center  rounded-full items-center gap-3 p-1.5 hover:bg-btn-hover transition hover:duration-300 hover:scale-110 ease-in-out">
                <img className="h-10" src={login} alt="Login" />
                <h3>Login</h3>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
