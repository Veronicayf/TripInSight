import { useDispatch, useSelector } from "react-redux";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SideBar from "../../components/SideBar/SideBar";
import UserChart from "../../components/UserChart/UserChart";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/userStore/usersSlice";
import UserList from "../../components/UserList/Userlist";
import { getUsers } from "../../redux/userStore/usersActions";

const AdminUsers = () => {

    const allUser = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers(1,10));
      }, [dispatch]);

  const transactionsData = [
    {
      id: "45ad4120-bb2f-4d43-a9fa-b745356be83b0",
      visit: 9,
      timestamp: new Date("2024-02-01T10:15:00").getTime(),
    },
    {
      id: 2,
      visit: 12,
      timestamp: new Date("2024-02-02T15:30:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535b7e813b0",
      visit: 90,
      timestamp: new Date("2024-02-03T09:45:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535be823b0",
      visit: 3,
      timestamp: new Date("2024-02-04T14:20:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535be383b0",
      visit: 20,
      timestamp: new Date("2024-02-05T14:20:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535b4e83b0",
      visit: 15,
      timestamp: new Date("2024-02-06T14:20:00").getTime(),
    },
    {
      id: "45ad4120-bb2f-4d43-a9fa-b74535be583b0",
      visit: 10,
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
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // +1 porque los meses van de 0 a 11
    const dia = String(fecha.getDate()).padStart(2, "0");

    // Formatear la fecha como 'YYYY-MM-DD'
    const fechaFormateada = `${año}-${mes}-${dia}`;

    return {
      time: fechaFormateada,
      value: transaction.visit,
    };
  });
  return (
    <div className="flex flex-row font-Poppins w-full h-full">
      <SideBar />
      <div className="flex w-full flex-col px-4">
        <div>
          <div className="flex justify-center">
            <DashboardCard />
          </div>
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
                title="Views"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl">
            <div className="w-1/6 flex justify-center items-center">
              <b className="">User name</b>
            </div>
            <div className="w-2/6 h-12 flex justify-center items-center">
              <b className="">Email</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Status</b>
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <b className="">Actions</b>
            </div>
          </div>
          <div>
          {allUser && allUser.length > 0 ? (
              allUser.map((user, index) => (
                <UserList key={index} UserInfo={user} />
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
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
