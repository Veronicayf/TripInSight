import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import DropMenu from "../DropMenu/DropMenu";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false)

  console.log(user)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center relative">
        <img className="rounded-full size-16 cursor-pointer" src={user.picture} alt={user.name} onClick={()=>setOpen(!open)} />
        <h2>{user.name}</h2>
        {/* <p>{user.email}</p> */}
        {open && <DropMenu/>}
        
      </div>
    )
  );
};

export default Profile;