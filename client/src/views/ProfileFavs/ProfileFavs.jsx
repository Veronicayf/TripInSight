import React, { useState } from "react";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from "../../components/Carrusel/Carousel";
import { Link } from "react-router-dom";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import TicketSection from "../../components/TicketSection/TicketSection";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";

const ticketData = [
  {
    id: "125232312342",
    tourname: " Cachorritas en chaco con tomy",
    price: "3500",
    date: "22/01/2024",
  },
  {
    id: "634634125",
    tourname: " aureola boreal en chaco con tomy",
    price: "6500",
    date: "16/01/2024",
  },
  {
    id: "163482891",
    tourname: " Visitando el mar de bolivia en chaco con tomy",
    price: "512",
    date: "30/02/2023",
  },
  {
    id: "1252352342",
    tourname: "Snowboarding en dunas de tierra en chaco, con tomy",
    price: "1200",
    date: "13/01/2024",
  },
  {
    id: "1252352312342",
    tourname: "Los de la muni agarrando la pala en chaco, con tomy",
    price: "999",
    date: "25/05/1810",
  },
];

const ProfileFavs = () => {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
  console.log(profile);
  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className=" font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <div>
        <div>
          <ReviewSection />
          <div className="w-full flex items-center flex-col border-2 border-seconday-text rounded-xl px-10 my-4">
            <div className="text-3xl my-4">
              <b>My</b> <b className="text-primary">Things</b>
            </div>
            <div className="w-full flex flex-row my-8">
              <div className="w-full flex flex-row">
                <div className="w-1/2">
                  <div className="flex justify-center"><b>My </b> <b className=" text-primary">Tickets</b></div>
                  <TicketSection ticketData={ticketData} />
                  <Pagination
                  itemPerPage={itemsPerPage}
                  totalItems={ticketData.length}
                  paginate={handlePageChange}
                  />
                </div>
                
                <div className="w-1/2">
                  <div className="flex justify-center"><b>My</b><b className="text-primary">Profile</b></div>
                  <div className="w-full flex items-center flex-col border-2 border-seconday-text rounded-xl px-10 my-4">
                    <div className="w-full flex flex-col justify-center" >
                      <div className="w-full flex flex-col items-center justify-center py-8">
                        <img className="rounded-full h-36 w-36" src={profile.image} alt={profile.name} />
                        <b className=" py-4">{profile.email}</b>
                      </div>
                      <div className=" w-full flex flex-row justify-around items-center py-4">
                        <div className=" w-1/2 flex flex-col items-center">
                          <b>Name:</b>
                          <b>{profile.name}</b>
                        </div>
                        <div className=" w-1/2 flex flex-col items-center">
                            <b>Phone Number:</b>
                            <b>{profile.phoneNumber}</b>
                        </div>
                      </div>
                      <div className=" w-full flex flex-row justify-around items-center py-4 ">
                        <div className=" w-1/2 flex flex-col items-center">
                          <b>Birth Date:</b>
                          <b>{profile.birthDate}</b>
                        </div>
                        <div className=" w-1/2 flex flex-col items-center">
                            <b>Nationality:</b>
                            <b>{profile.nationality}</b>
                        </div>
                      </div>
                      <div className="flex justify-center py-2">
                          <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-btn-hover">
                            <Link to={`/profilefavs/${profile.name}`}><b>Edit Profile</b></Link>
                          </button>
                      </div>
                      
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFavs;
