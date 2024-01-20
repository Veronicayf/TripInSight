import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import iconTrust from "../../assets/icons/iconTrust.png";
import boreal from "../../assets/img/boreal.png";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from "../../components/Carrusel/Carousel";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = ({ tour }) => {
  const initialQuantity = 0;
  const pricePerUnit = 49.99;
  const storedQuantity = localStorage.getItem("cartQuantity");
  const [quantity, setQuantity] = useState(
    storedQuantity ? JSON.parse(storedQuantity) : initialQuantity || 1
  );

  useEffect(() => {
    localStorage.setItem("cartQuantity", JSON.stringify(quantity));
  }, [quantity]);

  // limpiar local storage en la proxima hora
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("cartQuantity");
    }, 60 * 60 * 1000);

    return () => clearTimeout(timeoutId);
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = quantity * pricePerUnit;

  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuthentication = async () => {
      if (!isLoading) {
        if (!isAuthenticated) {
          navigate("/login");
        } else {
          // El usuario está autenticado
          console.log("Usuario autenticado:", user);
        }
      }
    };

    verifyAuthentication();
  }, [isLoading, isAuthenticated, loginWithRedirect, user]);
  const cart = useSelector((state) => state.cart);

  return (
    <main className=" font-Nunito">
      <Carousel
        images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]}
      />

      <div className="text-xl text-seconday-text flex justify-center">
        <b>One more step for enjoy</b>
      </div>
      <div className=" flex justify-center text-5xl">
        <b>Your</b> <b className="text-primary mx-1">Travel</b>
      </div>
      <section className="flex flex-row w-full px-7">
        <div className="w-2/3 py-7 flex flex-col">
          <div id="row" className="text-seconday-text">
            <div className="w-full flex flex-row">
              <div className="w-2/4 flex justify-center">
                <b>Product</b>
              </div>
              <div className="w-1/4  flex justify-center">
                <b>Quantity</b>
              </div>
              <div className="w-1/4  flex justify-center">
                <b>Price</b>
              </div>
            </div>
          </div>
          {/* Map through the products in the cart and display them */}
          {cart.map((product, index) => (
            <div key={index} className="py-3 flex flex-row items-center">
              <div className="w-2/4 flex h-26 items-center justify-around">
                {/* Use the product image from the Redux store */}
                <img src={product.image} className="h-24 rounded-full" alt="" />
                <b>{product.name}</b>
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
                <b>${product.price.toFixed(2)}</b>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 flex flex-col">
          <div className=" bg-cream-bg rounded-[50px]  ">
            <div className="flex justify-center items-center h-20 ">
              <b className=" text-3xl"> Order Summary</b>
            </div>
            <div className="w-full h-1 bg-seconday-text"></div>
            <div className=" h-28 text-xl">
              <div className="w-full flex justify-between h-12 items-center">
                <b className="">Total</b>
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between text-2xl h">
                <b className="">Total</b>
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
            <div className="w-full h-1 bg-seconday-text"></div>
            <div>
              <div className="flex justify-center items-center h-14">
                <Link to={"/checkout/"}>
                  <button className=" w-80 h-12 text-xl bg-primary rounded-full text-white hover:bg-btn-hover">
                    Procced to checkout
                  </button>
                </Link>
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
          <div>
            <div className=" text-2xl py-3">
              <b>Buy with confidence</b>
            </div>
            <div>
              <div className="flex items-center p-1">
                <i className="w-12 h-12">
                  <img src={iconTrust} alt="" />
                </i>
                <div className="w-3/4">
                  <b>World-class customer support. </b>
                  <p>
                    There´s customer support, and them there´s Travel In Sight
                    customer support. We take pride in going above and beyond to
                    keep our community happy
                  </p>
                </div>
              </div>
              <div className="flex items-center p-1">
                <i className="w-12 h-12">
                  <img src={iconTrust} alt="" />
                </i>
                <div className="w-3/4">
                  <b>World-class customer support. </b>
                  <p>
                    There´s customer support, and them there´s Travel In Sight
                    customer support. We take pride in going above and beyond to
                    keep our community happy
                  </p>
                </div>
              </div>
              <div className="flex items-center p-1">
                <i className="w-12 h-12">
                  <img src={iconTrust} alt="" />
                </i>
                <div className="w-3/4">
                  <b>World-class customer support. </b>
                  <p>
                    There´s customer support, and them there´s Travel In Sight
                    customer support. We take pride in going above and beyond to
                    keep our community happy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
