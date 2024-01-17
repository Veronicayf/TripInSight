

// import searchIcon from '../../../assets/icons/searchIcon.png'
// import { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { getTourName } from '../../../redux/tourStore/toursActions';

// const SearchBar = () => {
//     const [search, setSearch] = useState('');
//     const dispatch = useDispatch();

//     const handleChange = (event) => {
//         setSearch(event.target.value);
//         dispatch(getTourName(search));
//       };

//     const handleButtonSubmit = () => {
//         dispatch(getTourName(search));
//         setSearch('');
//     }

//     return (
//         <div className='flex flex-row items-center text-black'>
//             <input className='rounded-lg p-1' type="search" placeholder="Search tour..." onChange={handleChange}/>
//             {/* <img src={search} alt='Search Tour'/> */}
            
//             <button onClick={handleButtonSubmit}><img src={searchIcon} alt='Search Tour'/></button>
//         </div>
//     )
// }

// export default SearchBar;