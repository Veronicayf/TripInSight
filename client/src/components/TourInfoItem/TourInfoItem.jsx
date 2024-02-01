import React from 'react'

const TourInfoItem = ({ icon, label }) => (
    <li className='w-full flex items-center justify-around'>
        <i className='content-center'>{icon}</i>
        <b className='px-2 flex-grow text-base'>{label}</b>
    </li>
)


export default TourInfoItem