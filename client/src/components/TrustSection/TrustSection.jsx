import React from "react";

const TrustSection = ({ icon, title, description }) => (
  <div className="flex items-center p-1">
    <i className="w-12 h-12">
      <img src={icon} alt="" />
    </i>
    <div className="w-3/4">
      <b>{title}</b>
      <p>{description}</p>
    </div>
  </div>
);

export default TrustSection;
