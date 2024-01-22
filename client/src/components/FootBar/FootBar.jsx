import { React } from "react";
import logo from "./../../assets/img/logo.png";
import placeicon from "./../../assets/icons/placeIcon.png";
import email from "./../../assets/icons/IconEmail.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full font-Nunito font-bold justify-between bg-vector-leaves text-black h-full">
      <div className="flex flex-row justify-evenly items-center">
        <div className="w-1/2 flex items-start">
          <img src={logo} alt="Trip In Sight" className="m-4 mr-80" />
        </div>
        <div className="ml-auto flex flex-col justify-end items-end">
          <div className="flex items-right mb-2">
            <div className="mr-2">
              <img src={placeicon} alt="Location" className="w-6 h-6" />
            </div>
            <h3>742 E Evergreen St, Springfield, MO 65803, EE. UU.</h3>
          </div>
          <div className="flex gap-2">
            <div className="flex items-right mb-2">
              <div className="mr-2">
                <img src={email} alt="Email" className="w-6 h-6" />
              </div>
              <h3>tripinsight@gmail.com</h3>
            </div>
            <div className="flex items-right mb-2">
              <h3>📞5353456</h3>
            </div>
          </div>
          <div className="flex items-right mb-2">
            <h3> Follow us on our social media!</h3>
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-row justify-center gap-80 mb-6">
        <Link to="/aboutus" className="mx-4">
          <h3 className="cursor-pointer hover:underline">ABOUT US</h3>
        </Link>
        <Link to="/tours" className="mx-4">
          <h3 className="cursor-pointer hover:underline">OUR TOURS</h3>
        </Link>
        <Link to="/guides" className="mx-4">
          <h3 className="cursor-pointer hover:underline">OUR GUIDES</h3>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
