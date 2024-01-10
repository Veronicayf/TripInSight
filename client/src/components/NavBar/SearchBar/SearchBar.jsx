import search from '../../../assets/icons/searchIcon.png'

const SearchBar = () => {

    return (
        <div className='flex flex-row items-center'>
            <input className='rounded-lg p-1' type="search" placeholder="Search tour..." />
            <button ><img src={search} alt='Search Tour'/></button>
        </div>
    )
}

export default SearchBar;