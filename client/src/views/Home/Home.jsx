import React from "react";
import { Link } from "react-router-dom";
import ImagePrincipal from "../../assets/img/Caballo1.jpg";
import ImageSecundaria from "../../assets/img/Caballo2.jpg";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import IconGoTo from "../../assets/icons/gotoIcon.png";
import IconSale from "../../assets/icons/IconSale.png";
import Carousel from "../../components/Carrusel/Carousel";

//!PruebaBack Imports
import { getAllT } from "../../redux/tourStore/toursActions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TourCard from "../../components/TourCard/TourCard";

const Home = () => {
  //!prueba
  const allTours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllT());
    console.log("hola");
  }, [dispatch]);

  return (
    <main>
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <section>
        <div className="flex justify-center text-5xl my-3">
          <b>Our Next </b>
          <b className="text-primary">Tours</b>
        </div>
        <div className=" flex justify-center text-gray-600 my-6">
          <p>
            Explore our top destinations vote by more than +100.000 costumers
            around the world
          </p>
        </div>
        <div className="my-3">
          <Link className=" flex justify-center  items-center text-2xl">
            <b>All Tours</b>
            <i>
              {" "}
              <img src={IconGoTo} alt="Icon Go to " className="h-12" />
            </i>
          </Link>
        </div>

        {/* <div className="flex justify-center items-center h-96">
          CARD SECTION
        </div> */}

        <div className="flex justify-center items-center h-96">
          <div className="flex justify-center items-center">
            {allTours && allTours.length > 0 ? (
              allTours?.map((tour) => <TourCard key={tour.id} tour={tour} />)
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <p>Some of</p>
          </div>
          <div className="flex justify-center items-center text-4xl">
            <b className=" mx-4">OUR</b>
            <b className="text-primary mx-2">PROPOSALS</b>
          </div>
          <div className="flex justify-center items-center h-96">
            CARD SECTION
          </div>
          <div className="my-3">
            <Link className=" flex justify-center  items-center text-2xl">
              <b>All Tours</b>
              <i>
                {" "}
                <img src={IconGoTo} alt="Icon Go to " className="h-12" />
              </i>
            </Link>
          </div>
        </div>
      </section>
      {/*<-- Subscribe section -->*/}
      <section>
        <div className="bg-bg-landscape bg-cover text-white flex p-24">
          {/*<-- Left --> */}
          <div className="flex flex-col w-1/2 justify-around items-center h-96">
            <div className="w-5/6 h-5/6 m-auto p-4 bg-darkgreen-bg opacity-75 flex flex-col rounded-3xl justify-around">
              <div className="flex">
                <div className="w-2/3 flex flex-col justify-center">
                  <b className="text-4xl opacity-100">
                    Discover Especial Deals!
                  </b>
                  <p className="text-2xl">
                    Make sure to check out these special promotions
                  </p>
                </div>
                <div className="flex items-center w-1/3">
                  <i>
                    <img
                      src={IconSale}
                      alt="Sales Icon"
                      className="h-38 w-36"
                    />
                  </i>
                </div>
              </div>
              <div className="h-12 flex justify-center">
                <button className="h-12 w-44 bg-white text-black rounded-3xl hover:bg-primary">
                  <Link>
                    <b>See Tours</b>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/*<-- right --> */}
          <div className="flex flex-col w-1/2 justify-around items-center h-96">
            <div className="w-5/6 h-5/6 m-auto p-4 bg-primary opacity-75  flex flex-col rounded-3xl justify-around">
              <div className="flex">
                <div className="w-2/3 flex flex-col justify-center">
                  <b className="text-3xl opacity-100">Don´t miss a thing</b>
                  <p className="text-xl">
                    Get update to special deals and exclusive offers
                  </p>
                </div>
                <div className="flex items-center w-1/3">
                  <i>
                    <img
                      src={IconSale}
                      alt="Sales Icon"
                      className="h-38 w-36"
                    />
                  </i>
                </div>
              </div>
              <div className="h-12 flex justify-center">
                <button className="h-12 w-44 bg-white text-black rounded-3xl hover:bg-primary">
                  <Link>
                    <b>See Tours</b>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
