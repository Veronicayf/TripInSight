import React from 'react'
import dashboardIcon from '../../assets/icons/dashboardIcon.png'
import SideBarLink from '../SidebarLink/SideBarLink'

const SideBar = () => {

    

  return (
    <div className='flex flex-col w-56 h-screen border-r-4 border-b-4 rounded-xl border-seconday-text  text-black ' >
        <div className='flex items-center gap-2 px-1 py-3'>
            <i><img src={dashboardIcon} alt="Dashboard icon" className='h-12' /></i>
            <span>TripInSight</span>
        </div>
        <div className=' flex-1'>
          <div>
            <SideBarLink linkTo="/admin/viewTours" text="Tours" icon={dashboardIcon} />
            <SideBarLink linkTo="/admin/createtour" text="Create Tour" icon={dashboardIcon} />
            <SideBarLink linkTo="/admin/guides" text="Guides" icon={dashboardIcon} />
            <SideBarLink linkTo="/admin/createguide" text="Create Guide" icon={dashboardIcon} />
            <SideBarLink linkTo="/admin/transactions" text="Transactions" icon={dashboardIcon} />
            <SideBarLink linkTo="/admin/comments" text="Comments" icon={dashboardIcon} />

          </div>
        </div>
        <div>
            <SideBarLink linkTo="/comments" text="Exit" icon={dashboardIcon} />
        </div>
    </div>
  )
}

export default SideBar