import React from 'react'
import iconmenu from '../../assets/icons/IconMenuVertical.png';

const GuideItem = ({ guideInfo }) => {
    const statusStyle = {
        backgroundColor: guideInfo.working === 'true' ? 'green' : 'red',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
    };

    return (
    <div id='Item' className='flex flex-row w-full justify-between py-4'>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{guideInfo.id}</b>
        </div>
        <div className='w-2/6 flex flex-row items-center justify-around'>
            <img src={guideInfo.image} alt={guideInfo.nameTour} className='h-12 rounded-3xl' />
            <b>{guideInfo.forename} {guideInfo.surname}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{guideInfo.birthDate}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
        <div style={statusStyle}><b>{guideInfo.working}</b></div>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <button className='h-10 w-10 bg-primary rounded-2xl'>
                <img src={iconmenu} alt="icon menu" />
            </button>
        </div>
    </div>
    );
}

export default GuideItem