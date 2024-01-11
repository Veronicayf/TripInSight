import React from 'react'
import { Link } from "react-router-dom";
import tourStyle from './tour.module.css'
import TourInfoItem from '../TourInfoItem/TourInfoItem';
import ImagePrincipal from '../../assets/img/Caballo1.jpg'
import ImageSecundaria from '../../assets/img/Caballo2.jpg'
import iconDay from '../../assets/icons/dayIcon.png'
import iconCalendar from '../../assets/icons/calendarIcon.png'
import iconpeople from '../../assets/icons/peopleIcon.png'
import iconplace from '../../assets/icons/placeIcon.png'
import iconTourDetail from'../../assets/icons/tourDetailicon.png'
import IconIncludes from '../../assets/icons/includesIcon.png'

const Tour = () => {
  return (
    <main className=''>
        {/* NavBar Section */}
        <section className='w-full flex justify-center bg-transparent'>
            <p>Aca va a la navBar</p>
        </section>

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
{/*-------------- Info Del Tour --------------*/}
{/*-------------- Page Nav Bar--------------*/}
        <section className='px-4 flex w-3/4 h-14 bg-gray-500 justify-around items-center'>
            <div className=''>
                <button type="button" class="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
                    <Link to='#description'>Description</Link>
                </button>
            </div>
            <div>
            <button type="button" class="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
                    <Link to='#photos'>Photos</Link>
                </button>
            </div>
            <div>
            <button type="button" class="focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 h-12 w-32 dark: bg-primary  dark:hover:bg-btn-hover dark:focus:ring-green-800">
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
            <div className=' w-full flex h-16'>
                <div className='w-1/3 flex justify-center text-lg'>
                    <b>Travel time</b>
                </div>
                <div className='w-2/3 flex text-lg'>
                    <p>February 30 - May 32</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Tour