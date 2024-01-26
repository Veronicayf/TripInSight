import React, { useEffect } from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import SalesCountCard from '../SalesCountCard/SalesCountCard'
import TotalSalesCard from '../TotalSalesCard/TotalSalesCard'
import UserChart from '../UserChart/UserChart';
import { useDispatch, useSelector } from 'react-redux';
import { getAllT } from '../../redux/tourStore/toursActions';

const initialData = [
	{ time: '2018-12-22', value: 32.51 },
	{ time: '2018-12-23', value: 31.11 },
	{ time: '2018-12-24', value: 27.02 },
	{ time: '2018-12-25', value: 27.32 },
	{ time: '2018-12-26', value: 25.17 },
	{ time: '2018-12-27', value: 28.89 },
	{ time: '2018-12-28', value: 25.46 },
	{ time: '2018-12-29', value: 23.92 },
	{ time: '2018-12-30', value: 22.68 },
	{ time: '2018-12-31', value: 22.67 },
];

const AdminDashboard = () => {
  const allTours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllT());
  }, [dispatch])

  const handleClick = (e) => {
    //refresco largando nuevamente una petición al back.
    e.preventDefault();
    dispatch(getAllT(e.target.value));
  };

 // Obtener la fecha actual
 const currentDate = new Date();

 // Crear una copia del array antes de ordenar
 const sortedTours = [...allTours].sort((a, b) => {
   const dateA = new Date(a.initialDate);
   const dateB = new Date(b.initialDate);

   const timeDiffA = Math.abs(dateA - currentDate);
   const timeDiffB = Math.abs(dateB - currentDate);

   return timeDiffA - timeDiffB;
 });

 // Obtener los 3 tours más cercanos
 const upcomingTours = sortedTours.slice(0, 3);
  

  console.log(allTours);
  return (
    <div className='w-full flex flex-col border-y-2  border-seconday-text'>
      <div className='w-full flex flex-row'>
        <DashboardCard/>
        <SalesCountCard/>
        <TotalSalesCard/>
      </div>
      <div>
      <div className="flex flex-wrap justify-around">
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 border-2 border-seconday-text rounded-md">
        <UserChart
          data={initialData}
          colors={{
            backgroundColor: '#ffffff',
            lineColor: '#3aab47',
            textColor: '#3aab47',
            areaTopColor: '#3aab47',
            areaBottomColor: 'rgba(58, 171, 71, 0.28)',
            
          }
        }
        title="Total Users"
        />
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 border-2 border-seconday-text rounded-md">
        <UserChart
          data={initialData}
          colors={{
            backgroundColor: '#ffffff',
            lineColor: '#3aab47',
            textColor: '#3aab47',
            areaTopColor: '#3aab47',
            areaBottomColor: 'rgba(58, 171, 71, 0.28)',
          }}
          title="Sales"
        />
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 border-2 border-seconday-text rounded-md">
        <UserChart
          data={initialData}
          colors={{
            backgroundColor: '#ffffff',
            lineColor: '#3aab47',
            textColor: '#3aab47',
            areaTopColor: '#3aab47',
            areaBottomColor: 'rgba(58, 171, 71, 0.28)',
          }}
          title="Total Sales"
        />
      </div>
    </div>
      </div>
      <div className=' flex flex-col justify-center items-center my-8'>
        <h2 className="text-2xl font-bold mb-2">Próximos Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingTours.map((tour) => (
            <div key={tour.id} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{tour.nameTour}</h3>
              <img className='h-14 w-14' src={tour.image}/>
              {/* Puedes agregar más detalles según sea necesario */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard