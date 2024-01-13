import { React } from "react";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const tourCard = ({
  name,
  city,
  country,
  initialDate,
  endDate,
  capacity,
  price,
  image,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Link to={`/detail/${id}`} className="tourCard">
      <img src={image} alt={name} className="TourImage" />
      <h2>{name}</h2>
      <p>
        <strong>Location:</strong> {city}, {country}
      </p>
      <p>
        <span>Date:</span> {initialDate} - {endDate}
      </p>
      <p>
        <span>Capacity:</span> {capacity}
      </p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
    </Link>
  );
};

export default tourCard;
