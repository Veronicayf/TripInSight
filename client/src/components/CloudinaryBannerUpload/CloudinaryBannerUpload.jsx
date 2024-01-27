import React from "react";
import { Image, Transformation } from "cloudinary-react";

const CloudinaryBannerUploadWidget = ({ onImageUpload }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add('dragover');
      };
    
      const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove('dragover');
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleFiles(files);
      };
    
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "kxluwve4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dc8xqjyen/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          const imageUrl = result.secure_url;
          const imageName = result.original_filename;
          const imageFormat = result.format;

          // Llama a la función proporcionada por el padre con la imagen subida
          onImageUpload([[imageUrl, imageName, imageFormat]]);
        } else {
          console.error(`Error al subir la imagen ${file.name} a Cloudinary`);
        }
      } catch (error) {
        console.error(`Error al procesar la imagen ${file.name}:`, error);
      }
    }
  };

  return (
    <div className="dropzone border-dashed border-2 border-primary p-8 text-center cursor-pointer">
      <input
        type="file"
        id="fileInput"
        onChange={handleImageUpload}
        accept="image/*"
      />
      <p>Drag and drop files here or click to select</p>
    </div>
  );
};

export default CloudinaryBannerUploadWidget;
