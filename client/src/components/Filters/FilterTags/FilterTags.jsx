import { useDispatch } from "react-redux";
import { searchTourTags } from "../../../redux/tourStore/toursActions";
import { styles } from "../../styles";


const FilterTags = () => {
  const dispatch = useDispatch();

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTourTags(e.target.name));
  };

  return (
    <div className="flex flex-col items-center p-5 rounded-full bg-primary">
      <div className="flex justify-center items-center text-white pb-4">
        <b>Filter by the 10 most searched tags</b>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <button
          type="submit"
          name="expedition"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Expedition
        </button>
        <button
          type="submit"
          name="adventure"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Adventure
        </button>
        <button
          type="submit"
          name="marine"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Marine
        </button>
        <button
          type="submit"
          name="Tour"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Tour
        </button>
        <button
          type="submit"
          name="Discovery"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Discovery
        </button>
        <button
          type="submit"
          name="exploration"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Exploration
        </button>
        <button
          type="submit"
          name="summer"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Summer
        </button>
        <button
          type="submit"
          name="Autumn"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Autumn
        </button>
        <button
          type="submit"
          name="Spring"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Spring
        </button>
        <button
          type="submit"
          name="nature"
          className={styles.tagButton}
          onClick={(e) => handleButtonSubmit(e)}
        >
          #Nature
        </button>
      </div>
    </div>
  );
};

export default FilterTags;
