import React from 'react'
import { Link } from 'react-router-dom'


const ReviewSection = () => {
  return (
    <div className=' h-40 flex justify-around items-center flex-col mx-10 my-4 border-2 border-seconday-text rounded-xl '>
            <div className='text-3xl'><b>Please review your </b> <b className='text-primary'>Travel</b></div>
            <button className=' h-12 w-56 rounded-full flex justify-center items-center bg-primary text-white'><Link to="">Review</Link></button>
    </div>
    
  )
}

export default ReviewSection