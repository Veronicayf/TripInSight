import React from 'react'

const TourInfoItem = ({ icon, label }) => (
    <li className='w-full flex items-center justify-around'>
        <i className='h-12 content-center'><img className='h-10 w-10' src={icon} alt="icon" /></i>
        <b className='px-4 flex-grow text-base'>{label}</b>
    </li>
)


export default TourInfoItem