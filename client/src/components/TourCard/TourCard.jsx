import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourId } from "../../redux/tourStore/toursActions";

const tourCard = ({ tour }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClick = (e) => {
    console.log("me ejecute");
    e.preventDefault();
    dispatch(getTourId(tour.id));
    navigate("/detail");
  };

  return (
    <div
      className="m-20 tourCard rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
      onClick={(e) => handleClick(e)}
    >
      <Link
        to={`/detail/${tour.id}`}
        className="tourCard rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mb-4"
      >
        <img
          src={tour.image}
          alt={tour.nameTour}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{tour.nameTour}</h2>
          <p className="text-gray-700">
            <strong>Location:</strong> {tour.city}, {tour.country}
          </p>
          <p className="text-gray-700">
            <span>Date:</span> {tour.initialDate} - {tour.endDate}
          </p>
          <p className="text-gray-700">
            <span>Capacity:</span> {tour.capacity}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> ${tour.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default tourCard;
