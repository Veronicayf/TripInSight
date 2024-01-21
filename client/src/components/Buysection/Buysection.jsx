import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconCart from "../../assets/icons/cartIcon.png";
import iconFav from "../../assets/icons/favoriteIcon.png";
import iconPrice from "../../assets/icons/PriceIcon.png";
import { addTourCart } from "../../redux/tourStore/toursActions";

const Buysection = ({ tour }) => {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const tourDetail = useSelector((state) => state.tour.detail);
  const handleAddToCart = () => {
    console.log(tourDetail);
    dispatch(
      addTourCart(tourDetail)
      /* addToCart({
        id: tour.id,
        name: tour.nameTour,
        price: tour.price,
        image: tour.image,
      }) */
    );
    console.log("Product added to cart:", {
      id: tour.id,
      name: tour.nameTour,
      price: tour.price,
      image: tour.image,
    });
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 right-3 transform -translate-y-1/2 bg-primary text-white w-1/4 border border-seconday-text rounded-[50px] shadow-md transition-transform duration-300 ${
        isSticky ? "translate-y-0" : ""
      }`}
    >
      <div className="flex-col">
        <div className="w-full">
          <h2 className="mb-2 text-4xl py-2 font-semibold flex items-center justify-center">
            PRICE
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <i className="h-12 flex items-center justify-center">
            <img className="h-16 w-16" src={iconPrice} alt="icon" />
          </i>
          <b className=" mb-2 text-6xl py-4 font-Bebas flex justify-center items-center">{`$ ${tour.price}`}</b>
        </div>
        <div className="w-full ">
          <button
            className="text-primary bg-white w-full py-2 mb-2 rounded flex items-center justify-center hover:bg-btn-hover hover:text-white"
            onClick={handleAddToCart}
          >
            <i className="h-12">
              <img className="h-10 w-10" src={iconCart} alt="icon" />
            </i>
            <b className="ml-2">Add to Cart</b>
          </button>
        </div>
        <div>
          <button className="text-white bg-primary w-full py-2  rounded-br-[50px]  rounded-bl-[50px] flex items-center justify-center hover:bg-btn-hover hover:text-white">
            <i className="h-12">
              <img className="h-10 w-10" src={iconFav} alt="icon" />
            </i>
            <b className="ml-2">Add to favorite</b>
          </button>
        </div>
      </div>
    </div>
  );
};

Buysection.propTypes = {};

export default Buysection;
