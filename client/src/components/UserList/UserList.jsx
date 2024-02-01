import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import iconmenu from '../../assets/icons/IconMenuVertical.png';
import DropMenu from '../DropMenu/DropMenu';
import { updateUser } from '../../redux/userStore/usersActions';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';

const UserList = ({ UserInfo }) => {
    const dispatch = useDispatch();
    let status = ""
    const navigate = useNavigate(); 

    if(UserInfo.isBanned == true){
        status = "Banned"   }
        else if (UserInfo.admin == true){
            status = "Admin"
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
    const handleBanned = (checked) => {
      console.log('banned', checked);
      const banned = {
        isBanned: checked,
        idUser: UserInfo.id
      }
      Swal.fire({
        title: `Do you want to change the ${UserInfo.name} status?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser(banned));
          Swal.fire("Saved changes!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    };

    const handleAdmin = (checked) => {
      console.log('admin', checked);
      console.log(UserInfo.id);
      const admin = {
        admin: checked,
        idUser: UserInfo.id
      }
      Swal.fire({
        title: `Do you want to change the ${UserInfo.name} status?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser(admin));
          Swal.fire("Saved changes!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    };
  
    useEffect(() => {
      console.log('TourItem re-rendered');
    }, [UserInfo.isBanned, UserInfo.admin]);
    

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
        <Switch
            onChange={handleAdmin}
            checked={UserInfo.admin}
            onColor="#34D399"
            offColor="#EF4444"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          </div>
        </div>
        <div className='w-1/6 flex flex-row items-center justify-around'>
        <div className=" relative flex flex-row items-center gap-3">
        <Switch
            onChange={handleBanned}
            checked={UserInfo.isBanned}
            onColor="#34D399"
            offColor="#EF4444"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          {/* <button
            className="h-10 w-10 flex justify-center items-center bg-primary rounded-full hover:bg-btn-hover"
            onClick={(e) => handleEdit(e)}
          >
            <span className="material-symbols-outlined text-white">edit</span>
          </button> */}
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