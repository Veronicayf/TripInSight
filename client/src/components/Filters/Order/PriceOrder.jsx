import { useDispatch } from "react-redux";
import { sortToursPrice } from "../../../redux/tourStore/toursActions";

const PriceOrder = () => {
  const dispatch = useDispatch();

  const handleOrderPrice = (e) => {
    e.preventDefault();
    dispatch(sortToursPrice(e.target.value));
  };

  return (
    <div className="w-48 flex flex-col items-center justify-center p-5 rounded-full bg-primary order-2">
      <b className="mb-3">Order by Price</b>
      <select
        className="bg-white text-primary rounded-full p-2"
        name="orderPrice"
        id="orderPrice"
        defaultValue="asc"
        onChange={(e) => handleOrderPrice(e)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default PriceOrder;
