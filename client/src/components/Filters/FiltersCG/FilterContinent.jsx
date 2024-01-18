import { useDispatch, useSelector } from "react-redux";
import {
  filterContinent,
  getAllT,
} from "../../../redux/tourStore/toursActions";
import { useEffect } from "react";

const FilterContinent = () => {
  const dispatch = useDispatch();

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterContinent(e.target.value));
  };

  return (
    <div className="flex flex-col justify-items-center justify-center items-center min-w-fit bg-green-300 gap-3 p-5 rounded-full">
      <b>Contienent Filter</b>
      <select
        className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
        name="filterType"
        id="filterType"
        onChange={(e) => handleFilterType(e)}
      >
        <option
          className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
          value="North America"
        >
          North America
        </option>
        <option
          className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
          value="South America"
        >
          South America
        </option>
        <option
          className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
          value="Asia"
        >
          Asia
        </option>
        <option
          className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
          value="Europe"
        >
          Europe
        </option>
        <option
          className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
          value="Oceania"
        >
          Oceania
        </option>
      </select>
    </div>
  );
};

export default FilterContinent;

{
  /* {continents?.map((t, i) => {
                  return (
                    <option 
                    className="bg-green-600 text-white flex flex-row rounded-full items-center gap-3 p-1.5"
                    value={t.continent} key={i}
                    >
                      {t.continent.charAt(0).toUpperCase() + t.continent.slice(1)}
                    </option>
                  );
                })} */
}
