import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Pagination from '../../components/Pagination/Pagination';
import GuideItem from '../../components/GuideItem/GuideItem';


const guidesData = [
    {
        "id":"1",
        "forename": "Alexandra",
        "surname": "Jones",
        
        "nationality": "American",
        "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
       "birthDate": "1985-03-12",
       "working": "true",
       "biography": "Alexandra is a passionate nature enthusiast with a deep love for birdwatching. As an avid ornithologist, she shares her extensive knowledge about various bird species during guided tours. With expertise in trekking, Alexandra ensures an unforgettable and educational experience for nature lovers exploring the outdoors."
      },
      {
        "id":"2",
        "forename": "Benjamin",
        "surname": "Smith",
        "nationality": "Canadian",
        "image": "https://images.pexels.com/photos/14783579/pexels-photo-14783579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "birthDate": "1990-09-25",
        "working": "true",
        "biography": "Benjamin is an adventurous guide with a keen interest in marine life. Specializing in scuba diving, he provides unique insights into the underwater world. With a commitment to environmental conservation, Benjamin's tours focus on sustainable practices, making him an ideal choice for eco-conscious travelers."
      },
      {
        "id":"3",
        "forename": "Catherine",
        "surname": "Nguyen",
        "nationality": "Vietnamese",
        "image": "https://us.123rf.com/450wm/studioaccendo/studioaccendo2305/studioaccendo230555541/205127121-hermosa-mujer-asi%C3%A1tica-usa-sombrero-y-sonr%C3%ADe-en-el-jard%C3%ADn.jpg?ver=6",
        "birthDate": "1988-06-03",
        "working": "true",
        "biography": "Catherine is a nature lover from Vietnam, passionate about botany. With a background in horticulture, she guides tours through lush forests, sharing her expertise on native plant species. Her commitment to environmental education ensures an informative and enjoyable experience for those interested in flora and fauna."
      },
      {
        "id":"4",
        "forename": "Daniel",
        "surname": "Garcia",
        "nationality": "Mexican",
        "image": "https://images.pexels.com/photos/4757625/pexels-photo-4757625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "birthDate": "1983-12-18",
        "working": "true",
        "biography": "Daniel is an experienced trekking guide with a profound love for mountain ecosystems. His knowledge of local flora and fauna, combined with a focus on responsible tourism, makes him an ideal companion for those seeking adventure in the great outdoors. Daniel's commitment to conservation ensures a memorable and eco-friendly journey."
      },

]

const AdminGuides = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const [itemPerPage] = useState(10)
    
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = guidesData.slice(indexOfFirstItem,indexOfLastItem);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
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
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>ID</b>
                    </div>
                    <div className='w-2/6 h-12 flex justify-center items-center'>
                        <b className=''>Guide name</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Birthdate</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Working</b>
                    </div>
                    <div className='w-1/6 flex justify-center items-center'>
                    <b className=''>Actions</b>
                    </div>
    
                </div>
                    <div className='flex flex-col w-full justify-between py-4'>
                        {guidesData.map((guideInfo, index) => (
                        <GuideItem key={index} guideInfo={guideInfo} />
                        ))}
                        </div>
                        <Pagination itemPerPage={itemPerPage} totalItems={guidesData.length} paginate={paginate}/>
            </div>
        </div>
    </div>
  )
}

export default AdminGuides