import React from 'react'

const PhotoSection = ({ icon, title, images }) => {
        return (
                <section id='photos' className='flex-col px-4 w-6/8'>
                  <div className='flex items-center'>
                    <i className='h-12 content-center'>
                      <img className='h-10 w-10' src={icon} alt={title} />
                    </i>
                    <h3 className='px-4 flex-grow text-3xl'>{title}</h3>
                  </div>
                  <div className='columns-4 gap-3 w-full space-y-3 pb-28'>
                    {images.map((image, index) => (
                      <div key={index} className='break-inside-avoid'>
                        <img src={image} alt={`Photo ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </section>
              );
}

export default PhotoSection