import React from "react";
import logo from "./../../assets/img/logo.png";
import placeicon from "./../../assets/icons/placeIcon.png";
import email from "./../../assets/icons/IconEmail.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full font-Nunito font-bold bg-vector-leaves text-black p-4">
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
        <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
          <img src={logo} alt="Trip In Sight" className="m-4 h-12 lg:h-96" />
        </div>
        <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end">
          <div className="flex items-center mb-2">
            <img src={placeicon} alt="Location" className="w-6 h-6 mr-2" />
            <h3 className="text-sm sm:text-base">
              742 E Evergreen St, Springfield, MO 65803, EE. UU.
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center mb-2">
              <img src={email} alt="Email" className="w-6 h-6 mr-2" />
              <h3 className="text-sm sm:text-base">tripinsight@gmail.com</h3>
            </div>
            <div className="flex items-center mb-2">
              <h3 className="text-sm sm:text-base">📞5353456</h3>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <h3 className="text-sm sm:text-base">
              Follow us on our social media!
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col w-full lg:justify-around sm:flex-row justify-center items-center sm:justify-between gap-4 sm:mb-6">
        <Link to="/aboutus">
          <h3 className="cursor-pointer hover:underline">ABOUT US</h3>
        </Link>
        <Link to="/tours">
          <h3 className="cursor-pointer hover:underline">OUR TOURS</h3>
        </Link>
        <Link to="/guides">
          <h3 className="cursor-pointer hover:underline">OUR GUIDES</h3>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
