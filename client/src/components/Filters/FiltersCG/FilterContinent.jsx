import { useDispatch } from "react-redux";
import { filterContinent } from "../../../redux/tourStore/toursActions";

const FilterContinent = () => {
  const dispatch = useDispatch();

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterContinent(e.target.value));
  };

  return (
    <div className="w-48 flex flex-col items-center justify-center p-5 rounded-full bg-primary order-1">
      <b className="mb-3">Continent Filter</b>
      <select
        className="bg-white text-primary rounded-full p-2"
        name="filterType"
        id="filterType"
        onChange={(e) => handleFilterType(e)}
      >
        <option value="all">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterContinent;
