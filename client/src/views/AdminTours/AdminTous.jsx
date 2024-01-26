import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'

import TourItem from '../../components/TourItem/TourItem';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllT } from '../../redux/tourStore/toursActions';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';

const toursData = [
    {
        "nameTour": "Birdwatching Expedition with Alexandra",
        "initialDate": "2024-10-15",
        "endDate": "2024-10-20",
        "image": "https://www.quarkexpeditions.com/sites/default/files/blog-images/Acacia-Johnson-Falkland-Islands-Black-Browed-Albatross-With-PAX-web.jpg",
        "continent": "South America",
        "country": "Argentina",
        "city": "Ushuaia",
        "type": "Nature",
        "capacity": 15,
        "description": "Join Alexandra on a mesmerizing birdwatching tour through the picturesque landscapes of Ushuaia. Explore diverse bird species in their natural habitats while enjoying insightful commentary on their behaviors and migratory patterns. Suitable for all bird enthusiasts.",
        "season": "Spring",
        "status": "true",
        "price": "150",
        "equipment": "Binoculars provided",
        "guide": "Alexandra Jones",
        "image1": "https://www.quarkexpeditions.com/sites/default/files/blog-images/lightmantledalbatross.jpg",
        "image2": "https://www.quarkexpeditions.com/sites/default/files/blog-images/AdobeStock_200548947_CapeHorn_0.jpg",
        "image3": "https://imgix.swoop-patagonia.com/SWO_4_SALLY_ALL_CHILOEBIRDS.JPG?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30",
        "image4": "https://imgix.swoop-patagonia.com/SWO_4_SALLY_ALL_CHILOEBIRDS.JPG?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30",
        "image5": "https://patagonia-chile.com/wp-content/uploads/2020/01/birdwatching_02.jpg",
        "image6": "https://www.revistaaire.com/wp-content/uploads/MG_28386-condor-andino.jpg",
        "image7": "https://patagonia-chile.com/wp-content/uploads/2020/01/BAHIA_LOMAS.jpg",
        "image8": "https://patagonia-chile.com/wp-content/uploads/2020/01/birdwatching_04.jpg",
    },
    {
        "nameTour": "Scuba Diving Adventure with Benjamin",
        "initialDate": "2024-07-12",
        "endDate": "2024-07-18",
        "image": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_514451137.jpg",
        "continent": "North America",
        "country": "Canada",
        "city": "Vancouver",
        "type": "Adventure",
        "capacity": 10,
        "description": "Embark on an exhilarating scuba diving expedition with Benjamin along the stunning coast of Vancouver. Dive into crystal-clear waters, explore vibrant marine life, and witness the beauty of underwater ecosystems. Suitable for certified divers of all levels.",
        "season": "Summer",
        "status": "true",
        "price": "250",
        "equipment": "Dive gear provided",
        "guide": "Benjamin Smith",
        "image1": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_596677187.jpg",
        "image2": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_146570078.jpg",
        "image3": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_410793766.jpg",
        "image4": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_654264934.jpg",
        "image5": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_130948589.jpg",
        "image6": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_296506142.jpg",
        "image7": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_236579056.jpg",
        "image8": "https://www.scuba.com/blog/wp-content/uploads/2017/09/shutterstock_325504112-825x465.jpg",
      },
      {
        "nameTour": "Mountain Trekking with Daniel",
        "initialDate": "2024-08-11",
        "endDate": "2024-08-19",
        "image": "https://www.machupicchu-tours-peru.com/wp-content/uploads/2020/05/choquequirao-cusco-featured.webp",
        "continent": "South America",
        "country": "Peru",
        "city": "Cusco",
        "type": "Adventure",
        "capacity": 25,
        "description": "Embark on a thrilling mountain trekking adventure with Daniel in the Andes near Cusco, Peru. Traverse breathtaking landscapes, witness unique flora and fauna, and experience the Andean culture. Suitable for trekking enthusiasts of all levels.",
        "season": "Winter",
        "status": "false",
        "price": "180",
        "equipment": "Hiking poles and backpacks provided",
        "guide": "Daniel Garcia",
        "image1": "https://www.machupicchu-tours-peru.com/wp-content/uploads/2021/02/Camino-Inca-Corto.jpg",
        "image2": "https://www.machupicchu-tours-peru.com/wp-content/uploads/2021/01/camino-inca-min.jpg",
        "image3": "https://www.perurail.com/wp-content/uploads/2017/10/Foto-1_Machu-Picchu-city-wonder-of-the-world-Cusco-Peru.jpg",
        "image4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgY2vkjurZDdNZ_w3K6d-hegkarhe6S3O-yibLWKmf0cligAAOV1yrGL3A6KLV4lk6ozA&usqp=CAU",
        "image5": "https://elcomercio.pe/resizer/I_hfzi2D3K3DHdYjbZm9HidAnAc=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3LNMIYXDAVEM7BTLXIBEZBUXEM.jpg",
        "image6": "https://img.itinari.com/pages/images/original/7cc2cf66-2e54-4342-a413-ce01d9edebf5-istock-pawopa3336.jpg?ch=DPR&dpr=2.625&w=1600&s=33475215b65c25c7e73b0a575011b538",
        "image7": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/4a/87/12.jpg",
        "image8": "",
      },
  ];

const AdminTous = () => {
    const allTours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllT());
    }, [dispatch])

    const [currentPage,setCurrentPage] = useState(1)
    const [itemPerPage] = useState(10)
    
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = toursData.slice(indexOfFirstItem,indexOfLastItem);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    console.log(allTours)


    return (
    <div className='flex w-full flex-row'>
        <SideBar/>
        <div className=' flex w-full flex-col p-4'>
            <div>
                <HeaderAdmin/>
            </div>
            <div className=' w-full flex flex-col'>
                <div className=' flex w-full flex-row justify-between text-white bg-primary rounded-b-3xl'>
                    <div className='w-2/6 h-12 flex justify-center items-center'>
                        <b className=''>Tour name</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Initial date</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Capacity</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Precio</b>
                    </div>
                    
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Status</b>
                    </div>
                    
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''> Actions</b>
                    </div>
    
                </div>
                    <div className='flex flex-col w-full justify-between py-4'>
                        {allTours && allTours.length > 0 ? (
                            allTours.map((tour, index) => <TourItem key={index} tourInfo={tour} />)
                        ): (
                            <div className="flex flex-col justify-center items-center p-5 gap-5">
                            <b>Loading...</b>
                            <img src="https://media1.tenor.com/m/QqPVtiP0IjYAAAAC/travel-lets-go.gif" alt="loading" width="250"/>
                            <button className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5" onClick={handleClick}>View all tours</button>
                            </div>
                        )}

                        </div>
                    <Pagination itemPerPage={itemPerPage} totalItems={toursData.length} paginate={paginate}/>
            </div>
        </div>
    </div>
  )
}

export default AdminTous