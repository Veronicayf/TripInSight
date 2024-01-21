import { useState } from "react";
import { getGuideId } from "../../redux/guideStore/guidesActions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const GuideCard = ({ guide }) => {
  const name = guide.forename + " " + guide.surname;
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getGuideId(guide.id));
    console.log("aqui", guide);
    navigate(`/guides/${guide.forename}`);
  };

  return (
    <div
      className="flex min-h-screen items-center flex-wrap justify-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={(e) => handleClick(e)}
    >
      <Link
        to={`/guides/${guide.id}`}
        className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mb-4"
      >
      {!isHovering && !isHovering ?
      (<div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="h-80 rounded-lg object-cover object-center"
            src={guide.image}
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-xl text-primary">{name}</p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
            {guide.nationality}
          </p>
        </div>
      </div>)
      : ( 
      <div className="mx-auto h-96  px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <div className="">
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                {guide.biography}
              </p>
            </div> 
            </div>
      </div>
          
      )}
      </Link>
    </div>
    
  );
};

export default GuideCard;

