import React, { useState } from 'react'
import { updateUser } from '../../redux/userStore/usersActions';
import { useDispatch } from 'react-redux';

const Profile = ({user}) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    nationality: '',
    birthDate: '',
    phoneNumber: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleTogglePassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // datos para enviar la servidor
    console.log('Datos actualizados:', formData, user.id);
    dispatch(updateUser(formData, user.id))
  };

  return (
    <div className='flex justify-center items-center flex-col font-Nunito'>
      <h1 className=' text-5xl mt-20 h-16 font-bold'>Edit Info <b className=' text-primary'>Profile</b></h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">

    {/* <label className="block mb-4">
        <span className="text-black font-bold">Change Password:</span>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-primary"
        />
      </label>

      <label className="block mb-4">
      <span className="text-black font-bold">Confirm Password:</span>
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md  focus:outline-primary"
        />
      </label>

      <div className="mb-4">
        <input
          type="checkbox"
          onChange={handleTogglePassword}
          checked={showPassword}
          className="mx-3 my-1  focus:outline-primary"
        />
        <label className="text-gray-700 mr-2">Mostrar Contraseña:</label>
      </div> */}


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

      {/* <label className="block mb-4">
      <span className="text-black font-bold">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md  focus:outline-primary"
        />
      </label> */}

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

export default Profile;