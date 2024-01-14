import { useDispatch } from "react-redux";

const Card = ({ tour }) => {


  return (
    <div className="flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={tour.image}
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-primary">{tour.nameTour}</p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
            {tour.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
