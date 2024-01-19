import React from 'react'
import { NavLink } from 'react-router-dom';
import Carousel from '../../components/Carrusel/Carousel'
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import IconBirthday from '../../assets/icons/IconBirthday.png'
import IconCountry from '../../assets/icons/IconCountry.png'
import IconHome from '../../assets/icons/IconHome.png'
import { useSelector } from 'react-redux';



const GuideDetail = () => {
  const guideDetail = useSelector((state) => state.guide.detail);

  const place = "algunlugar"
  return (
    <div className=" font-Nunito">
        <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />
      <div className='w-full flex flex-row p-4'>
        <div className='w-2/3 px-9'>
            <div className=' flex flex-col'>
            <div className='flex justify-center flex-row py-9'>
                <b className='text-5xl'>{guideDetail.forename}</b> 
                <b className='text-5xl text-primary pl-4'>{guideDetail.surname}</b> </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className=' w-1/2'>{guideDetail.biography}</p>
            </div>
            <div className='flex text-center justify-around items-center '>
              <div className='flex text-center items-center py-8'>
                <i ><img className='h-12' src={IconBirthday} alt="" /></i>
                <b>{ guideDetail.birthDate}</b>
              </div>
              <div className='flex text-center items-center'>
                <i ><img className='h-12' src={IconCountry} alt="" /></i>
                <b>{ guideDetail.nationality}</b>
              </div>
            </div>
            <div className='flex flex-row p-4 justify-around items-center'>
              <div>
                <button className='bg-primary w-48 h-14 rounded-3xl flex justify-center items-center text-white text-xl font-bold border-black border-2  hover:bg-btn-hover transition hover:duration-300 hover:scale-110 ease-in-out '> <img src={IconHome} alt="Icon home" className='h-10' /><NavLink to={"/"}>Home</NavLink></button>
              </div>
              <div>
              <button className='bg-white w-48 h-14 rounded-3xl flex justify-center items-center text-primary border-black border-2  text-xl font-bold hover:bg-btn-hover transition hover:duration-300 hover:scale-110 ease-in-out  '><img src="" alt="" /> <NavLink to={place}>Guide's Tours</NavLink>
              </button>
              </div>
            </div>
        </div>

        <div>
            <div>
                <img className='h-1/2' src={ guideDetail.image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GuideDetail;