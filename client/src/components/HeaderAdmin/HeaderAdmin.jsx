import React from 'react'
import Profile from '../Auth0/ProfileAuth0'

const HeaderAdmin = () => {
  return (
    <div className='h-16 w-full px-4 flex justify-between items-center'>
        <div className='relative'>
        <span className=" text-primary text-3xl absolute top-1/2 -translate-y-1/2 left-2 material-symbols-outlined">
        search
        </span>
            <input type="text" name="" id="" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] pl-11 border  border-primary rounded-sm px-4' />
        </div>
        <div className=' h-full px-16'>
            <Profile/>
        </div>
    </div>
  )
}

export default HeaderAdmin