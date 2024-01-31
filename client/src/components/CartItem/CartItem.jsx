import React from "react";

const CartItem = ({
  product,
  quantity,
  handleDecrease,
  handleIncrease,
  handleRemove,
}) => {
  return (
    <div className="py-3 flex flex-row items-center">
      <div className="w-2/6 lg:1/4 flex h-26 items-center justify-between lg:px-4">
        {/* Use the product image from the Redux store */}
        <img
          src={product.image}
          className="h-10 w-10 lg:h-20 lg:w-20 rounded-full"
          alt=""
        />
        <b className="text-center">{product.nameTour}</b>
      </div>
      <div className="w-3/6 lg:1/4 lg:h-26 flex justify-center ">
        <button
          onClick={handleDecrease}
          className="bg-gray-300 lg:px-4 lg:py-2  px-1 rounded-l"
        >
          <span className=" text-red-500 material-symbols-outlined">
            remove
          </span>
        </button>
        <span className="bg-white lg:px-4 lg:py-2 p-2 border-t border-b text-gray-700">
          {quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="bg-gray-300 text-gray-700 lg:px-4 lg:py-2 px-1 rounded-r"
        >
          <span className=" text-primary material-symbols-outlined">add</span>
        </button>
      </div>
      <div className=" w-1/6 flex justify-center item-center">
        <b>${product.price}</b>
      </div>
      <div className="w-1/6 lg:1/4 flex justify-center items-center">
        <button onClick={handleRemove}>
          <span className=" text-red-500 material-symbols-outlined">
            delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
