import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllG } from "../../redux/guideStore/guidesActions";
import GuideCard from "../../components/GuideCard/GuideCard";
import Pagination from "../../components/Paging/Paging";

const Guides = () => {
  const allGuides = useSelector((state) => state.guide.guides);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(getAllG(currentPage));
  }, [dispatch, currentPage])

  useEffect(() => {
    if (allGuides && allGuides.length > 0) {
      const totalPages = Math.ceil(allGuides.length / 12)
      setTotalPages(totalPages);
    }
  }, [allGuides]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <section>
        <div className="flex justify-center text-5xl my-3 gap-3">
          <b>Our </b>
          <b className="text-primary"> Guides </b>
        </div>
        <div className="flex flex-wrap justify-center items-center grid-cols-4 ">
          {allGuides && allGuides.length > 0 ? (
            allGuides
              .map((guide, index) =>
                <GuideCard key={index} guide={guide} />)
              .slice((currentPage - 1) * 12, currentPage * 12)
          ) : (
            <b>Loading...</b>
          )}
        </div>
      </section>
      <div className="flex justify-center my-3">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Guides;
