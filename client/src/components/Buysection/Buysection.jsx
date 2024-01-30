import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconCart from "../../assets/icons/cartIcon.png";
import iconFav from "../../assets/icons/favoriteIcon.png";
import iconPrice from "../../assets/icons/PriceIcon.png";
import iconpeople from "../../assets/icons/peopleIcon.png";
import { addTourCart } from "../../redux/tourStore/toursActions";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import {
  addFav,
  getAllFav,
  removeFav,
} from "../../redux/userStore/usersActions";

const Buysection = ({ tour }) => {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const tourDetail = useSelector((state) => state.tour.detail);
  const favsUser = useSelector((state) => state.user.favorites);
  const favsTourIds = favsUser.map((fav) => fav.tourId);
  const tourFav = favsTourIds.includes(tourDetail.id);
  const [isFav, setIsFav] = useState(true);

  const handleAddToCart = () => {
    try {
      // Retrieve the cart from local storage
      const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the tour is already in the cart
      const isTourInCart = cartFromStorage.some(
        (item) => item.id === tourDetail.id
      );

      if (isTourInCart) {
        // Display a SweetAlert indicating that the tour is already in the cart
        Swal.fire({
          icon: "warning",
          title: "Tour already in cart!",
          text: "You cannot add the same tour to the cart again.",
        });
      } else {
        // Dispatch the action to add the tour to the cart
        dispatch(addTourCart(tourDetail));

        // Update local storage with the updated cart
        const updatedCart = [...cartFromStorage, tourDetail];
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        Swal.fire({
          icon: "success",
          title: "Product added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);

      Swal.fire({
        icon: "error",
        title: "Error adding product to cart",
        text: "Please try again later",
      });
    }
  };

  console.log(JSON.parse(localStorage.getItem("cart")));
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleFavorite = () => {
    if (tourFav && isFav) {
      dispatch(removeFav(tourDetail.id, profile.id));
      setIsFav(false);
      Swal.fire({
        icon: "error",
        title: "Tour removed from favorites!",
      });
    } else {
      dispatch(addFav(tourDetail.id, profile.id));
      setIsFav(true);
      Swal.fire({
        icon: "success",
        title: "Tour added to favorites!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFav]);

  return (
    <div
      className={`fixed top-1/2 right-3 transform -translate-y-1/2 bg-primary text-white w-1/4 border border-seconday-text rounded-[50px] shadow-md transition-transform duration-300 ${
        isSticky ? "translate-y-0" : ""
      }`}
    >
      <div className="flex-col justify-center">
        <div className="w-full">
          <h2 className="mt-2 text-3xl py-2 font-semibold flex items-center justify-center">
            PRICE
          </h2>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <i className="h-12 flex items-center justify-center">
            <img className="h-12 w-12" src={iconPrice} alt="icon" />
          </i>
          <b className="text-6xl py-5 font-Bebas flex justify-center items-center">{`$${tour.price}`}</b>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <i className="h-10 flex items-center justify-center bg-white rounded-full">
            <img className="h-10 w-10" src={iconpeople} alt="icon" />
          </i>
          <b className="text-2xl py-5 flex justify-center items-center">
            Available places: {tourDetail.places}
          </b>
        </div>
        <div className="w-full">
          {tourDetail.places === 0 ? (
            <b className="text-2xl py-5 bg-red-600 text-white italic flex justify-center items-center">
              SOLD OUT!
            </b>
          ) : (
            <button
              className="text-primary bg-white w-full py-2 mb-2 rounded flex items-center justify-center hover:bg-btn-hover hover:text-white"
              onClick={handleAddToCart}
            >
              <i className="h-12">
                <img className="h-10 w-10" src={iconCart} alt="icon" />
              </i>
              <b className="ml-2">Add to Cart</b>
            </button>
          )}
        </div>
        <div>
          <button
            className="text-white bg-primary w-full py-2  rounded-br-[50px]  rounded-bl-[50px] flex items-center justify-center hover:bg-btn-hover hover:text-white"
            onClick={(e) => handleFavorite(e)}
          >
            {tourFav && isFav ? (
              <div className="flex flex-row justify-center items-center">
                <div className=" bg-white rounded-full flex justify-center items-end h-14 w-14">
                  <span className="material-symbols-outlined text-red-500 text-5xl">
                    favorite
                  </span>
                </div>
                {/* <img className="h-10 w-10 rounded-full bg-red-600" src={iconFav} alt="icon" /> */}

                {/* <b className="ml-2">In your favorites!</b> */}
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center">
                <i className="h-12">
                  <img className="h-10 w-10" src={iconFav} alt="icon" />
                </i>
                <b className="ml-2">Add to favorite</b>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

Buysection.propTypes = {};

export default Buysection;
