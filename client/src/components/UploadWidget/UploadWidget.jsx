import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const CloudinaryUploadWidget = ({ onImageUpload, multiple }) => {
  const handleImageUpload = async (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const uploadedImages = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'kxluwve4'); // Reemplaza con tu upload preset

        try {
          const response = await fetch('https://api.cloudinary.com/v1_1/dc8xqjyen/image/upload', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const result = await response.json();
            const imageUrl = result.secure_url;
            uploadedImages.push(imageUrl);
          } else {
            console.error(`Error al subir la imagen ${file.name} a Cloudinary`);
          }
        } catch (error) {
          console.error(`Error al procesar la imagen ${file.name}:`, error);
        }
      }

      // Llamar a la función proporcionada por el padre con las imágenes subidas
      onImageUpload(uploadedImages);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} accept="image/*" multiple={multiple} />
    </div>
  );
};

export default CloudinaryUploadWidget;