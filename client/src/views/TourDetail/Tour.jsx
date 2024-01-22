import React from "react";
import { Link } from "react-router-dom";
import tourStyle from "./tourcopy.module.css";
import TourInfoItem from "../../components/TourInfoItem/TourInfoItem";
import Buysection from "../../components/Buysection/Buysection";
import PhotoSection from "../../components/PhotoSection/PhotoSection";
import GuideSection from "../../components/TourDetailGuideSection/GuideSection";
import ImagePrincipal from "../../assets/img/Caballo1.jpg";
import ImageSecundaria from "../../assets/img/Caballo2.jpg";
import ImangeProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImangeProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImangeProvisoria3 from "../../assets/img/paisaje2.jpg";
import iconDay from "../../assets/icons/dayIcon.png";
import iconCalendar from "../../assets/icons/calendarIcon.png";
import iconpeople from "../../assets/icons/peopleIcon.png";
import iconplace from "../../assets/icons/placeIcon.png";
import iconTourDetail from "../../assets/icons/tourDetailicon.png";
import IconIncludes from "../../assets/icons/includesIcon.png";
import iconPhoto from "../../assets/icons/photosIcon.png";

import { getTourId } from "../../redux/tourStore/toursActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tour = () => {
  const tourDetail = useSelector((state) => state.tour.detail);
  const guideDetail = useSelector((state) => state.guide.detail)
  
  const initialDate = new Date(tourDetail.initialDate);
  const endDate = new Date(tourDetail.endDate);

  const differenceInMilliseconds = endDate - initialDate;
  const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return (
    <main className=" font-Nunito">
      {/* Image Section */}
      <section className="">
        <img
          src={tourDetail.image}
          className="w-full h-[35rem] "
          alt=""
        />
      </section>
      {/*-------------- Info Del Tour --------------*/}
      <section className="px-4 pt-8 flex w-3/4">
        <div className="flex w-1/2">
          <ul>
            <TourInfoItem icon={iconDay} label={"Duration: " + differenceInDays} />
            <TourInfoItem
              icon={iconCalendar}
              label={"Initial Date: " + tourDetail.initialDate} />
            <TourInfoItem
              icon={iconCalendar}
              label= {" End Date: " + tourDetail.endDate} />
            
          </ul>
        </div>
        <div className="flex w-1/2">
          <ul>
            <TourInfoItem icon={iconpeople} label={tourDetail.capacity} />
            <TourInfoItem
              icon={iconplace}
              label={tourDetail.city + ", " + tourDetail.country}
            />
          </ul>
        </div>
      </section>
      <section>
        <Buysection tour={tourDetail} />
      </section>
      {/*-------------- Info Del Tour --------------*/}
      {/*-------------- Page Nav Bar--------------*/}
      <section className="px-4 flex w-3/4 h-14 bg-gray-500 justify-around items-center">
        <div className="">
          <button
            type="button"
            className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            <Link to="#description">Description</Link>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            <Link to="#photos">Photos</Link>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            <Link to="#guide">Guide</Link>
          </button>
        </div>
      </section>
      {/*-------------- Page Nav Bar--------------*/}

      {/*-------------- Tour Detail --------------*/}
      <section id="description" className="flex-col px-4 w-3/4">
        <div className="flex items-center">
          <i className="h-12 content-center">
            <img className="h-10 w-10" src={iconTourDetail} alt="Tour Detail" />
          </i>
          <h3 className="px-4 flex-grow text-3xl">Tour Detail</h3>
        </div>
        <div className="flex justify-start">
          <p className="text-lg">{tourDetail.description}</p>
        </div>
      </section>
      {/*-------------- Tour Detail --------------*/}

      {/*-------------- Second Image --------------*/}
      <section className=" w-3/4 px-4 flex justify-center">
      {tourDetail && tourDetail.photos && tourDetail.photos.length > 0 && (
    <img src={tourDetail.photos[0]} alt="" />
  )}
      </section>
      {/*-------------- Detail tour --------------*/}
      <section className=" w-3/4">
        <div className="bg-seconday-text h-2 my-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Depature place</b>
          </div>
          <div className="w-2/3 flex text-lg">
            <p>{tourDetail.city + ', ' + tourDetail.country + ', ' + tourDetail.continent}</p>
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Travel time</b>
          </div>
          <div className="w-2/3 flex text-lg">
            <p>{tourDetail.initialDate} - {tourDetail.endDate}</p>
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4"></div>
        <div className=" w-full flex">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Included in the price</b>
          </div>
          <div className=" flex-col">
            <div className="w-2/3 flex text-lg py-1">
              <i className="h-12 content-center">
                <img className="h-10 w-16" src={IconIncludes} alt="icon" />
              </i>
              <p className="px-4 flex-grow text-base">
                Accommodation and overnight stay in all hotels in a shared room,
                the single supplement is €650
              </p>
            </div>
            <div className="w-2/3 flex text-lg py-1">
              <i className="h-12 content-center">
                <img className="h-10 w-10" src={IconIncludes} alt="icon" />
              </i>
              <p className="px-4 flex-grow text-base">
                All meals, breakfasts, lunches and dinners.
              </p>
            </div>
            <div className="w-2/3 flex text-lg py-1">
              <i className="h-12 content-center">
                <img className="h-10 w-10" src={IconIncludes} alt="icon" />
              </i>
              <p className="px-4 flex-grow text-base">
                Local bilingual guide throughout the trip
              </p>
            </div>
            <div className="w-2/3 flex text-lg py-1">
              <i className="h-12 content-center">
                <img className="h-10 w-10" src={IconIncludes} alt="icon" />
              </i>
              <p className="px-4 flex-grow text-base">
                Photographic guide and all its expenses
              </p>
            </div>
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4"></div>
      </section>
      {/*-------------- Photos tour --------------*/}
      <section id="photos" className="flex-col px-4 w-3/4">
      <PhotoSection
        icon={iconPhoto}
        title="Photos"
        images={tourDetail.photos || []}
      />
      </section>
      {/*-------------- Guide Section --------------*/}
      <GuideSection
        icon={iconTourDetail}
        title="Guide"
        guideName={guideDetail.forename + ' ' + guideDetail.surname}
        guideImage={guideDetail.image}
        guideDescription={guideDetail.biography}
      />
    </main>
  );
};

export default Tour;
