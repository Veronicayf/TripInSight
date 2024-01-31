import React, { useState } from 'react';
import Carousel from '../../components/Carrusel/Carousel';
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import { useSelector } from 'react-redux';

const ReviewFavorites = () => {
  const allTours = useSelector((state) => state.tour.tours);
  console.log(allTours);
  const [selectedTour, setSelectedTour] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes usar selectedTour y comment para enviar la reseña.
    // Aca va la action XDxdxdxd
  };

  return (
    <div className="font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <div className='flex flex-col w-full xl '>
        <h2 className="text-3xl font-bold flex justify-center mb-4">Leave a Review</h2>
        <form onSubmit={handleSubmit} className=" max-w-lg mx-auto  p-6 bg-white  my-6 shadow-md border-2 border-seconday-text rounded-xl">
          {/* Select de Tours */}
          <div className="mb-4">
            <label className="block text-black font-bold mb-2">Select a Tour:</label>
            <select
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="p-2 w-full border rounded-md focus:outline-primary"
            >
              <option value="" disabled>Select a Tour</option>
              {allTours.map((tour) => (
                <option key={tour.id} value={tour.id}>{tour.nameTour}</option>
              ))}
            </select>
          </div>

          {/* Comentarios */}
          <div className="mb-4">
            <label className="block text-black font-bold mb-2">Comments:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="p-2 w-full border rounded-md focus:outline-primary"
            />
          </div>

          {/* Botón de Enviar */}
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-btn-hover">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewFavorites;
