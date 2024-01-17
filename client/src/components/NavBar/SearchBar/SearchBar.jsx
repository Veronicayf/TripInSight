import searchIcon from '../../../assets/icons/searchIcon.png'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getTourName, searchTourTags } from '../../../redux/tourStore/toursActions';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSearch(event.target.value);
        dispatch(getTourName(search));
        //dispatch(searchTourTags(search)) //o se despacha por name o por tags. tener ruta que busque por ambos.
      };

    const handleButtonSubmit = () => {
        dispatch(getTourName(search));
        setSearch('');
    }

    return (
        <div className='flex flex-row items-center text-black'>
            <input className='rounded-lg p-1' type="search" placeholder="Search tour..." onChange={handleChange}/>
            {/* <img src={search} alt='Search Tour'/> */}
            
            <button onClick={handleButtonSubmit}><img src={searchIcon} alt='Search Tour'/></button>
        </div>
    )
}

export default SearchBar;

//
// import searchIcon from '../../../assets/icons/searchIcon.png'
// import { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { getTourName } from '../../../redux/tourStore/toursActions';

// const SearchBar = () => {
//     const [search, setSearch] = useState('');
//     const dispatch = useDispatch();

//     // Función de aplazamiento con un retraso de 500ms
//     const debounce = (fn, delay) => {
//         let debounceTimer;
//         return function() {
//             const context = this;
//             const args = arguments;
//             clearTimeout(debounceTimer);
//             debounceTimer = setTimeout(() => fn.apply(context, args), delay);
//         }
//     }

//     // Versión aplazada de handleChange
//     const debouncedHandleChange = debounce(event => {
//         setSearch(event.target.value);
//         dispatch(getTourName(event.target.value));
//     }, 500);

//     const handleButtonSubmit = () => {
//         dispatch(getTourName(search));
//         setSearch('');
//     }

//     return (
//         <div className='flex flex-row items-center text-black'>
//             <input className='rounded-lg p-1' type="search" placeholder="Search tour..." onChange={debouncedHandleChange}/>
//             <button onClick={handleButtonSubmit}><img src={searchIcon} alt='Search Tour'/></button>
//         </div>
//     )
// }

// export default SearchBar;