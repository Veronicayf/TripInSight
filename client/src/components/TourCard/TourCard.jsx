import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const tourCard = ({
  tour
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Link to={`/detail/${tour.id}`} className="tourCard">
      <img src={tour.image} alt={tour.nameTour} className="TourImage" />
      <h2>{tour.nameTour}</h2>
      <p>
        <strong>Location:</strong> {tour.city}, {tour.country}
      </p>
      <p>
        <span>Date:</span> {tour.initialDate} - {tour.endDate}
      </p>
      <p>
        <span>Capacity:</span> {tour.capacity}
      </p>
      <p>
        <strong>Price:</strong> ${tour.price}
      </p>
    </Link>
  );
};

export default tourCard;
