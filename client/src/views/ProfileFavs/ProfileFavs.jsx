import React, { useEffect, useState } from "react";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from "../../components/Carrusel/Carousel";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import TicketSection from "../../components/TicketSection/TicketSection";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import ProfileView from "../../components/ProfileView/ProfileView";
import TourCard from "../../components/TourCard/TourCard";
import {
  getAllFav,
  getPurchesedById,
} from "../../redux/userStore/usersActions";

const ProfileFavs = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
  const favsUser = useSelector((state) => state.user.favorites);
  const tours = useSelector((state) => state.tour.tours);
  const favsTourIds = favsUser.map((fav) => fav.tourId);
  const toursFavs = tours.filter((tour) => favsTourIds.includes(tour.id));
  const ticketData = useSelector((state) => state.user.purchased);
  //console.log("compra", ticketData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (tours && profile) {
      dispatch(getAllFav(profile.id));
      dispatch(getPurchesedById(profile.id));
    }
  }, [tours, profile]);

  return (
    <div className="font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <div className="p-4">
        <ReviewSection />
        <div className="w-full flex items-center flex-col border-2 border-seconday-text rounded-xl px-4 lg:px-10">
          <div className="text-xl text-center lg:text-3xl py-2 lg:py-4">
            <b>My</b> <b className="text-primary">Things</b>
          </div>
          <div className="w-full flex flex-col lg:flex-row my-4 lg:my-8">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="flex justify-center">
                <b>My </b> <b className=" text-primary">Tickets</b>
              </div>
              <TicketSection />
              <Pagination
                itemPerPage={itemsPerPage}
                totalItems={ticketData.length}
                paginate={handlePageChange}
              />
            </div>
            <ProfileView profile={profile} />
          </div>
        </div>
        <div className="p-4">
          <div className="w-full flex items-center justify-center flex-col border-2 border-seconday-text rounded-xl px-4 lg:px-10">
            <div className="text-xl lg:text-3xl py-2 lg:py-4 flex justify-center">
              <b>My</b> <b className="text-primary"> Favorites</b>
            </div>
            <div className="flex flex-wrap gap-4 lg:gap-10 p-2 lg:p-4 w-full justify-center items-center">
              {toursFavs && toursFavs.length > 0 ? (
                toursFavs?.map((tour, index) => (
                  <TourCard key={index} tour={tour} />
                ))
              ) : (
                <div className="flex flex-col justify-center items-center p-5 gap-2 lg:gap-5">
                  <b>Loading...</b>
                  <img
                    src="https://media1.tenor.com/m/QqPVtiP0IjYAAAAC/travel-lets-go.gif"
                    alt="loading"
                    width="200"
                    className="lg:w-48"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFavs;
