import React from 'react'

const TourInfoItem = ({ icon, label }) => (
    <li className='w-full h-12 flex items-center'>
        <i className='h-12 content-center'><img className='h-10 w-10' src={icon} alt="icon" /></i>
        <p className='px-4 flex-grow text-base'>{label}</p>
    </li>
)


export default TourInfoItem