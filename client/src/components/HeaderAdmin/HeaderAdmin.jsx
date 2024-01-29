import React from 'react'
import Profile from '../Auth0/ProfileAuth0'

const HeaderAdmin = () => {
  return (
    <div className='h-28 w-full px-4 flex justify-end items-center'>

        <div className=' h-full px-16 flex items-center'>
            <Profile/>
        </div>
    </div>
  )
}

export default HeaderAdmin