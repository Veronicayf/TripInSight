import React from "react";
import { Link } from "react-router-dom";
import ImagePrincipal from "../../assets/img/Caballo1.jpg";
import ImageSecundaria from "../../assets/img/Caballo2.jpg";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import IconGoTo from "../../assets/icons/gotoIcon.png";
import IconSale from '../../assets/icons/IconSale.png'
import Carousel from "../../components/Carrusel/Carousel";
import IconStar from '../../assets/icons/IconStar.png'
import ImageComentary from '../../assets/img/ComentariImage.png'
import IconPlane from '../../assets/icons/IconPlane.png'
import IconMail from '../../assets/icons/IconEmail.png'

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
    console.log("hola");
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
          <p>
            Explore our top destinations vote by more than +100.000 costumers
            around the world
          </p>
        </div>
        <div className="my-3 w-full flex justify-center">
            <Link to={"/tours"} className=" w-96 mx-10 flex justify-center items-center text-2xl  transition hover:duration-300 hover:scale-110 ease-in-out  ">
            <b>All Tours</b>
            <i>
              <img src={IconGoTo} alt="Icon Go to " className="h-12" />
            </i>
          </Link>
        </div>

        <div className="flex justify-center items-center w-full h-96">
          <div className="flex justify-center items-center  gap-4">
            {allTours && allTours.length > 0 ? (
              allTours.slice(0, 5).map((tour) => <TourCard key={tour.id} tour={tour} />)
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
            <b className="text-primary mx-2">PROPOUSALS</b>
          </div>
          <div className="flex justify-center items-center w-full h-96">
            <div className="flex justify-center items-center gap-4">
              {allTours && allTours.length > 0 ? (
                allTours.slice(0, 5).map((tour) => <TourCard key={tour.id} tour={tour} />)
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </div>
          <div className="my-3 w-full flex justify-center">
            <Link to={"/tours"} className=" w-96 mx-10 flex justify-center items-center text-2xl  transition hover:duration-300 hover:scale-110 ease-in-out  ">
              <b>All Tours</b>
              <i>
                <img src={IconGoTo} alt="Icon Go to " className="h-12" />
              </i>
            </Link>
          </div>
        </div>
      </section>
{/*<-- Subscribe section -->*/}
<section>
            <div className="bg-bg-landscape bg-cover text-white flex p-24">
            {/*<-- Left --> */ }
                <div className="flex flex-col w-1/2 justify-around items-center h-96">
                    <div className="w-5/6 h-5/6 m-auto p-4 bg-darkgreen-bg opacity-75 flex flex-col rounded-3xl justify-around">
                        <div className="flex">
                            <div className="w-2/3 flex flex-col justify-center">
                                <b className="text-4xl opacity-100">Discover Especial Deals!</b>
                                <p className="text-2xl">Make sure to check out these special promotions</p>
                            </div>
                            <div className="flex items-center w-1/3">
                            <i><img src={IconSale} alt="Sales Icon" className="h-38 w-36" /></i>
                            </div>
                        </div>
                        <div className="h-12 flex justify-center">
                            <button className="h-12 w-44 bg-white text-black rounded-3xl hover:bg-primary transition hover:duration-300 hover:scale-110 ease-in-out ">
                                <Link to={"/tours"}><b>See Tours</b></Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/*<-- right --> */ }
                <div className="flex flex-col w-1/2 justify-around items-center h-96">
                    <div className="w-5/6 h-5/6 m-auto p-4 bg-primary opacity-75  flex flex-col rounded-3xl justify-around">
                        <div className="flex">
                            <div className="w-2/3 flex flex-col justify-center">
                                <b className="text-3xl opacity-100">Don´t miss a thing</b>
                                <p className="text-xl">Get update to special deals and exclusive offers</p>
                            </div>
                            <div className="flex items-center w-1/3">
                            <i><img src={IconPlane} alt="Sales Icon" className="h-38 w-36" /></i>
                            </div>
                        </div>
                        <div className="h-12 flex justify-between bg-white text-black rounded-3xl items-center">
                            <i className=" px-2"><img src={IconMail} alt="" /></i>
                            <input className=" w-full outline-none" type="text" placeholder="Your Email Address..." />
                            <button className=" bg-darkgreen-bg text-white w-40 h-12 rounded-3xl hover:bg-btn-hover" type="submit">Suscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <-- Comentary Section --> */}
        <section>
            <div className="flex justify-center item-center my-5">
                <b className="text-4xl">What <b className=" text-primary">our costume</b> are sayin about us</b>
            </div>
            <div className=" flex flex-row justify-around items-center mb-6" >
                {/* <-- Comentary --> */}
                <div className=" w-1/3 flex flex-col justify-center items-center m-5">
                    <div className="flex flex-col justify-center items-center">
                        <img src={ImageComentary} alt="" className=" h-28 w-28" />
                        <b>Brittany Clark</b>
                        <div className="flex flex-row justify-center">
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                        </div>
                        <p className=" text-center">The tours in this website are great i had benn really enjoy with my family! the team is very professional an taking care fo the customers. Will surely recommend to my firend to join this company!</p>
                    </div>
                </div>
                {/* <-- Comentary --> */}
                <div className=" w-1/3 flex flex-col justify-center items-center m-5 ">
                    <div className="flex flex-col justify-center items-center">
                        <img src={ImageComentary} alt="" className=" h-28 w-28" />
                        <b>Brittany Clark</b>
                        <div className="flex flex-row justify-center">
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                        </div>
                        <p className=" text-center">The tours in this website are great i had benn really enjoy with my family! the team is very professional an taking care fo the customers. Will surely recommend to my firend to join this company!</p>
                    </div>
                </div>
                {/* <-- Comentary --> */}
                <div className=" w-1/3 flex flex-col justify-center items-center m-5">
                    <div className="flex flex-col justify-center items-center">
                        <img src={ImageComentary} alt="" className=" h-28 w-28" />
                        <b>Brittany Clark</b>
                        <div className="flex flex-row justify-center">
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                            <i ><img src={IconStar} alt="" className="h-8" /></i>
                        </div>
                        <p className=" text-center">The tours in this website are great i had benn really enjoy with my family! the team is very professional an taking care fo the customers. Will surely recommend to my firend to join this company!</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Home;