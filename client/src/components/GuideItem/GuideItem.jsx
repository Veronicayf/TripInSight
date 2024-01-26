import React, { useState } from 'react';
import iconmenu from '../../assets/icons/IconMenuVertical.png';

const GuideItem = ({ guideInfo }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const statusStyle = {
        backgroundColor: guideInfo.working === 'true' ? 'green' : 'red',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (
    <div id='Item' className='flex flex-row w-full justify-between py-4'>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <p className='text-[12px]'>{guideInfo.id}</p>
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
        <div className="relative">
          <button className='h-10 w-10 bg-primary rounded-2xl hover:bg-btn-hover' onClick={toggleMenu}>
            <img src={iconmenu} alt="icon menu" />
          </button>
          {isMenuOpen && (
            <div className="absolute bg-white border border-gray-300 p-2 mt-2 rounded right-0 z-10">
              {/* Aquí puedes agregar elementos de menú y acciones */}
              <button onClick={() => console.log("Realizar acción 1")}>Acción 1</button>
              <button onClick={() => console.log("Realizar acción 2")}>Acción 2</button>
            </div>
          )}
          </div>
        </div>
    </div>
    );
}

export default GuideItem