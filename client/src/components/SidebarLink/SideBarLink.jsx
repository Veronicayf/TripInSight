import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const SideBarLink = ({ linkTo, text, icon }) => {
  return (
    <NavLink to={linkTo} className="flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ">
      <i><img src={icon} alt="Dashboard Icon" className="h-10" /></i>
      <span className="text-xl">{text}</span>
    </NavLink>
  );
};

export default SideBarLink;