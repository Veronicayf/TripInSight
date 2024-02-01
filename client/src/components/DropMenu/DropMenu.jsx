import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllFav } from '../../redux/userStore/usersActions';

const DropMenu = ({ options, onClose }) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);

  useEffect(() => {
    dispatch(getAllFav(profile.id));

    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose, dispatch, profile.id]);

  return (
    <div className='bg-zinc-300 text-black p-4 w-full md:w-52 rounded-2xl shadow-lg absolute md:-left-28 top-[4.5rem] z-50'>
      <ul>
        {options.map((option) => (
          <li
            className='p-2 text-lg cursor-pointer rounded hover:bg-seconday-text'
            key={option.label}
          >
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
