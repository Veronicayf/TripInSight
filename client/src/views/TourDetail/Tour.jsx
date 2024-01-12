import React from 'react'
import { Link } from "react-router-dom";
import tourStyle from './tour.module.css'
import TourInfoItem from '../../components/TourInfoItem/TourInfoItem';
import Buysection from '../../components/Buysection/Buysection';
import PhotoSection from '../../components/PhotoSection/PhotoSection';
import GuideSection from '../../components/TourDetailGuideSection/GuideSection';
import ImagePrincipal from '../../assets/img/Caballo1.jpg'
import ImageSecundaria from '../../assets/img/Caballo2.jpg'
import ImangeProvisoria1 from '../../assets/img/ciervo1.jpg'
import ImangeProvisoria2 from '../../assets/img/paisaje1.jpg'
import ImangeProvisoria3 from '../../assets/img/paisaje2.jpg'
import iconDay from '../../assets/icons/dayIcon.png'
import iconCalendar from '../../assets/icons/calendarIcon.png'
import iconpeople from '../../assets/icons/peopleIcon.png'
import iconplace from '../../assets/icons/placeIcon.png'
import iconTourDetail from'../../assets/icons/tourDetailicon.png'
import IconIncludes from '../../assets/icons/includesIcon.png'
import iconPhoto from '../../assets/icons/photosIcon.png'

const Tour = () => {






  return (
    <main >
{/* Image Section */}
        <section>
            <img src={ImagePrincipal} className='w-full h-auto overflow-hidden' alt="" />
        </section>
{/*-------------- Info Del Tour --------------*/}
        <section className='px-4 flex w-3/4'>
            <div className='flex w-1/2'>
                <ul>
                <TourInfoItem icon={iconDay} label="80 Days" />
                <TourInfoItem icon={iconCalendar} label="Date: February 30 - May 32" />
                <TourInfoItem icon={iconpeople} label="Maximum number of people: 12" />
                </ul>
            </div>
            <div className='flex w-1/2'>
                <ul>
                <TourInfoItem icon={iconplace} label="Unicorniolandia, Moron" />
                </ul>
            </div>
        </section>
        <section >
        <Buysection/>
        </section>
{/*-------------- Info Del Tour --------------*/}
{/*-------------- Page Nav Bar--------------*/}
        <section className='px-4 flex w-3/4 h-14 bg-gray-500 justify-around items-center'>
            <div className=''>
                <button type="button" className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
                    <Link to='#description'>Description</Link>
                </button>
            </div>
            <div>
            <button type="button" className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
                    <Link to='#photos'>Photos</Link>
                </button>
            </div>
            <div>
            <button type="button" className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
                    <Link to='#guide'>Guide</Link>
                </button>
            </div>
        </section>
{/*-------------- Page Nav Bar--------------*/}

{/*-------------- Tour Detail --------------*/}
        <section id='description' className='flex-col px-4 w-3/4'>
            <div className='flex items-center'>
                <i className='h-12 content-center'><img className='h-10 w-10' src={iconTourDetail} alt="Tour Detail" /></i>
                <h3 className='px-4 flex-grow text-3xl'>Tour Detail</h3>
            </div>
            <div className='flex justify-end'>
                <p className='text-lg'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </section>
{/*-------------- Tour Detail --------------*/}

{/*-------------- Second Image --------------*/}
        <section className=' w-3/4 px-4'>
            <img src={ImageSecundaria} alt="" />
        </section>
{/*-------------- Detail tour --------------*/}
        <section className=' w-3/4'>
            <div className='bg-seconday-text h-2 my-4'></div>
            <div className=' w-full flex h-16'>
                <div className='w-1/3 flex justify-center text-lg'>
                    <b>Depature place</b>
                </div>
                <div className='w-2/3 flex text-lg'>
                    <p>Wakanda or Antigua and Barbuda airport</p>
                </div>
            </div>
            <div className='bg-seconday-text h-2 my-4'></div>
            <div className=' w-full flex h-16'>
                <div className='w-1/3 flex justify-center text-lg'>
                    <b>Travel time</b>
                </div>
                <div className='w-2/3 flex text-lg'>
                    <p>February 30 - May 32</p>
                </div>
            </div>
            <div className='bg-seconday-text h-2 my-4'></div>
            <div className=' w-full flex'>
                <div className='w-1/3 flex justify-center text-lg'>
                    <b>Included in the price</b>
                </div>
                <div className=' flex-col'>
                    <div className='w-2/3 flex text-lg py-1'>
                        <i className='h-12 content-center'><img className='h-10 w-16' src={IconIncludes} alt="icon" /></i>
                        <p className='px-4 flex-grow text-base'>Accommodation and overnight stay in all hotels in a shared room, the single supplement is €650</p>
                    </div>
                    <div className='w-2/3 flex text-lg py-1'>
                        <i className='h-12 content-center'><img className='h-10 w-10' src={IconIncludes} alt="icon" /></i>
                        <p className='px-4 flex-grow text-base'>All meals, breakfasts, lunches and dinners.</p>
                    </div>
                    <div className='w-2/3 flex text-lg py-1'>
                        <i className='h-12 content-center'><img className='h-10 w-10' src={IconIncludes} alt="icon" /></i>
                        <p className='px-4 flex-grow text-base'>Local bilingual guide throughout the trip</p>
                    </div>
                    <div className='w-2/3 flex text-lg py-1'>
                        <i className='h-12 content-center'><img className='h-10 w-10' src={IconIncludes} alt="icon" /></i>
                        <p className='px-4 flex-grow text-base'>Photographic guide and all its expenses</p>
                    </div>
                </div>
            </div>
            <div className='bg-seconday-text h-2 my-4'></div>
        </section>
{/*-------------- Photos tour --------------*/}
        <section id='photos' className='flex-col px-4 w-3/4'>

            <PhotoSection
                icon={iconPhoto}
                title='Photos'
                images={[ImangeProvisoria1, ImangeProvisoria2, ImangeProvisoria3,ImagePrincipal,ImageSecundaria , ImangeProvisoria2, ImangeProvisoria3,ImagePrincipal,ImageSecundaria]}
            />
        </section>
{/*-------------- Guide Section --------------*/}
        <GuideSection
                icon={iconTourDetail}
                title='Guide'
                guideName='Fernando Alonso Pérez'
                guideImage={ImangeProvisoria1}
                guideDescription={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`}
            />
        <footer> Aca va el footer</footer>

    </main>
  )
}

export default Tour