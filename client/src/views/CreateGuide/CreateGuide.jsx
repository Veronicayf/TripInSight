import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import CloudinaryUploadWidget from "../../components/UploadWidget/UploadWidget";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { useDispatch } from "react-redux";
import { postGuide } from "../../redux/guideStore/guidesActions";


const CreateGuide = () => {
    const dispatch = useDispatch();
    const [guideInfo, setGuideInfo] = useState({
        forename: "",
        surname: "",
        nationality: "",
        birthDate: "",
        biography: "",
        image:"",

    });

    const [images, setImages] = useState([]);

    const handleImageUpload = (newImages) => {
        setImages([...images, ...newImages]);
        setGuideInfo({
            ...guideInfo,
            image: newImages[0][0],  // Asignar la URL de la imagen al campo 'image'
        });

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuideInfo({
        ...guideInfo,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postGuide(guideInfo))
    };
    return (
    <div className="flex flex-row font-Poppins">
        <SideBar />
        <div className="w-full flex flex-col p-2 ">
            <h1 className="text-3xl font-bold px-4 " >Create Guide</h1>
            <form 
                onSubmit={(event) => handleSubmit(event)}
                className=" flex flex-col justify-between   border-seconday-text border-2 rounded-xl "
                >
                <div className="flex  w-full gap-5 p-6 ">
                    {/* <--- Left --->*/}
                    <div className=" flex flex-col w-1/2 border-seconday-text border-2 rounded-xl">
                        <h2 className=" text-2xl font-bold px-4">Add Images</h2>
                        <div className=" p-4 ">
                        <CloudinaryUploadWidget
                        onImageUpload={handleImageUpload}
                        multiple={true}
                        />
                        <div className=" flex justify-around items-center text-seconday-text h-16">
                            <b>Imagen</b>
                            <b>Name</b>
                            <b>Format</b>
                        </div>

                        {images.length > 0 && (
                        <div>
                            <div className="flex flex-col p-4 ">
                                { /*  image[0] = Image Url image[1] = Image Name image[2] = Image Format  */}
                                
                            {images.map((image, index) => (
                                
                                <div className=" flex flex-row justify-around items-center">
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
                    </div>
                    {/* <--- Right --->*/}
                    <div className=" flex flex-col w-1/2 p-3 border-seconday-text border-2 rounded-xl">
                        {/* -- Forename -- */}
                        <label className="flex flex-col">
                        Forename:
                        <input
                            type="text"
                            name="forename"
                            value={guideInfo.forename}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                        />
                        </label>

                        {/* -- Surname -- */}
                        <label className="flex flex-col">
                            Surname:
                            <input
                            type="text"
                            name="surname"
                            value={guideInfo.surname}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Nationality -- */}
                        <label className="flex flex-col">
                            Nationality:
                            <input
                            type="text"
                            name="nationality"
                            value={guideInfo.nationality}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Birthday -- */}
                        <label className="flex flex-col">
                        Birthdate:
                            <input
                            type="date"
                            name="birthDate"
                            value={guideInfo.birthDate}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>

                        {/* -- Biography -- */}
                        <label className="flex flex-col">
                        Biography:
                        <input
                            type="text"
                            name="biography"
                            value={guideInfo.biography}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md focus:outline-none focus:border-primary"
                        />
                        </label>
                    </div>
            </div>
            {/* Otros campos según tus necesidades */}
            <div className=" h-16 flex justify-center items-center">
                <button type="submit" className="w-56 h-12 text-white rounded-3xl bg-primary  hover:bg-btn-hover" >Create Guide</button>
            </div>
            
            </form>
        </div>
        </div>
    );
    };

export default CreateGuide