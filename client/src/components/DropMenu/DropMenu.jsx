import React from 'react'

const DropMenu = () => {

  const menus=['Profile','Settings']
  
  return (
    <div className='bg-white text-black p-4 w-52 shadow-lg absolute -left-14 top-24 '>
      <ul>
          {menus.map((menu)=>(
            <li className='p-2 text-lg cursor-pointer rounded hover:bg-seconday-text' key={menu}>{menu}</li>
          ))}
      </ul>
    </div>
  )
}

export default DropMenu