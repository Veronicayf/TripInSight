import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import SalesCountCard from '../SalesCountCard/SalesCountCard'
import TotalSalesCard from '../TotalSalesCard/TotalSalesCard'

const AdminDashboard = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex flex-row'>
        <DashboardCard/>
        <SalesCountCard/>
        <TotalSalesCard/>
      </div>
      <div>chars</div>
      <div>proximos tours</div>
    </div>
  )
}

export default AdminDashboard