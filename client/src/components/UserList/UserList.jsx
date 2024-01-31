import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import iconmenu from '../../assets/icons/IconMenuVertical.png';
import DropMenu from '../DropMenu/DropMenu';

const UserList = ({ UserInfo }) => {
    let status = ""
    const navigate = useNavigate(); 

    if(UserInfo.isBanned == true){
        status = Banned   }
        else if (UserInfo.admin == true){
            status = Admin
        }else(
            status = "User"
        )

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

    const handleEdit = (e) => {
      e.preventDefault();
      //navigate(`/admin/users/edit/${UserInfo.name}`);
    };
  
    // const toggleMenu = () => {
    //   setOpen(!open);
    // };
    // const options = [
    //   { label: 'ViewUser', to: `/profilefavs/` },
    // ];
    

    return (
    <div id='Item' className='flex flex-row w-full justify-between py-4'>

        <div className='w-2/6 flex flex-row items-center justify-around'>
            <img src={UserInfo.image} alt={UserInfo.name} className='h-12 rounded-3xl' />
            <b>{UserInfo.name}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{UserInfo.email}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
            <b>{status}</b>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
        <div className=" relative flex flex-row items-center gap-3">
          <button
            className="h-10 w-10 flex justify-center items-center bg-primary rounded-full hover:bg-btn-hover"
            onClick={(e) => handleEdit(e)}
          >
            <span className="material-symbols-outlined text-white">edit</span>
          </button>
          {/* <button
            className="h-10 w-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-btn-hover"
            onClick={(e) => handleDelete(e)}
          >
            <span className="material-symbols-outlined text-white">delete</span>
          </button> */}
          </div>
        </div>
    </div>
    );
}

export default UserList