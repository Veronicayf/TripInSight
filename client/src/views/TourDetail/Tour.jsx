import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// <-- Components -->
import { getTourId } from "../../redux/tourStore/toursActions";
import TourInfoItem from "../../components/TourInfoItem/TourInfoItem";
import Buysection from "../../components/Buysection/Buysection";
import PhotoSection from "../../components/PhotoSection/PhotoSection";
import GuideSection from "../../components/TourDetailGuideSection/GuideSection";
import ImangeProvisoria1 from "../../assets/img/ciervo1.jpg";

// <-- Icons -->
import iconDay from "../../assets/icons/dayIcon.png";
import iconCalendar from "../../assets/icons/calendarIcon.png";
import iconpeople from "../../assets/icons/peopleIcon.png";
import iconplace from "../../assets/icons/placeIcon.png";
import iconTourDetail from "../../assets/icons/tourDetailicon.png";
import IconIncludes from "../../assets/icons/includesIcon.png";
import iconPhoto from "../../assets/icons/photosIcon.png";

const Tour = () => {
  const tourDetail = useSelector((state) => state.tour.detail);
  const guideDetail = useSelector((state) => state.guide.detail);

  const initialDate = new Date(tourDetail.initialDate);
  const endDate = new Date(tourDetail.endDate);

  const differenceInMilliseconds = endDate - initialDate;
  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const targetSection = document.querySelector(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className=" font-Nunito">
      {/* Image Section */}
      <section className="">
        <img
          src={tourDetail.image}
          className="w-full h-[38rem] object-cover "
          alt=""
        />
      </section>
      {/*-------------- Info Del Tour --------------*/}
      <section className="px-4 pt-8 flex w-3/4">
        <div className="flex w-1/2">
          <ul>
            <TourInfoItem
              icon={iconDay}
              label={"Duration: " + differenceInDays + " days."}
            />
            <TourInfoItem
              icon={iconCalendar}
              label={"Initial Date: " + tourDetail.initialDate}
            />
            <TourInfoItem
              icon={iconCalendar}
              label={" End Date: " + tourDetail.endDate}
            />
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
      {/*-------------- BuySection --------------*/}
      <section>
        <Buysection tour={tourDetail} />
      </section>
      {/*-------------- Info Del Tour --------------*/}
      {/*-------------- Page Nav Bar--------------*/}
      <section className="px-4 flex w-3/4 h-14 bg-gray-500 justify-around items-center">
        <div className="">
          <a
            href="#description"
            onClick={(e) => scrollToSection(e, "#description")}
            className="text-white hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            Description
          </a>
        </div>
        <div>
          <a
            href="#photos"
            onClick={(e) => scrollToSection(e, "#photos")}
            className="text-white hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            Photos
          </a>
        </div>
        <div>
          <a
            href="#guide"
            onClick={(e) => scrollToSection(e, "#guide")}
            className="text-white hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover dark:focus:ring-green-800"
          >
            Guide
          </a>
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
          <img
            className=" h-[38rem] rounded-3xl my-4"
            src={tourDetail.photos[0]}
            alt=""
          />
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
            <p>
              {tourDetail.city +
                ", " +
                tourDetail.country +
                ", " +
                tourDetail.continent}
            </p>
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Travel time</b>
          </div>
          <div className="w-2/3 flex text-lg">
            <p>
              {tourDetail.initialDate} - {tourDetail.endDate}
            </p>
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
      <section id="guide" className="flex-col px-4">
        <GuideSection
          icon={iconTourDetail}
          title="Guide"
          guideName={guideDetail.forename + " " + guideDetail.surname}
          guideImage={guideDetail.image}
          guideDescription={guideDetail.biography}
        />
      </section>
    </main>
  );
};

export default Tour;
