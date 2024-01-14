import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourId } from "../../redux/tourStore/toursActions";

const TourCard = ({ tour }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Assuming you have a Redux action named getTourId
    // and useDispatch from react-redux
    // import { useDispatch } from 'react-redux';
    // const dispatch = useDispatch();
    // dispatch(getTourId(tour.id));
    navigate(`/detail/${tour.id}`);
  };

  return (
    <div
      className="m-20 tourCard rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
          {isHovering && (
            <p className="text-gray-700 mt-2">
              <strong>Description:</strong> {tour.description}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
