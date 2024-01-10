import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import logo from './../../assets/img/logo.png';
import cart from './../../assets/icons/cartIcon.png';
import login from './../../assets/icons/loginIcon.png';

const NavBar = () => {
    return (
        <div className="bg-fixed bg-gradient-to-b from-black to-transparent to-15% h-35 w-full flex flex-row justify-evenly items-center gap-5 text-white">
            <img src={logo} alt="Trip In Sight" className="w-28 h-28"/>
            <Link to="/home">
                <h3 >Home</h3>
            </Link>
            <Link to="/tours">
                <h3 >Tours List</h3>
            </Link>
            <Link to="/aboutus">
                <h3 >About Us</h3>
            </Link>
            <SearchBar />
            <Link to="/cart">
            <button className="bg-white text-green-600 flex flex-row rounded-2xl items-center gap-3 p-1">
                <img src={cart} alt="Cart" />
                <h3>Cart</h3>
            </button>
            </Link>
            <Link to="/login">
            <button className="bg-green-600 flex flex-row rounded-2xl items-center gap-3 p-1">
                <img src={login} alt="Login" />
                <h3>Login</h3>
            </button>
            </Link>
        </div>
    )
}

export default NavBar;