import React from "react";
import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import IconBirthday from "../../assets/icons/IconBirthday.png";
import IconCountry from "../../assets/icons/IconCountry.png";
import { useSelector } from "react-redux";
import TourCard from "../../components/TourCard/TourCard";

const GuideDetail = () => {
  const guideDetail = useSelector((state) => state.guide.detail);
  const tours = useSelector((state) => state.tour.tours);
  const tourGuide = tours.filter((tour) => tour.guideId === guideDetail.id);

  return (
    <div className="font-Nunito">
      <Carousel images={[ImageProvisoria2, ImageProvisoria3, ImageProvisoria1]} />

      <div className="w-full flex flex-col lg:flex-row justify-center p-4 lg:p-8">
        <div className="lg:w-1/2 px-4 lg:px-9">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around py-4 lg:py-9">
            <b className="text-3xl lg:text-5xl mb-4 lg:mb-0">
              {guideDetail.forename}
            </b>
            <b className="text-3xl lg:text-5xl text-primary">
              {guideDetail.surname}
            </b>
          </div>

          <div className="flex justify-center items-center mb-4 lg:mb-8">
            <p className="text-sm lg:w-3/4 text-center">
              {guideDetail.biography}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-around items-center mb-4 lg:mb-8">
            <div className="flex items-center mb-2 lg:mb-0">
              <i>
                <img className="h-6 lg:h-12" src={IconBirthday} alt="" />
              </i>
              <b className="ml-2">{guideDetail.birthDate}</b>
            </div>
            <div className="flex items-center">
              <i>
                <img className="h-6 lg:h-12" src={IconCountry} alt="" />
              </i>
              <b className="ml-2">{guideDetail.nationality}</b>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 lg:px-9">
          <div className="flex justify-center mt-10 mb-10 h-96">
            <img
              className="h-full w-full object-cover"
              src={guideDetail.image}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center ">
        <div className="flex justify-center flex-row">
          <b className="text-5xl">Tours with</b>
          <b className="text-5xl text-primary pl-4">{guideDetail.forename}</b>
        </div>
        <div className="flex justify-center flex-row gap-5 py-9">
          {tourGuide && tourGuide.length > 0 ? (
            tourGuide?.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center p-5 gap-5">
              <b>No tours assigned at this time...</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
