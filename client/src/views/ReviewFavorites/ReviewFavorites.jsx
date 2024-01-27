import React, { useState } from 'react';
import StarRating from  '../../components/StarRating/StarRating';
import Carousel from '../../components/Carrusel/Carousel';
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";

const ReviewFavorites = () => {
  const [ratingTour, setRatingTour] = useState(0);
  const [tourComment, setTourComment] = useState('');
  const [guideComment, setGuideComment] = useState('');
  const [ratingGuide, setRatingGuide] = useState(0);
  const [ratingInfo, setRatingInfo] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (category, value) => {
    switch (category) {
      case 'tour':
        setRatingTour(value);
        break;
      case 'guide':
        setRatingGuide(value);
        break;
      case 'info':
        setRatingInfo(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {/* Calificación del Tour */}
          <div className="mb-4">
            <label className="block text-black font-bold mb-2">Tour Rating:</label>
            <StarRating rating={ratingTour} onRatingChange={(value) => handleRatingChange('tour', value)} />
          </div>
          <div className="mb-4 ">
            <label className="block text-black font-bold mb-2"> Tour Comments:</label>
            <textarea
              value={tourComment}
              onChange={(e) => setTourComment(e.target.value)}
              className="p-2 w-full  border rounded-md focus:outline-primary"
            />
          </div>

          {/* Calificación del Guía */}
          <div className="mb-4">
            <label className="block text-black font-bold mb-2">Guide Rating:</label>
            <StarRating rating={ratingGuide} onRatingChange={(value) => handleRatingChange('guide', value)} />
          </div>
          <div className="mb-4 ">
            <label className="block text-black font-bold mb-2"> Guide Comments:</label>
            <textarea
              value={guideComment}
              onChange={(e) => setGuideComment(e.target.value)}
              className="p-2 w-full  border rounded-md focus:outline-primary"
            />
          </div>

          {/* Calificación de la Información del Tour */}
          <div className="mb-4">
            <label className="block text-black font-bold mb-2">Information Rating:</label>
            <StarRating rating={ratingInfo} onRatingChange={(value) => handleRatingChange('info', value)} />
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

export default ReviewFavorites