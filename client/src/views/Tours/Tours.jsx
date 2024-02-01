import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import TourCard from '../../components/TourCard/TourCard'
import { getAllT } from "../../redux/tourStore/toursActions";
import FilterTags from "../../components/Filters/FilterTags/FilterTags";
import FilterContinent from "../../components/Filters/FiltersCG/FilterContinent";
import PriceOrder from "../../components/Filters/Order/PriceOrder";
import Pagination from "../../components/Paging/Paging"

const ToursList = () => {
  const allTours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    dispatch(getAllT(currentPage));
  }, [dispatch, currentPage])

  useEffect(() => {
    if (allTours && allTours.length > 0) {
      const totalPages = Math.ceil(allTours.length / 12);
      setTotalPage(totalPages);
    }
  }, [allTours, currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page)
  }

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

        <div className="flex flex-col lg:hidden px-4">
          <div className=" flex justify-center py-4git gap-4">
            <FilterContinent />
            <PriceOrder />
          </div>
          <FilterTags />
        </div>
        <div className="hidden lg:flex lg:flex-row flex-col lg:justify-center my-3 gap-3 px-8">
          <FilterContinent />
          <FilterTags />
          <PriceOrder />
        </div>
        <div className="flex flex-wrap gap-10 p-4 w-full justify-around items-center">
          {allTours && allTours.length > 0 ? (
            allTours
              .map((tour, index) => <TourCard key={index} tour={tour} />)
              .slice((currentPage - 1) * 12, currentPage * 12)
          ) : (
            <div className="flex flex-col justify-center items-center p-5 gap-5">
              <b>Loading...</b>
              <img src="https://media1.tenor.com/m/QqPVtiP0IjYAAAAC/travel-lets-go.gif" alt="loading" width="250" />
              <button className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5" onClick={handleClick}>View all tours</button>
            </div>
          )}

        </div>
      </section>
      <div className="flex justify-center my-3">
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default ToursList;
