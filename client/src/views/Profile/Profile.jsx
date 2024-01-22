import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { updateUser } from '../../redux/userStore/usersActions';
import { useDispatch, useSelector } from 'react-redux';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);

  const [formData, setFormData] = useState({
    nationality: '',
    birthDate: '',
    phoneNumber: '',
    idUser: profile.id,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await dispatch(updateUser(formData));

      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error updating profile:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error updating profile',
        text: 'Please try again later',
      });
    }
  };

  return (
    <div className='flex justify-center items-center flex-col font-Nunito'>
      <h1 className=' text-5xl mt-20 h-16 font-bold'>Edit Info <b className=' text-primary'>Profile</b></h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">

        <label className="block mb-4">
          <span className="text-black font-bold">Nationality:</span>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md  focus:outline-primary"
          />
        </label>

        <label className="block mb-4">
          <span className="text-black font-bold">Birth Date:</span>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md  focus:outline-primary"
          />
        </label>

        <label className="block mb-4">
          <span className="text-black font-bold">Phone Number:</span>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-btn-hover">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
