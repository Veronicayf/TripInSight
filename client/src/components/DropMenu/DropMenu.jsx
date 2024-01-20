import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const DropMenu = ({ options }) => {

  


  
  return (
    <div className='bg-white text-black p-4 w-52 shadow-lg absolute -left-14 top-24'>
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
}

export default DropMenu