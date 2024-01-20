import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef, useState } from "react";
import DropMenu from "../DropMenu/DropMenu";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false)

  const options = [
    { label: 'Profile', to: `/favorites` },
    { label: 'Settings', to: `/profile/:id` },
  ];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center relative">
        <img className="rounded-full size-16 cursor-pointer" src={user.picture} alt={user.name} onClick={()=>setOpen(!open)} />
        <h2>{user.name}</h2>
        {/* <p>{user.email}</p> */}
        {open && <DropMenu options={options} />
        }
      </div>
    )
  );
};

export default Profile;