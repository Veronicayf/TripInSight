import React, { useState } from 'react'

const Pagination = ({itemPerPage,totalItems,paginate}) => {
    const pageNumbers = [];

    for(let i = 1 ; i <=Math.ceil(totalItems/itemPerPage); i++){
        pageNumbers.push(i)
    }
    const handleClick = (pageNumber) =>{
        setCurrentPage(pageNumber);
        paginate(pageNumber)
    }

    const [currentPage,setCurrentPage] = useState(1)
    return (
    <div className='flex justify-center mt-4'>
    <ul className='flex'>
        {pageNumbers.map((number) => (
        <li key={number}>
            <button
            className={`${
                currentPage === number ? 'bg-primary text-white' : 'bg-white text-black'
            } border border-gray-300 px-3 py-1 mx-1 rounded`}
            onClick={() => handleClick(number)}
            >
            {number}
            </button>
        </li>
        ))}
    </ul>
    </div>
    )
}

export default Pagination