import React from 'react'
import dashboardIcon from '../../assets/icons/dashboardIcon.png'
import logo from '../../assets/img/logo.png'
import SideBarLink from '../SidebarLink/SideBarLink'


const SideBar = () => {

    

  return (
    <aside className='flex flex-col w-56 h-screen border-r-4 border-b-4 rounded-xl border-seconday-text font-Poppins bg-admin-light-bg shadow-admin-sb justify-center items-center ' >
        <div className='flex items-center gap-2 px-1 py-3'>
            <i><img src={logo} alt="Dashboard icon" className='h-12' /></i>
            <span>TripInSight</span>
        </div>
        <div className=' flex-1 text-primary'>
          <div>
            <SideBarLink linkTo="/admin/" text="Dashboard"   icon={<span className="material-symbols-outlined">
            dashboard
            </span>} />
            <SideBarLink linkTo="/admin/viewTours" text="Tours" icon={<span className="material-symbols-outlined">
            travel_explore
            </span>} />
            <SideBarLink linkTo="/admin/createtour" text="Create Tour" icon={<span className="material-symbols-outlined">
            add_circle
            </span>} />
            <SideBarLink linkTo="/admin/viewGuides" text="Guides" icon={<span className="material-symbols-outlined">
            familiar_face_and_zone
            </span>} />
            <SideBarLink linkTo="/admin/createguide" text="Create Guide" icon={<span className="material-symbols-outlined">
            add_circle
            </span>} />
            <SideBarLink linkTo="/admin/transactions" text="Transactions" icon={<span className="material-symbols-outlined">
            storefront
            </span>} />
            <SideBarLink linkTo="/admin/comments" text="Comments" icon={<span className="material-symbols-outlined">
            reviews
            </span>} />

          </div>
        </div>
        <div className='text-primary'>
            <SideBarLink linkTo="/" text="Exit" icon={<span className="material-symbols-outlined">
            logout
            </span>} />
        </div>
    </aside>
  )
}

export default SideBar