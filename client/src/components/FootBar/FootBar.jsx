import { React } from "react";
import logo from "./../../assets/img/logo.png";
import placeicon from "./../../assets/icons/placeIcon.png";
import email from "./../../assets/icons/loginEmailIcon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="Trip In Sight" className="w-691 h-601" />
        <div>
          <img src={placeicon} alt="Location" />
          <h3>742 E Evergreen St, Springfield, MO 65803, EE. UU.</h3>
        </div>
        <div>
          <img src={email} alt="Email" />
          <h3>contact@tripinsight.com.us</h3>
        </div>
        <div>
          <h3>(123)456-7890</h3>
        </div>
        <div>
          <h3> Follow us on our social media!</h3>
        </div>
      </div>
      <div>
        <Link to="/aboutus">
          <h3>ABOUT US</h3>
        </Link>
        <Link to="/tours">
          <h3>OUR TOURS</h3>
        </Link>
        <Link to="/guides">
          <h3>OUR GUIDES</h3>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
