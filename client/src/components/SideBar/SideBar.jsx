import React from 'react'
import dashboardIcon from '../../assets/icons/dashboardIcon.png'
import SideBarLink from '../SidebarLink/SideBarLink'

const SideBar = () => {

    

  return (
    <div className='flex flex-col w-56 h-screen bg-neutral-900 text-white ' >
        <div className='flex items-center gap-2 px-1 py-3'>
            <i><img src={dashboardIcon} alt="Dashboard icon" className='h-12' /></i>
            <span>TripInSight</span>
        </div>
        <div className=' flex-1'>
                <div>
                    <SideBarLink linkTo="/guides" text="Guides" icon={dashboardIcon} />
                    <SideBarLink linkTo="/tours" text="Tours" icon={dashboardIcon} />
                    <SideBarLink linkTo="/customers" text="Customers" icon={dashboardIcon} />
                    <SideBarLink linkTo="/transactions" text="Transactions" icon={dashboardIcon} />
                    <SideBarLink linkTo="/comments" text="Comments" icon={dashboardIcon} />
                </div>
        </div>
        <div>
            <SideBarLink linkTo="/comments" text="Exit" icon={dashboardIcon} />
        </div>
    </div>
  )
}

export default SideBar