import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        onRatingChange(selectedRating);
    };

    const handleStarHover = (hovered) => {
        setHoveredRating(hovered);
    };

    return (
        <div className='flex'>
            {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
            key={star}
            className={`cursor-pointer ${
            (hoveredRating || rating) >= star ? 'text-primary' : 'text-gray-300'
            }`}
            size={24}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => handleStarHover(0)}
            onClick={() => handleStarClick(star)}
        />
        ))}
    </div>
    );
};

export default StarRating;