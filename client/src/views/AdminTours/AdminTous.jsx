import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import iconmenu from '../../assets/icons/IconMenuVertical.png'
import TourItem from '../../components/TourItem/TourItem';

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
    // agregar más tours aquí
  ];

const AdminTous = () => {
  return (
    <div className='flex w-full flex-row'>
        <SideBar/>
        <div className=' flex w-full flex-col p-4'>
            <div>
                filter bar
                & 
                Button add product
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
                        {toursData.map((tourInfo, index) => (
                        <TourItem key={index} tourInfo={tourInfo} />
                        ))}
                        </div>
            </div>
        </div>
    </div>
  )
}

export default AdminTous