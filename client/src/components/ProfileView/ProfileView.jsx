import React from "react";
import { Link } from "react-router-dom";

const ProfileView = ({ profile }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex justify-center">
        <b>My</b>
        <b className="text-primary">Profile</b>
      </div>
      <div className="w-full flex items-center flex-col border-2 border-seconday-text rounded-xl px-10 my-4">
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex flex-col items-center justify-center py-8">
            <img
              className="rounded-full h-36 w-36"
              src={profile.image}
              alt={profile.name}
            />
            <b className=" py-4">{profile.email}</b>
          </div>
          <div className=" w-full flex flex-row justify-around items-center py-4">
            <div className=" w-1/2 flex flex-col items-center">
              <b>Name:</b>
              <b>{profile.name}</b>
            </div>
            <div className=" w-1/2 flex flex-col items-center">
              <b>Phone Number:</b>
              <b>{profile.phoneNumber}</b>
            </div>
          </div>
          <div className=" w-full flex flex-row justify-around items-center py-4 ">
            <div className=" w-1/2 flex flex-col items-center">
              <b>Birth Date:</b>
              <b>{profile.birthDate}</b>
            </div>
            <div className=" w-1/2 flex flex-col items-center">
              <b>Nationality:</b>
              <b>{profile.nationality}</b>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-btn-hover">
              <Link to={`/profile/${profile.name}`}>
                <b>Edit Profile</b>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
