import React, { useEffect, useRef, useState } from 'react';
import iconmenu from '../../assets/icons/IconMenuVertical.png';
import DropMenu from '../DropMenu/DropMenu';

const TourItem = ({ tourInfo }) => {

    const statusStyle = {
        backgroundColor: tourInfo.status === '1' ? 'green' : 'red',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
    };
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
  
    const toggleMenu = () => {
      setOpen(!open);
    };
    const options = [
      { label: 'Edit', to: `/profilefavs/` },
      { label: 'Disable', to: `/profile/` },
    ];
    

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
            <b>{tourInfo.places}/{tourInfo.capacity}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>${tourInfo.price}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
        <div style={statusStyle}><b>{tourInfo.status}</b></div>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-center'>
            <div className=" relative flex flex-col items-center">
                <button className='h-10 w-10 bg-primary rounded-2xl hover:bg-btn-hover' onClick={toggleMenu}>
                {open && <DropMenu options={options} onClose={() => setOpen(false)} />}
                    <img src={iconmenu} alt="icon menu" />
                </button>
            </div>
        </div>
    </div>
    );
}

export default TourItem