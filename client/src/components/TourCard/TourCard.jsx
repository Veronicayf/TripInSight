import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTourId } from "../../redux/tourStore/toursActions";
import { getGuideId } from "../../redux/guideStore/guidesActions";
import { getAllFav } from "../../redux/userStore/usersActions";
import { Link, useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {
  const profile = useSelector((state) => state.user.userProfile);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const places = tour.capacity - tour.subscription;
  const showPlaces = places <= 3 && places > 0;
  const soldOut = places === 0;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getTourId(tour.id));
    dispatch(getGuideId(tour.guideId));
    dispatch(getAllFav(profile.id));
    navigate(`/tours/${tour.nameTour}`);
  };

  return (
    <div className="relative">
      <div
        className="w-full md:w-60 h-[21rem] tourCard rounded-lg bg-white overflow-hidden shadow-md transition-transform transform hover:scale-105"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={(e) => handleClick(e)}
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
              <strong>Capacity:</strong> {tour.places}
            </p>
          )}
          <p className="text-gray-800">
            <strong>Price:</strong> ${tour.price}
          </p>
        </div>
      </div>
      {showPlaces && (
        <div className="bg-primary text-white rounded-br-lg rounded-tl-lg font-bold p-2 absolute top-5 left-[-30px] shadow-xl shadow-black">
          <div className="text-xl">{places} places</div>
        </div>
      )}
      {soldOut && (
        <div className="bg-red-600 text-white rounded-br-lg rounded-tl-lg font-bold p-2 absolute top-5 left-[-30px] shadow-xl shadow-black">
          <div className="text-xl">Sold Out!</div>
        </div>
      )}
    </div>
  );
};

export default TourCard;
