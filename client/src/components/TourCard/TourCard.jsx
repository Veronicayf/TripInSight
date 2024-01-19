import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourId } from "../../redux/tourStore/toursActions";
import { getTourById } from "../../redux/tourStore/toursSlice";

const TourCard = ({ tour }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getTourId(tour.id));
    console.log("aqui", tour);
    navigate(`/tours/${tour.id}`);
  };

  return (
    <div
      className=" w-60 h-[21rem] tourCard rounded-lg bg-white overflow-hidden shadow-md transition-transform transform hover:scale-105"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={(e) => handleClick(e)}
    >
      <Link
        to={`/tours/${tour.id}`}
        className="tourCard rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mb-4"
      >
        <img
          src={tour.image}
          alt={tour.nameTour}
          className="w-full h-40 object-cover"
        />
        <div className="p-2">
          <h2 className="text-lg font-bold mb-2">{tour.nameTour}</h2>
          <p className="text-gray-800">
            <strong>Location:</strong> {tour.city}, {tour.country}
          </p>

          {isHovering && (
            <p className="text-gray-800">
              <span>Capacity:</span> {tour.capacity}
            </p>
          )}
          <p className="text-gray-800">
            <strong>Price:</strong> ${tour.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
