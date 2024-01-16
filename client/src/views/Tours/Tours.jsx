import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import TourCard from '../../components/TourCard/TourCard'
import { getAllT } from "../../redux/tourStore/toursActions";

const ToursList = () => {
    const allTours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllT());
    }, [dispatch])

  return (
    <main>
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <section>
        <div className="flex justify-center text-5xl my-3 gap-3">
          <b>Our </b>
          <b className="text-primary"> Tours </b>
        </div>
        <div className="flex justify-center items-center">
          {allTours && allTours.length > 0 ? (
            allTours?.map((tour, index) => <TourCard key={index} tour={tour}/>)
          ) : (
            <b>Loading...</b>
          )}
          
        </div>
      </section>
    </main>
  );
};

export default ToursList;
