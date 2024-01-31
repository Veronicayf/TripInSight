import React from 'react'

const GuideSection = ({ icon, title, guideName, guideImage, guideDescription}) => {
    return (
        <section id='guide' className='flex-col px-4 w-full'>
            <div className='flex items-center mb-4'>
            <i className='h-12 content-center'>
                <img className='h-10 w-10' src={icon} alt={title} />
            </i>
            <h3 className='px-4 flex-grow text-3xl'>{title}</h3>
            </div>
            <div className='w-full flex flex-col lg:flex-row '>
                <div className=' flex flex-col w-full lg:w-4/6'>
                    <p className='text-2xl mb-4'>{guideName}</p>
                    <div className='bg-seconday-text h-2 mb-4 rounded-full'></div>
                    <p>{guideDescription}</p>
                </div>
                <div className='w-full lg:w-3/6 flex justify-start items-center h-96'>
                    <img src={guideImage} alt={`Guide ${guideName}`} className='rounded-lg h-full' />
                </div>
            </div>
        </section>
    )
}

export default GuideSection