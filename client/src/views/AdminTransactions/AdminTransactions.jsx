import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import SalesCountCard from "../../components/SalesCountCard/SalesCountCard";
import TotalSalesCard from "../../components/TotalSalesCard/TotalSalesCard";
import UserChart from "../../components/UserChart/UserChart";
import TransactionList from "../../components/TransactionList/TransactionList";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllPurchased } from "../../redux/userStore/usersActions";

const AdminTransactions = () => {

  // // Convertimos transactionsData a un formato compatible con lightweight-charts
  // const convertedData = transactionsData.map((transaction) => {
  //   // Crear un objeto Date utilizando el timestamp de la transacción
  //   const fecha = new Date(transaction.timestamp);
  
  //   // Obtener el año, mes y día
  //   const año = fecha.getFullYear();
  //   const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // +1 porque los meses van de 0 a 11
  //   const dia = String(fecha.getDate()).padStart(2, '0');
  
  //   // Formatear la fecha como 'YYYY-MM-DD'
  //   const fechaFormateada = `${año}-${mes}-${dia}`;
  
  //   return {
  //     time: fechaFormateada,
  //     value: transaction.totalPrice,
  //   };
  // });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);


  return (
    <div className="flex flex-row font-Poppins">
      <SideBar />
      <div className="flex w-full flex-col px-4">
        <div className=" flex flex-col border-2 border-seconday-text rounded-xl">
          {/* List Transaction */}
          <div className="px-4">
            
            <div className=" w-full">
                <TransactionList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;
