import { useState } from "react";

const GuideCard = ({ guide }) => {
  const name = guide.forename + " " + guide.surname;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="flex min-h-screen items-center flex-wrap justify-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
    </div>
    
  );
};

export default GuideCard;

