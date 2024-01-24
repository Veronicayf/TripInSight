import React, { useState } from "react";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from "../../components/Carrusel/Carousel";
import { Link } from "react-router-dom";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import TicketSection from "../../components/TicketSection/TicketSection";
import Pagination from "../../components/Pagination/Pagination";

const ticketData = [
  {
    id: "1252352312342",
    tourname: " Cachorritas en chaco con tomy",
    price: "3500",
    date: "22/01/2024",
  },
  {
    id: "63463412512",
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
    id: "1252352312342",
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

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
