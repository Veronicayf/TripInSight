import React from 'react'
import SideBar from '../../components/SideBar/SideBar'

const AdminReviews = () => {
  return (
    <div className='flex flex-row font-Poppins w-full h-full'>
        <SideBar/>
        <div className='w-full flex flex-col'>
          {/* title */}
          <div className=' text-center py-4 text-4xl'>
            <b>What de people <b className='text-primary'>think</b> about <b className='text-primary'>US</b></b>
          </div>
          {/*  Column name */}
          <div className=" flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl">
            <div className="w-1/6 flex justify-center items-center">
              <b className="">User</b>
            </div>
            <div className="w-1/6 h-12 flex justify-center items-center">
              <b className="">Tour</b>
            </div>
            <div className="w-4/6 flex justify-center items-center">
              <b className="">Commentary</b>
            </div>
          </div>
          <div>
            lista de comentarios
          </div>
        </div>
    </div>
  )
}

export default AdminReviews