import { useDispatch } from "react-redux";
import { sortToursPrice } from "../../../redux/tourStore/toursActions";

const PriceOrder = () => {
  const dispatch = useDispatch();

  const handleOrderPrice = (e) => {
    e.preventDefault();
    dispatch(sortToursPrice(e.target.value))
  };

  return (
    <div className="flex flex-col justify-items-center justify-center items-center min-w-fit bg-green-300 gap-3 p-5 rounded-full">
      <b>Order by Price</b>
      <select
        className="bg-primary text-white flex flex-row rounded-full items-center gap-3 p-1.5"
        name="orderPrice"
        id="orderPrice"
        defaultValue="asc"
        onChange={(e) => handleOrderPrice(e)}
      >
        <option className="bg-primary text-white" value="asc">
          Low to High
        </option>
        <option className="bg-primary text-white" value="desc">
          High to Low
        </option>
      </select>
    </div>
  );
};

export default PriceOrder;
