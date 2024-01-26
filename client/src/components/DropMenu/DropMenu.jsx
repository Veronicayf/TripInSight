import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DropMenu = ({ options, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div ref={menuRef} className='bg-white text-black p-4 w-52 shadow-lg absolute -left-14 top-24 z-50'>
      <ul>
        {options.map((option) => (
          <li className='p-2 text-lg cursor-pointer rounded hover:bg-seconday-text' key={option.label}>
            {option.to ? (
              <Link to={option.to}>{option.label}</Link>
            ) : (
              <span>{option.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
