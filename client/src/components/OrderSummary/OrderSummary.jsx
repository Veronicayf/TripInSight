import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTourCart,
  cartTotal,
  cartQuantity,
} from "../../redux/tourStore/toursActions";
import { Link, useNavigate } from "react-router-dom";

const OrderSummary = ({ totalPrice, quantities }) => {
  
  const cart = useSelector( state => state.tour.addCart);
  // console.log(cart);
  // console.log(quantities);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceHandler = async (e) => {
    e.preventDefault();
    // console.log("J:", totalPrice, quantities);
    await dispatch(cartTotal(totalPrice));
    await dispatch(cartQuantity(quantities));
    navigate("/checkout/");
  };

  return (
    <div className=" bg-cream-bg rounded-[50px]">
      <div className="flex justify-center items-center h-20 ">
        <b className=" text-3xl"> Order Summary</b>
      </div>
      <div className="w-full h-1 bg-seconday-text"></div>
      <div className=" h-28 text-xl">
        <div className="w-full flex justify-between h-12 items-center">
          <b className="">Total</b>
          <b>${totalPrice}</b>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-between text-2xl h">
          <b className="">Total</b>
          <b>${totalPrice}</b>
        </div>
      </div>
      <div className="w-full h-1 bg-seconday-text"></div>
      <div>
        <div className="flex justify-center items-center h-14">
          {/* <Link to={"/checkout/"}> */}
          <button
            onClick={(e) => priceHandler(e)}
            className=" w-80 h-12 text-xl bg-primary rounded-full text-white hover:bg-btn-hover"
          >
            Proceed to checkout
          </button>
          {/*  </Link> */}
        </div>
        <div>
          <div className="flex justify-center items-center h-14">
            <button className=" w-80 h-12 text-xl bg-seconday-text rounded-full text-white hover:bg-btn-hover">
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
