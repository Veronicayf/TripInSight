import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllPurchased } from "../../redux/userStore/usersActions";

const TransactionList = ( ) => {
  const dispatch = useDispatch();
  const allPurchased = useSelector((state) => state.user.purchasedAll)

  useEffect(() => {
    dispatch(getAllPurchased());
  }, [allPurchased])

  
  return (
    <div className=" flex flex-col items-center w-full px-4 border-2 border-seconday-text rounded-xl">
        <h2 className=" text-2xl py-8">Transaction List</h2>
        <div id="row" className="flex flex-row w-full border-2 border-seconday-text rounded-lg">
            <div className=" w-2/6 flex justify-center"><b>ID</b></div>
            <div className=" w-1/6 flex justify-center"><b>Status</b></div>
            <div className=" w-2/6 flex justify-center"><b>Detail</b></div>
            <div className=" w-1/6 flex justify-center"><b>Price</b></div>
            <div className=" w-1/6 flex justify-center"><b>User</b></div>
            <div className=" w-1/6 flex justify-center"><b>Date</b></div>
        </div>
        <div className="flex flex-col w-full">
        {allPurchased.map((transaction) => (
            <div key={transaction.id} className="flex flex-row w-full my-4">
            <div className=" w-2/6 flex justify-center items-center"><p>{transaction.id}</p></div>
            <div className=" w-1/6 flex justify-center items-center"><p>{transaction.status ? "Complete" : "Fail"}</p></div>
            <div className=" w-2/6 flex justify-center items-center text-center"><p>{transaction.tourName}</p></div>
            <div className=" w-1/6 flex justify-center items-center"><p>${transaction.totalPrice}</p></div>
            <div className=" w-1/6 flex justify-center items-center"><p>{transaction.userName}</p></div>
            <div className=" w-1/6 flex justify-center items-center"><p>{new Date(transaction.createdAt).toLocaleDateString()}</p></div>
        </div>
        ))}
        </div>

    </div>
  );
};

export default TransactionList;
