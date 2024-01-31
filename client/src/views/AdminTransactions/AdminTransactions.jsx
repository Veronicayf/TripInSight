import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import SalesCountCard from "../../components/SalesCountCard/SalesCountCard";
import TotalSalesCard from "../../components/TotalSalesCard/TotalSalesCard";
import UserChart from "../../components/UserChart/UserChart";
import TransactionList from "../../components/TransactionList/TransactionList";
import Pagination from "../../components/Pagination/Pagination";

const AdminTransactions = () => {
  const transactionsData = [
    {
      id: "45ad4120-bb2f-4d43-a9fa-b745356be83b0",
      status: true,
      detail: "Compra de productos electrónicos",
      totalPrice: 899.99,
      buyer: "Usuario1",
      timestamp: new Date("2024-02-01T10:15:00").getTime(),
    },
    {
      id: 2,
      status: true,
      detail: "Compra de ropa y accesorios",
      totalPrice: 120.5,
      buyer: "Usuario2",
      timestamp: new Date("2024-02-02T15:30:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535b7e813b0",
      status: false,
      detail: "Transacción fallida - Tarjeta rechazada",
      totalPrice: 0.0,
      buyer: "Usuario3",
      timestamp: new Date("2024-02-03T09:45:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535be823b0",
      status: true,
      detail: "Compra de libros",
      totalPrice: 45.0,
      buyer: "Usuario4",
      timestamp: new Date("2024-02-04T14:20:00").getTime(),
    },
    {
        id: "45ad4120-bb2f-4d43-a9fa-b74535be383b0",
        status: true,
        detail: "Compra de libros",
        totalPrice: 45.0,
        buyer: "Usuario4",
        timestamp: new Date("2024-02-05T14:20:00").getTime(),
      },
      {
        id: "45ad4120-bb2f-4d43-a9fa-b74535b4e83b0",
        status: true,
        detail: "Compra de libros",
        totalPrice: 45.0,
        buyer: "Usuario4",
        timestamp: new Date("2024-02-06T14:20:00").getTime(),
      },
      {
        id: "45ad4120-bb2f-4d43-a9fa-b74535be583b0",
        status: true,
        detail: "Compra de libros",
        totalPrice: 45.0,
        buyer: "Usuario4",
        timestamp: new Date("2024-02-07T14:20:00").getTime(),
      },
    // Agrega más transacciones según sea necesario
  ];
  // Convertimos transactionsData a un formato compatible con lightweight-charts
  const convertedData = transactionsData.map((transaction) => {
    // Crear un objeto Date utilizando el timestamp de la transacción
    const fecha = new Date(transaction.timestamp);
  
    // Obtener el año, mes y día
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // +1 porque los meses van de 0 a 11
    const dia = String(fecha.getDate()).padStart(2, '0');
  
    // Formatear la fecha como 'YYYY-MM-DD'
    const fechaFormateada = `${año}-${mes}-${dia}`;
  
    return {
      time: fechaFormateada,
      value: transaction.totalPrice,
    };
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = transactionsData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="flex flex-row font-Poppins">
      <SideBar />
      <div className="flex w-full flex-col px-4">
        <HeaderAdmin />
        <div className=" flex flex-col border-2 border-seconday-text rounded-xl">
          <div className="flex flex-row justify-around">
            <SalesCountCard />
            <TotalSalesCard />
          </div>
          {/* <--- Chart ---> */}
          <div className=" w-full flex justify-center">
            <div className="w-full text-center md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 border-2 border-seconday-text rounded-md">
              <UserChart
                data={convertedData}
                colors={{
                  backgroundColor: "#ffffff",
                  lineColor: "#3aab47",
                  textColor: "#3aab47",
                  areaTopColor: "#3aab47",
                  areaBottomColor: "rgba(58, 171, 71, 0.28)",
                }}
                title="Chart Sales"
              />
            </div>
          </div>
          {/* List Transaction */}
          <div className="px-4">
            
            <div className=" w-full">
                <TransactionList/>
            </div>
            <Pagination
            itemPerPage={itemPerPage}
            totalItems={transactionsData.length}
            paginate={paginate}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;
