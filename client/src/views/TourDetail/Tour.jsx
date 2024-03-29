import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFav } from "../../redux/userStore/usersActions";
import TourInfoItem from "../../components/TourInfoItem/TourInfoItem";
import Buysection from "../../components/Buysection/Buysection";
import PhotoSection from "../../components/PhotoSection/PhotoSection";
import GuideSection from "../../components/TourDetailGuideSection/GuideSection";
import iconCalendar from "../../assets/icons/calendarIcon.png";
import iconpeople from "../../assets/icons/peopleIcon.png";
import iconplace from "../../assets/icons/placeIcon.png";
import iconTourDetail from "../../assets/icons/tourDetailicon.png";
import IconIncludes from "../../assets/icons/includesIcon.png";
import iconPhoto from "../../assets/icons/photosIcon.png";
import guidesIcon from "../../assets/icons/guidesIcon.png";
import { styles } from "../../components/styles";

const Tour = () => {
  const dispatch = useDispatch();
  const tourDetail = useSelector((state) => state.tour.detail);
  const guideDetail = useSelector((state) => state.guide.detail);
  const profile = useSelector((state) => state.user.userProfile);

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

  useEffect(() => {
    if (tourDetail && profile) {
      dispatch(getAllFav(profile.id));
    }
  }, [tourDetail, profile]);

  return (
    <main className="font-Nunito">
      {/* Image Section */}
      <section className="">
        <img
          src={tourDetail.image}
          className="w-full h-[24rem] object-cover "
          alt=""
        />
      </section>
      {/*-------------- Info Del Tour --------------*/}
      <section className="flex px-4 w-full lg:w-3/4 mt-2">
        <div className="flex items-center justify-center">
          <h3 className="text-4xl">{tourDetail.nameTour}</h3>
        </div>
      </section>
      <section className="px-4 pt-8 flex w-full lg:w-3/4">
        <div className="flex w-1/2">
          <ul>
            <TourInfoItem
              icon={<span className={styles.tourItem}>
              schedule
              </span>}
              label={"Duration: " + differenceInDays + " days."}
            />
            <TourInfoItem
              icon={<span className={styles.tourItem}>
              event
              </span>}
              label={"Initial Date: " + tourDetail.initialDate}
            />
            <TourInfoItem
              icon={<span className={styles.tourItem}>
              event
              </span>}
              label={" End Date: " + tourDetail.endDate}
            />
          </ul>
        </div>
        <div className="flex w-1/2">
          <ul>
            <TourInfoItem icon={<span className={styles.tourItem}>
            groups
            </span>} 
            label={tourDetail.capacity} />
            <TourInfoItem
              icon={<span className={styles.tourItem}>
              location_on
              </span>}
              label={tourDetail.city + ", " + tourDetail.country}
            />
          </ul>
        </div>
      </section>
      
      {/*-------------- Info Del Tour --------------*/}
      {/*-------------- Page Nav Bar--------------*/}
      <section className="px-4 flex w-full lg:w-3/4 h-14 bg-seconday-text justify-around items-center rounded-full ">
        <div className="">
          <a
            href="#description"
            onClick={(e) => scrollToSection(e, "#description")}
            className="text-white font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover"
          >
            Description
          </a>
        </div>
        <div>
          <a
            href="#photos"
            onClick={(e) => scrollToSection(e, "#photos")}
            className="text-white font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover"
          >
            Photos
          </a>
        </div>
        <div>
          <a
            href="#guide"
            onClick={(e) => scrollToSection(e, "#guide")}
            className="text-white font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary dark:hover:bg-btn-hover"
          >
            Guide
          </a>
        </div>
      </section>
      {/*-------------- Page Nav Bar--------------*/}

      {/*-------------- Tour Detail --------------*/}
      <section id="description" className="flex-col px-4 w-full lg:w-3/4">
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
      <section className="w-full lg:w-3/4 px-4 flex justify-center">
        {tourDetail && tourDetail.photos && tourDetail.photos.length > 0 && (
          <img
            className=" h-[38rem] rounded-3xl my-4"
            src={tourDetail.photos[0]}
            alt=""
          />
        )}
      </section>
      {/*-------------- Detail tour --------------*/}
      <section className=" w-full lg:w-3/4">
        <div className="bg-seconday-text h-2 my-4 rounded-full ml-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Depature place</b>
          </div>
          <div className="w-2/3 flex text-lg">
          <TourInfoItem
              icon={<span className={styles.tourItem}>
              location_on
              </span>}
              label={tourDetail.city + ", " + tourDetail.country + ", " + tourDetail.continent}
            />
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4 rounded-full ml-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Travel time</b>
          </div>
          <div className="w-2/3 flex text-lg">
          <TourInfoItem
              icon={<span className={styles.tourItem}>
              event
              </span>}
              label={"Initial Date: " + tourDetail.initialDate}
            />
            <TourInfoItem
              icon={<span className={styles.tourItem}>
              event
              </span>}
              label={"End Date: " + tourDetail.endDate}
            />
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4 rounded-full ml-4"></div>
        <div className=" w-full flex h-16">
          <div className="w-1/3 flex justify-center text-lg">
            <b>Equipment</b>
          </div>
          <div className="w-2/3 flex text-lg">
          <TourInfoItem
              icon={<span className={styles.tourItem}>
              hiking
              </span>}
              label={tourDetail.equipment}
            />
          </div>
        </div>
        <div className="bg-seconday-text h-2 my-4 rounded-full ml-4"></div>
        {/* Includes Section */ }
        <section className="w-full flex lg:flex-row mt-6">
      <div className="text-lg text-center flex justify-center lg:w-1/3 lg:text-left mb-4">
        <b>Included in the price</b>
      </div>
      <div className="flex flex-col ">
        <div className="w-full lg:w-2/3 flex items-center text-lg py-2">
          <i className="h-12 content-center">
            <img className="h-10 w-16" src={IconIncludes} alt="icon" />
          </i>
          <p className="lg:pl-4 flex-grow text-base">
            Accommodation and overnight stay in all hotels in a shared room.
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex items-center text-lg py-2">
          <i className="h-12 content-center">
            <img className="h-10 w-10" src={IconIncludes} alt="icon" />
          </i>
          <p className="lg:pl-4 flex-grow text-base">
            All meals, breakfasts, lunches, and dinners.
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex items-center text-lg py-2">
          <i className="h-12 content-center">
            <img className="h-10 w-10" src={IconIncludes} alt="icon" />
          </i>
          <p className="lg:pl-4 flex-grow text-base">
            Local bilingual guide throughout the trip.
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex items-center text-lg py-2">
          <i className="h-12 content-center">
            <img className="h-10 w-10" src={IconIncludes} alt="icon" />
          </i>
          <p className="lg:pl-4 flex-grow text-base">
            Photographic guide and all its expenses.
          </p>
        </div>
      </div>
    </section>
    <div className="bg-seconday-text h-2 my-4 rounded-full"></div>
      </section>
      {/*-------------- Photos tour --------------*/}
      <section id="photos" className="flex-col px-4 w-full lg:w-3/4">
        <PhotoSection
          icon={iconPhoto}
          title="Photos"
          images={tourDetail.photos || []}
        />
      </section>
      {/*-------------- BuySection --------------*/}
      <section className="px-4 pb-4 lg:px-0">
        <Buysection tour={tourDetail} />
      </section>
      {/*-------------- Guide Section --------------*/}
      <section id="guide" className="flex-col px-4 w-full lg:w-3/4">
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
