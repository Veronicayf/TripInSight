import React from 'react'
import iconmenu from '../../assets/icons/IconMenuVertical.png';

const TourItem = ({ tourInfo }) => {
    return (
    <div id='Item' className='flex flex-row w-full justify-between py-4'>
        <div className='w-2/6 flex flex-row items-center justify-around'>
            <img src={tourInfo.image} alt={tourInfo.nameTour} className='h-14 rounded-3xl' />
            <b>{tourInfo.nameTour}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{tourInfo.initialDate}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>6/{tourInfo.capacity}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>${tourInfo.price}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{tourInfo.status}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <button className='h-10 w-10 bg-primary rounded-2xl'>
                <img src={iconmenu} alt="icon menu" />
            </button>
        </div>
    </div>
    );
}

export default TourItem