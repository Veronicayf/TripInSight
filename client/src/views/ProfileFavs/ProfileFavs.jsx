import React from 'react'
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from '../../components/Carrusel/Carousel';
import { Link } from 'react-router-dom';
import ReviewSection from '../../components/ReviewSection/ReviewSection';

const ticketData = [
    {
        id:"1252352312342",
        tourname:" Cachorritas en chaco con tomy",
        price:"3500",
        date:"22/01/2024"
    },
    {
        id:"63463412512",
        tourname:" aureola boreal en chaco con tomy",
        price:"6500",
        date:"16/01/2024"
    },
    {
        id:"163482891",
        tourname:" Visitando el mar de bolivia en chaco con tomy",
        price:"512",
        date:"30/02/2023"
    },
    {
        id:"1252352312342",
        tourname:"Snowboarding en dunas de tierra en chaco, con tomy",
        price:"1200",
        date:"13/01/2024"
    },
    {
        id:"1252352312342",
        tourname:"Los de la muni agarrando la pala en chaco, con tomy",
        price:"999",
        date:"25/05/1810"
    }
]

const ProfileFavs = () => {
    return (
      <div className=' font-Nunito'>
        <Carousel
          images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
        />
        <div>
          <div>
            <ReviewSection />
            <div className='w-full flex items-center flex-col border-2 border-seconday-text rounded-xl mx-10'>
              <div className='text-3xl my-4'>
                <b>My</b> <b className='text-primary'>Buys</b>
              </div>
              <div className='w-full flex flex-row'>
                <div className='w-1/2 flex flex-col border-2 border-seconday-text rounded-xl mx-4'>
                  <div className='w-full flex items-center justify-around text-seconday-text'>
                    <div className='w-1/3'>
                      <b>Tour name</b>
                    </div>
                    <div className='w-1/4 text-center' >
                      <b>Date</b>
                    </div>
                    <div className='w-1/4 text-center' >
                      <b>Price</b>
                    </div>
                    <div className='w-1/4 text-center' >
                      <b>Nro Ticket</b>
                    </div>
                  </div>
                  {ticketData.length > 0 ? (
                    ticketData.map((ticket) => (
                      <div key={ticket.id} className='w-full h-16 flex items-center justify-around  border-t-2 '>
                        <div className='w-1/3 text-center'>{ticket.tourname}</div>
                        <div className='w-1/4 text-center' >{ticket.date}</div>
                        <div className='w-1/4 text-center' >${ticket.price}</div>
                        <div className='w-1/4 text-center' >{ticket.id}</div>
                      </div>
                    ))
                  ) : (
                    <div className='text-center mt-4'>
                      No ticket data available.
                    </div>
                  )}
                </div>
                <div className='w-1/2'>favorites</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileFavs;
