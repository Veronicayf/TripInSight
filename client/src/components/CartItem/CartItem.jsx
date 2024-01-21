import React from "react";

const CartItem = ({ product, quantity, handleDecrease, handleIncrease }) => {
  return (
    <div className="py-3 flex flex-row items-center">
      <div className="w-2/4 flex h-26 items-center justify-around">
        {/* Use the product image from the Redux store */}
        <img src={product.image} className="h-24 rounded-full" alt="" />
        <b>{product.nameTour}</b>
      </div>
      <div className="w-1/4 h-26 flex justify-center ">
        <button
          onClick={handleDecrease}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l"
        >
          -
        </button>
        <span className="bg-white px-4 py-2 border-t border-b text-gray-700">
          {quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r"
        >
          +
        </button>
      </div>
      <div className=" w-1/4 flex justify-center item-center">
        <b>${product.price}</b>
      </div>
    </div>
  );
};

export default CartItem;
