import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef, useState } from "react";
import DropMenu from "../DropMenu/DropMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFav, getPurchesedById, getUserId } from "../../redux/userStore/usersActions";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
  //console.log('aca', profile.admin);
  const menuRef = useRef(null);

  //Para ver los favs del user.
  useEffect(() => {
    if(profile.id){
    dispatch(getAllFav(profile.id))
    dispatch(getPurchesedById(profile.id))
  }
  }, [])

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

  const options = profile.admin && profile.admin === true
  ? [
      { label: "Profile", to: `/profilefavs/${profile.name}` },
      { label: "Settings", to: `/profile/${profile.name}` },
      { label: "Admin", to: `/admin/` }
    ]
  : [
      { label: "Profile", to: `/profilefavs/${profile.name}` },
      { label: "Settings", to: `/profile/${profile.name}` }
    ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center  relative">
        <img
          className=" flex rounded-full size-16 cursor-pointer"
          src={user.picture}
          alt={user.name}
          onClick={toggleMenu}
        />
        <h2 className="hidden lg:flex">{user.name}</h2>
        {/* <p>{user.email}</p> */}
        {open && <DropMenu options={options} onClose={() => setOpen(false)} />}
      </div>
    )
  );
};

export default Profile;
