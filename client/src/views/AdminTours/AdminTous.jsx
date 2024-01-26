import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";

import TourItem from "../../components/TourItem/TourItem";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllT } from "../../redux/tourStore/toursActions";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";

const AdminTous = () => {
  const allTours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllT());
  }, [dispatch]);
console.log(allTours);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = allTours.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex w-full flex-row">
      <SideBar />
      <div className=" flex w-full flex-col p-4">
        <div>
          <HeaderAdmin />
        </div>
        <div className=" w-full flex flex-col">
          <div className=" flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl">
            <div className="w-2/6 h-12 flex justify-center items-center">
              <b className="">Tour name</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Initial date</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Capacity</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Precio</b>
            </div>

            <div className="w-1/6 flex justify-center items-center">
              <b className="">Status</b>
            </div>

            <div className="w-1/6 flex justify-center items-center">
              <b className=""> Actions</b>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between py-4">
            {allTours && allTours.length > 0 ? (
              allTours.map((tour, index) => (
                <TourItem key={index} tourInfo={tour} />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center p-5 gap-5">
                <b>Loading...</b>
                <img
                  src="https://media1.tenor.com/m/QqPVtiP0IjYAAAAC/travel-lets-go.gif"
                  alt="loading"
                  width="250"
                />
              </div>
            )}
          </div>
          <Pagination
            itemPerPage={itemPerPage}
            totalItems={allTours.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTous;
