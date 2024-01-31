import React, { useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../redux/tourStore/toursActions';

const AdminReviews = () => {
  const reviews = useSelector((state) => state.tour.reviews);
  const allTours = useSelector((state) => state.tour.tours);
  const allUsers = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
    // También podrías llamar a las acciones para obtener todos los usuarios y todos los tours aquí
  }, []);

  console.log(reviews);
  console.log(allTours);
  console.log(allUsers);

  return (
    <div className='flex flex-row font-Poppins w-full h-full'>
      <SideBar />
      <div className='w-full flex flex-col'>
        {/* title */}
        <div className=' text-center py-4 text-4xl'>
          <b>What de people <b className='text-primary'>think</b> about <b className='text-primary'>US</b></b>
        </div>
        {/*  Column name */}
        <div className="flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl">
          <div className="w-1/6 flex justify-center items-center">
            <b className="">User</b>
          </div>
          <div className="w-2/6 h-12 flex justify-center items-center">
            <b className="">Tour</b>
          </div>
          <div className="w-3/6 flex justify-center items-center">
            <b className="">Commentary</b>
          </div>
        </div>
        <div>
          {reviews && reviews.length > 0 ? (
            reviews.map((rev, index) => {
              // Buscar el usuario y el tour correspondientes
              const user = allUsers.find((user) => user.id === rev.userId);
              const tour = allTours.find((tour) => tour.id === rev.tourId);

              return (
                <div className='flex w-full flex-row justify-between py-4' key={index}>
                  <div className="w-1/6 flex justify-center items-center">
                    {user ? user.name : 'Unknown'}
                  </div>
                  
                  <div className="w-2/6 flex justify-center items-center border-x border-black">
                    <p className='w-full text-center'>
                    {tour ? tour.nameTour : 'Unknown'}
                    </p>
                  </div>
                  <div className="w-3/6 flex justify-center items-center">
                    {rev.review}
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p>No hay reviews</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
