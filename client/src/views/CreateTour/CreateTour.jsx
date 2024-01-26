import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import { postTourAction } from "../../redux/tourStore/toursActions";
import CloudinaryBannerUploadWidget from "../../components/CloudinaryBannerUpload/CloudinaryBannerUpload";
import CloudinaryPhotosUploadWidget from "../../components/CloudinaryPhotosUpload/CloudinaryPhotosUpload";

const CreateTour = () => {
  const dispatch = useDispatch();

  const [tourInfo, setTourInfo] = useState({
    nameTour: "",
    description: "",
    continent: "",
    country: "",
    city: "",
    type: "",
    capacity: 0,
    place: 0,
    season: "",
    price: 0,
    initialDate: "",
    endDate: "",
    image: "",
    photos: [],
    status: true,
    equipment: "",
    guideId: "",
    places: null,
    status: true,
    tags: "",
  });

  const [images, setImages] = useState([]);

  const [bannerImage, setBannerImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleBannerImageUpload = (uploadedImages) => {
    // Solo permitimos una imagen de banner, así que tomamos la primera del array
    setBannerImage(uploadedImages[0]);
  };
  const handleAdditionalImagesUpload = (uploadedImages) => {
    // Concatenar las nuevas imágenes con las existentes
    setAdditionalImages([...additionalImages, ...uploadedImages]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourInfo({
      ...tourInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postTourAction(tourInfo));
  };
  console.log("objeto", tourInfo);
  return (
    <div className="flex flex-row font-Mulish">
      <SideBar />
      <div className="w-full flex flex-col p-2 ">
        <h1 className="text-3xl font-bold px-4 ">Create Tour</h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className=" flex flex-col justify-between   border-seconday-text border-2 rounded-xl "
        >
          {/* <--- Left --->*/}
          <div className="flex  w-full gap-5 p-6 ">
            <div className="flex flex-col w-1/2 border-seconday-text border-2 rounded-xl px-4">
              <h2 className="text-2xl font-bold px-4">Add Images</h2>

              {/* Cloudinary Banner Upload */}
              <div className="flex flex-col   border-seconday-text border-2 rounded-xl">
                <h2 className="text-2xl font-bold px-4">Add Banner Image</h2>
                <div className="p-4">
                  <CloudinaryBannerUploadWidget
                    onImageUpload={handleBannerImageUpload}
                  />
                  <div className="flex justify-around items-center text-seconday-text h-16">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Format</b>
                  </div>

                  {bannerImage && (
                    <div>
                      <h2>Image</h2>
                      <div className="flex flex-col p-4">
                        {/*  bannerImage[0] = Image Url bannerImage[1] = Image Name bannerImage[2] = Image Format  */}
                        <div className="flex flex-row justify-around items-center">
                          <img
                            className="h-14"
                            src={bannerImage[0]}
                            alt={`Banner Image`}
                          />
                          <p>{bannerImage[1]}</p>
                          <p>{bannerImage[2]}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Cloudinary Photos Upload */}

              <div className=" flex flex-col w-full border-seconday-text border-2 rounded-xl mt-8">
                <h2 className=" text-2xl font-bold px-4">
                  Add Additional Photos
                </h2>
                <div className=" p-4 ">
                  <CloudinaryPhotosUploadWidget
                    onImageUpload={handleAdditionalImagesUpload}
                    multiple={true}
                  />
                  <div className=" flex justify-around items-center text-seconday-text h-16">
                    <b>Imagen</b>
                    <b>Name</b>
                    <b>Format</b>
                  </div>

                  {additionalImages.length > 0 && (
                    <div>
                      <h2>Additional Photos</h2>
                      <div className="flex flex-col p-4 ">
                        {/*  image[0] = Image Url image[1] = Image Name image[2] = Image Format  */}
                        {additionalImages.map((image, index) => (
                          <div
                            className=" flex flex-row justify-around items-center"
                            key={index}
                          >
                            {console.log(additionalImages)}
                            <img
                              className="h-14"
                              src={image[0]}
                              alt={`Additional Photo ${index + 1}`}
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
            </div>
            {/* <--- Right --->*/}
            <div className=" flex flex-col w-1/2 p-3 border-seconday-text border-2 rounded-xl">
              {/* -- NAME -- */}
              <label className="flex flex-col">
                Tour Name:
                <input
                  type="text"
                  name="nameTour"
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
                <select
                  name="season"
                  value={tourInfo.season}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md focus:outline-none focus:border-primary"
                >
                  <option value="">Select a season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                </select>
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

              {/* -- Equipment -- */}
              <label className="flex flex-col">
                Equipment:
                <input
                  type="text"
                  name="equipment"
                  value={tourInfo.equipment}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md focus:outline-none focus:border-primary"
                />
              </label>
              {/* -- Guide ID -- */}
              <label className="flex flex-col">
                Guide ID:
                <input
                  type="text"
                  name="guideId"
                  value={tourInfo.guideId}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md focus:outline-none focus:border-primary"
                />
              </label>
              {/* -- Tags -- */}
              <label className="flex flex-col">
                Tags:
                <input
                  type="text"
                  name="tags"
                  value={tourInfo.tags}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md focus:outline-none focus:border-primary"
                />
              </label>
            </div>
          </div>
          <div className=" h-16 flex justify-center items-center">
            <button
              type="submit"
              className="w-56 h-12 text-white rounded-3xl bg-primary  hover:bg-btn-hover"
            >
              Create Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTour;
