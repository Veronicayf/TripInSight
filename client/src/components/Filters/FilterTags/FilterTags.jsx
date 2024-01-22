import { useDispatch } from "react-redux";
import { searchTourTags } from "../../../redux/tourStore/toursActions";

const FilterTags = () => {
  const dispatch = useDispatch();

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTourTags(e.target.name));
  };

  return (
    <div className="flex flex-col justify-items-center justify-center items-center min-w-fit bg-green-300 gap-3 p-5 rounded-full">
      <div className="flex flex-row justify-center items-center">
        <b> Filter by the 10 most searched tags</b>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <button
          type="submit"
          name="expedition"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Expedition
        </button>
        <button
          type="submit"
          name="adventure"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Adventure
        </button>
        <button
          type="submit"
          name="marine"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Marine
        </button>
        <button
          type="submit"
          name="Tour"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Tour
        </button>
        <button
          type="submit"
          name="Discovery"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Discovery
        </button>
        <button
          type="submit"
          name="exploration"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Exploration
        </button>
        <button
          type="submit"
          name="summer"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Summer
        </button>
        <button
          type="submit"
          name="Autumn"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Autumn
        </button>
        <button
          type="submit"
          name="Spring"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Spring
        </button>
        <button
          type="submit"
          name="nature"
          className="bg-zinc-100 duration-150 hover:!border-b-2 text-primary rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-primary cursor-pointer active:bg-zinc-300 p-1.5"
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Nature
        </button>
      </div>
    </div>
  );
};

export default FilterTags;
