import Carousel from "../../components/Carrusel/Carousel";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getAllG } from "../../redux/guideStore/guidesActions";
import GuideCard from "../../components/GuideCard/GuideCard";

const Guides = () => {
    const allGuides = useSelector((state) => state.guide.guides);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllG());
    }, [dispatch])

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
            allGuides?.map((guide) => 
            <div className="flex justify-center items-start">
            <GuideCard key={guide.id} guide={guide}/>
            </div>
            )
          ) : (
            <b>Loading...</b>
          )}
          
        </div>
      </section>
    </main>
  );
};

export default Guides;
