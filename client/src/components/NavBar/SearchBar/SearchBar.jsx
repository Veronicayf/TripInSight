import search from '../../../assets/icons/searchIcon.png'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getTourName } from '../../../redux/tourStore/toursActions';

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
      };

    const handleButtonSubmit = () => {
        dispatch(getTourName(name));
        setName('');
    }

    return (
        <div className='flex flex-row items-center text-black'>
            <input className='rounded-lg p-1' type="search" placeholder="Search tour..." onChange={handleChange}/>
            <button onClick={handleButtonSubmit}><img src={search} alt='Search Tour'/></button>
        </div>
    )
}

export default SearchBar;