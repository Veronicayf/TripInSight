    import React, { useState } from "react";

    const Carousel = ({ images }) => {
        const [currentImage, setCurrentImage] = useState(0);
      
        const nextImage = () => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        };
      
        const prevImage = () => {
          setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        };
      
        return (
          <div className="relative">
            <div className="overflow-hidden rounded-md">
              <div
                className="flex transition-transform duration-300 ease-in-out transform"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${currentImage * (100 / images.length)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className=" flex w-full h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>
            </div>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 mx-4 bg-gray-800 opacity-75 rounded-full text-white font-bold hover:bg-gray-950 transition hover:duration-300 hover:scale-110 ease-in-out "
              onClick={prevImage}
            >
              {"<"}
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 mx-4 bg-gray-800 opacity-75 rounded-full text-white font-bold hover:bg-gray-950 transition hover:duration-300 hover:scale-110 ease-in-out "
              onClick={nextImage}
            >
              {">"}
            </button>
          </div>
        );
      };
      
      export default Carousel;