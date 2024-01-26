import React from 'react'

const GuideSection = ({ icon, title, guideName, guideImage, guideDescription}) => {
    return (
        <section id='guide' className='flex-col px-4 w-3/4'>
            <div className='flex items-center mb-4'>
            <i className='h-12 content-center'>
                <img className='h-10 w-10' src={icon} alt={title} />
            </i>
            <h3 className='px-4 flex-grow text-3xl'>{title}</h3>
            </div>
            <div className='w-full grid grid-cols-8'>
            <div className='col-span-4 flex flex-col'>
                <p className='text-2xl mb-4'>{guideName}</p>
                <div className='bg-seconday-text h-2 mb-4'></div>
                <p>{guideDescription}</p>
            </div>
            <div className='col-span-4 flex justify-start items-center ml-10 mb-10 h-96'>
                <img src={guideImage} alt={`Guide ${guideName}`} className='rounded-lg h-full' />
            </div>
            </div>
        </section>
    )
}

export default GuideSection