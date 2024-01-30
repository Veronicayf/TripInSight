import React from "react";
import { Link } from "react-router-dom";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import IconGoTo from "../../assets/icons/gotoIcon.png";
import IconSale from "../../assets/icons/IconSale.png";
import Carousel from "../../components/Carrusel/Carousel";
import IconStar from "../../assets/icons/IconStar.png";
import ImageComentary from "../../assets/img/ComentariImage.png";
import IconPlane from "../../assets/icons/IconPlane.png";
import IconMail from "../../assets/icons/IconEmail.png";

//!PruebaBack Imports
import { getAllT } from "../../redux/tourStore/toursActions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TourCard from "../../components/TourCard/TourCard";

const Home = () => {
  const allTours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllT());
  }, [dispatch]);

  return (
    <main className=" font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <section>
        <div className="flex justify-center text-5xl my-3">
          <b>Our Next </b>
          <b className="text-primary">Tours</b>
        </div>
        <div className=" flex justify-center text-gray-600 my-6">
          <p className="text-center p-4">
            Explore our top destinations, curated by more than +100.000
            costumers around the world
          </p>
        </div>
        <div className="my-3 w-full flex justify-center">
          <Link
            to={"/tours"}
            className=" w-96 mx-10 flex justify-center items-center text-2xl  transition hover:duration-300 hover:scale-110 ease-in-out  "
          >
            <b>All Tours</b>
            <i>
              <img src={IconGoTo} alt="Icon Go to " className="h-12" />
            </i>
          </Link>
        </div>

        <div className="flex flex-wrap justify-around items-center w-full">
          {allTours && allTours.length > 0 ? (
            allTours.slice(0, 4).map((tour) => (
              <div
                key={tour.id}
                className="w-full flex items-center justify-center sm:w-1/2 md:w-1/2 lg:w-1/6 xl:w-1/4 p-4"
              >
                <TourCard tour={tour} />
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
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
          <div className="flex flex-wrap justify-around items-center w-full">
          {allTours && allTours.length > 0 ? (
            allTours.slice(0, 4).map((tour) => (
              <div
                key={tour.id}
                className="w-full flex items-center justify-center sm:w-1/2 md:w-1/2 lg:w-1/6 xl:w-1/4 p-4"
              >
                <TourCard tour={tour} />
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
          <div className="my-3 w-full flex justify-center">
            <Link
              to={"/tours"}
              className=" w-96 mx-10 flex justify-center items-center text-2xl  transition hover:duration-300 hover:scale-110 ease-in-out  "
            >
              <b>All Tours</b>
              <i>
                <img src={IconGoTo} alt="Icon Go to " className="h-12" />
              </i>
            </Link>
          </div>
        </div>
      </section>
      {/*<-- Subscribe section -->*/}
      <section className="bg-bg-landscape bg-cover text-white flex flex-col sm:flex-row p-4 sm:p-24">
      {/* Left */}
      <div className="flex flex-col w-full sm:w-1/2 justify-around items-center h-full">
        <div className="w-5/6 h-5/6 m-auto p-4 bg-darkgreen-bg opacity-75 flex flex-col rounded-3xl justify-around">
          <div className="flex">
            <div className="w-full sm:w-2/3 flex flex-col justify-center">
              <b className="text-4xl opacity-100">Discover special Deals!</b>
              <p className="text-2xl">
                Make sure to check out these special promotions
              </p>
            </div>
            <div className="hidden sm:flex items-center w-1/3">
              <i>
                <img src={IconSale} alt="Sales Icon" className="h-38 w-36" />
              </i>
            </div>
          </div>
          <div className="h-12 flex justify-center">
            <button className="h-12 w-44 bg-white text-black rounded-3xl hover:bg-primary transition hover:duration-300 hover:scale-110 ease-in-out">
              <Link to={"/tours"}>
                <b>See Tours</b>
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col w-full sm:w-1/2 justify-around items-center h-full mt-4 sm:mt-0">
        <div className="w-5/6 h-5/6 m-auto p-4 bg-primary opacity-75 flex flex-col rounded-3xl justify-around">
          <div className="flex">
            <div className="w-full sm:w-2/3 flex flex-col justify-center">
              <b className="text-3xl opacity-100">Don´t miss a thing</b>
              <p className="text-xl">
                Get updated on special deals and exclusive offers
              </p>
            </div>
            <div className="hidden sm:flex items-center w-1/3">
              <i>
                <img src={IconPlane} alt="Sales Icon" className="h-38 w-36" />
              </i>
            </div>
          </div>
          <div className="h-12 flex justify-between bg-white text-black rounded-3xl items-center">
            <i className=" px-2">
              <img src={IconMail} alt="" />
            </i>
            <input
              className="w-full outline-none text-black"
              type="text"
              placeholder="Your Email Address..."
            />
            <button className="bg-darkgreen-bg text-white w-40 h-12 rounded-3xl hover:bg-btn-hover" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* <-- Comentary Section --> */}
      <section className=" flex flex-col px-4">
        <div className="flex justify-center item-center text-center my-5">
          <b className="text-4xl">
            What <b className=" text-primary">our customers</b> are saying about
            us
          </b>
        </div>
        <div className=" flex flex-col lg:flex-row justify-around items-center mb-6">
          {/* <-- Comentary --> */}
          <div className=" w-1/3 flex flex-col justify-center items-center m-5">
            <div className="flex flex-col justify-center items-center">
              <img src={ImageComentary} alt="" className=" h-28 w-28" />
              <b>Brittany Clark</b>
              <div className="flex flex-row justify-center">
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
              </div>
              <p className=" text-center">
                The tours in this website are great i had benn really enjoy with
                my family! the team is very professional an taking care fo the
                customers. Will surely recommend to my firend to join this
                company!
              </p>
            </div>
          </div>
          {/* <-- Comentary --> */}
          <div className=" w-1/3 flex flex-col justify-center items-center m-5 ">
            <div className="flex flex-col justify-center items-center">
              <img src={ImageComentary} alt="" className=" h-28 w-28" />
              <b>Brittany Clark</b>
              <div className="flex flex-row justify-center">
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
              </div>
              <p className=" text-center">
                The tours in this website are great i had benn really enjoy with
                my family! the team is very professional an taking care fo the
                customers. Will surely recommend to my firend to join this
                company!
              </p>
            </div>
          </div>
          {/* <-- Comentary --> */}
          <div className=" w-1/3 flex flex-col justify-center items-center m-5">
            <div className="flex flex-col justify-center items-center">
              <img src={ImageComentary} alt="" className=" h-28 w-28" />
              <b>Brittany Clark</b>
              <div className="flex flex-row justify-center">
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
                <i>
                  <img src={IconStar} alt="" className="h-8" />
                </i>
              </div>
              <p className=" text-center">
                The tours in this website are great i had benn really enjoy with
                my family! the team is very professional an taking care fo the
                customers. Will surely recommend to my firend to join this
                company!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
