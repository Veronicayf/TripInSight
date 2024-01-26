import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import SalesCountCard from '../SalesCountCard/SalesCountCard'
import TotalSalesCard from '../TotalSalesCard/TotalSalesCard'
import UserChart from '../UserChart/UserChart';

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
        title="Chart Users"
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
          title="Chart Sales"
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
      <div>proximos tours</div>
    </div>
  )
}

export default AdminDashboard