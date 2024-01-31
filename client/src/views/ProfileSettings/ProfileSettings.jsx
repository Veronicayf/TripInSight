import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { updateUser } from "../../redux/userStore/usersActions";
import { useDispatch, useSelector } from "react-redux";
import CloudinaryUploadWidget from "../../components/UploadWidget/UploadWidget";
import { useFormik } from "formik";
import * as Yup from 'yup';


const ProfileEdit = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
    
  const [formData, setFormData] = useState({
    nationality: profile.nationality || "",
    birthDate: profile.birthDate || "",
    phoneNumber: profile.phoneNumber || "",
    image: "",
    idUser: profile.id,
  });

  
  const formik = useFormik({
    initialValues: {
      nationality: '',
      birthDate: '',
      phoneNumber: '',
      image :'',            
    },
    validationSchema: Yup.object({   
      nationality: Yup.string().matches(/^[^\d]*$/, 'Nationality can not have numbers'),
      phoneNumber: Yup.string('Phone number is a required input').matches(/^[0-9]+$/, 'Input a valid phone'),
      birthDate: Yup.date('Input a valid date').typeError('Input a valid date'),      
    }),
    onSubmit: (values) => {
      values.idUser = profile.id;          
    
      if(!values.nationality && !values.phoneNumber && !values.birthDate && images.length === 0) {
        alert('You have to filled unless one input');
        return;
      }
      
      values.image = images[0] ? images[0][0] : null
      
      handleSubmit(values);
    }
  })


  const [validationMessage, setValidationMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      nationality: profile.nationality || "",
      birthDate: profile.birthDate || "",
      phoneNumber: profile.phoneNumber || "",
    }));
  }, [profile]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (newImages) => {
    setImages([...images, ...newImages]);
    setFormData({
      ...formData,
      image: newImages[0][0],  // Asignar la URL de la imagen al campo 'image'
  });
  };

  const handleSubmit = async (values) => {
    // e.preventDefault();

    try {
      await dispatch(updateUser(values));

      Swal.fire({
        icon: "success",
        title: "Profile updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating profile:", error);

      Swal.fire({
        icon: "error",
        title: "Error updating profile",
        text: "Please try again later",
      });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col font-Nunito">
      <h1 className="text-5xl mt-20 h-16 font-bold">
        Edit Info <b className="text-primary">Profile</b>
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
      >
        <label className="block mb-4">
          <span className="text-black font-bold">Nationality:</span>
          {/* <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-primary"

          /> */}
          <input
            type="text"
            id="nationality"
            name="nationality"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nationality}
            className="mt-1 p-2 w-full border rounded-md focus:outline-primary"

          />
          {formik.touched.nationality && formik.errors.nationality ? <div>{formik.errors.nationality}</div> : null}
        </label>

        <label className="block mb-4">
          <span className="text-black font-bold">Birth Date:</span>
          {/* <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-primary"
          /> */}
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
            className="mt-1 p-2 w-full border rounded-md focus:outline-primary"
          />
          {formik.touched.birthDate && formik.errors.birthDate ? <div>{formik.errors.birthDate}</div> : null}
        </label>

        <label className="block mb-4">
          <span className="text-black font-bold">Phone Number:</span>
          {/* <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"

          /> */}
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="mt-1 p-2 w-full border rounded-md focus:outline-primary"

          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
        </label>

        <div className=" p-4 ">
          <CloudinaryUploadWidget
            onImageUpload={handleImageUpload}
            multiple={false}
          />
          <div className=" flex justify-around items-center text-seconday-text h-16">
            <b>Imagen</b>
            <b>Name</b>
            <b>Format</b>
          </div>

          {images.length > 0 && (
            <div>
              <h2>Images</h2>
              <div className="flex flex-col p-4 ">
                {/*  image[0] = Image Url image[1] = Image Name image[2] = Image Format  */}

                {images.map((image, index) => (
                  <div className=" flex flex-row justify-around items-center">
                    {/* {console.log(images)} */}
                    <img
                      className="h-14"
                      key={index}
                      src={image[0]}
                      alt={`Imagen ${index + 1}`}
                    />
                    <p>{image[1]}</p>
                    <p>{image[2]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {validationMessage && (
          <p className="bg-red-500 text-white rounded-xl text-center">
            {validationMessage}
          </p>
        )}
        <div className=" flex justify-center py-4">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-btn-hover"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
