    import React, { useState } from "react";
    import SideBar from "../../components/SideBar/SideBar";
    import CloudinaryUploadWidget from "../../components/UploadWidget/UploadWidget";

    const CreateTour = () => {
    const [tourInfo, setTourInfo] = useState({
        title: "",
        description: "",
        location: "",
        continent: "",
        country: "",
        city: "",
        type: "",
        capacity: 0,
        season: "",
        price: 0,
        initialDate: "",
        endDate: "",
    });

    const [images, setImages] = useState([]);

    const handleImageUpload = (newImages) => {
        setImages([...images, ...newImages]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTourInfo({
        ...tourInfo,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Aca va ala info para enviar al servidor

        console.log("Información del Tour:", tourInfo);
        console.log("Imágenes del Tour:", images);

    };

    return (
    <div className="flex flex-row font-Mulish">
        <SideBar />
        <div className="w-full flex flex-col p-2 ">
            <h1>Create Tour</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col justify-between   border-seconday-text border-2 rounded-xl ">
                {/* <--- Left --->*/}
                <div className="flex  w-full gap-5 p-6 ">
                    <div className=" flex flex-col w-1/2 border-seconday-text border-2 rounded-xl">
                        <h2> Add Images</h2>
                        <CloudinaryUploadWidget
                        onImageUpload={handleImageUpload}
                        multiple={true}
                        />

                        {images.length > 0 && (
                        <div>
                            <h2>Vista Previa de Imágenes</h2>
                            <div className="image-preview-container">
                            {images.map((imageUrl, index) => (
                                <img
                                className="h-52"
                                key={index}
                                src={imageUrl}
                                alt={`Imagen ${index + 1}`}
                                />
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                    {/* <--- Right --->*/}
                    <div className=" flex flex-col w-1/2 px-3 border-seconday-text border-2 rounded-xl">
                        {/* -- NAME -- */}
                        <label className="flex flex-col">
                        Tour Name:
                        <input
                            type="text"
                            name="title"
                            value={tourInfo.title}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                        />
                        </label>
                        {/* -- INITIAL DATE -- */}
                        <label className="flex flex-col">
                        Initial Date:
                        <input
                            type="date"
                            name="initialDate"
                            value={tourInfo.initialDate}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                        />
                        </label>
                        {/* -- END DATE -- */}
                        <label className="flex flex-col">
                        End Date:
                        <input
                            type="date"
                            name="endDate"
                            value={tourInfo.endDate}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                        />
                        </label>
                        {/* -- CONTINENT -- */}
                        <label className="flex flex-col">
                            Continent:
                            <select
                            name="continent"
                            value={tourInfo.continent}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            >
                            <option value="">Select a continent</option>
                            <option value="africa">África</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="northAmerica">North America</option>
                            <option value="southAmerica">South America</option>
                            <option value="oceania">Oceanía</option>
                            </select>
                        </label>

                        {/* -- Country -- */}
                        <label className="flex flex-col">
                            Country:
                            <input
                            type="text"
                            name="country"
                            value={tourInfo.country}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- City -- */}
                        <label className="flex flex-col">
                            City:
                            <input
                            type="text"
                            name="city"
                            value={tourInfo.city}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Type -- */}
                        <label className="flex flex-col">
                            Type:
                            <input
                            type="text"
                            name="type"
                            value={tourInfo.type}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Capacity -- */}
                        <label className="flex flex-col">
                            Capacity:
                            <input
                            type="number"
                            name="capacity"
                            value={tourInfo.capacity}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Season -- */}
                        <label className="flex flex-col">
                            Season:
                            <input
                            type="text"
                            name="season"
                            value={tourInfo.season}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Price -- */}
                        <label className="flex flex-col">
                            Price:
                            <input
                            type="number"
                            name="price"
                            value={tourInfo.price}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                            />
                        </label>
                        {/* -- Description -- */}
                        <label className="flex flex-col">
                        Description:
                        <textarea
                            name="description"
                            value={tourInfo.description}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md  focus:outline-none focus:border-primary"
                        />
                        </label>
                    </div>
            </div>
            {/* Otros campos según tus necesidades */}
            <button type="submit">Guardar Tour</button>
            </form>
        </div>
        </div>
    );
    };

    export default CreateTour;
