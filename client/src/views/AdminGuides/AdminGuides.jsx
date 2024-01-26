import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";
import GuideItem from "../../components/GuideItem/GuideItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllG } from "../../redux/guideStore/guidesActions";

const AdminGuides = () => {
  const allGuides = useSelector((state) => state.guide.guides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllG());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = allGuides.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex w-full flex-row">
      <SideBar />
      <div className=" flex w-full flex-col p-4">
        <div>filter bar & Button add product</div>
        <div className=" w-full flex flex-col">
          <div className=" flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl">
            <div className="w-1/6 flex justify-center items-center">
              <b className="">ID</b>
            </div>
            <div className="w-2/6 h-12 flex justify-center items-center">
              <b className="">Guide name</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Birthdate</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Working</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Actions</b>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between py-4">
            {allGuides && allGuides.length > 0 ? (
              allGuides.map((guide, index) => (
                <GuideItem key={index} guideInfo={guide} />
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
            totalItems={allGuides.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminGuides;
