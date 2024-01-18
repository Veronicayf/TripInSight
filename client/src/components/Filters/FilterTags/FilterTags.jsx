import { useDispatch } from "react-redux";
import { getAllT, searchTourTags } from "../../../redux/tourStore/toursActions";


const FilterTags = () => {
    const dispatch = useDispatch();

    const handleButtonSubmit = (e) => {
        e.preventDefault();
        console.log('e', e.target.name);
        dispatch(searchTourTags(e.target.name));
      }

    return (
        <div className="flex flex-col justify-items-center justify-center items-center bg-green-300 gap-3 p-5 rounded-full">
            <div className="flex flex-row justify-center items-center">
            <b> Filter by the 10 most searched tags</b>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
            <button 
            type="submit"
            name="expedition"
            className="bg-zinc-100 duration-150 hover:!border-b-2 text-green-600 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-green-600 cursor-pointer active:bg-zinc-300 p-1.5"
            onClick={(e) => handleButtonSubmit(e)}
            >#Expedition</button>
            <button 
            type="submit"
            name="adventure"
            className="bg-zinc-100 duration-150 hover:!border-b-2 text-green-600 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-green-600 cursor-pointer active:bg-zinc-300 p-1.5"
            onClick={(e) => handleButtonSubmit(e)}
            >#Adventure</button>
            <button 
            type="submit"
            name="winter"
            className="bg-zinc-100 duration-150 hover:!border-b-2 text-green-600 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-green-600 cursor-pointer active:bg-zinc-300 p-1.5"
            onClick={(e) => handleButtonSubmit(e)}
            >#Winter</button>
            <button 
            type="submit"
            name="birds"
            className="bg-zinc-100 duration-150 hover:!border-b-2 text-green-600 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-green-600 cursor-pointer active:bg-zinc-300 p-1.5"
            onClick={(e) => handleButtonSubmit(e)}
            >#Birds</button>
            <button 
            type="submit"
            name="birds"
            className="bg-zinc-100 duration-150 hover:!border-b-2 text-green-600 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-green-600 cursor-pointer active:bg-zinc-300 p-1.5"
            onClick={(e) => handleButtonSubmit(e)}
            >#Sea</button>
            </div>
        </div>
    )
};

export default FilterTags;