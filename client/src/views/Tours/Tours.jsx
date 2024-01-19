import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import TourCard from '../../components/TourCard/TourCard'
import { getAllT } from "../../redux/tourStore/toursActions";
import FilterTags from "../../components/Filters/FilterTags/FilterTags";
import FilterContinent from "../../components/Filters/FiltersCG/FilterContinent";
import PriceOrder from "../../components/Filters/Order/PriceOrder";

const ToursList = () => {
    const allTours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllT());
    }, [dispatch])

    const handleClick = (e) => {
      //refresco largando nuevamente una petición al back.
      e.preventDefault();
      dispatch(getAllT(e.target.value));
    };

  return (
    <main className=" font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <section>
        <div className="flex justify-center text-5xl my-3 gap-3">
          <b>Our </b>
          <b className="text-primary"> Tours </b>
        </div>
        <div className="flex justify-center my-3 gap-3">
        <FilterContinent />
        <FilterTags />
        <PriceOrder />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {allTours && allTours.length > 0 ? (
            allTours?.map((tour, index) => <TourCard key={index} tour={tour}/>)
          ) : (
            <div className="flex flex-col justify-center items-center p-5 gap-5">
            <b>Loading...</b>
            <img src="https://media1.tenor.com/m/QqPVtiP0IjYAAAAC/travel-lets-go.gif" alt="loading" width="250"/>
            <button className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5" onClick={handleClick}>View all tours</button>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
};

export default ToursList;
