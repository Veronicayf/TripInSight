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
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CartItem from "../../components/CartItem/CartItem";

const Cart = ({ tour }) => {
  const cart = useSelector((state) => state.cart);
  cart.map((item) => {
    console.log(item.price);
  });

  const initialQuantity = 0;

  const storedQuantity = localStorage.getItem("cartQuantity");
  const [quantity, setQuantity] = useState(
    storedQuantity ? parseInt(storedQuantity, 10) : initialQuantity
  );

  // Update local storage when the quantity changes
  useEffect(() => {
    localStorage.setItem("cartQuantity", quantity.toString());
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

  const totalPrice = quantity * cart.price;

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
      {/* <-- Cart Section -->*/}
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
            <CartItem
              key={index}
              product={product}
              quantity={quantity}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          ))}
        </div>

        <div className="w-1/3 flex flex-col">
          <OrderSummary totalPrice={totalPrice} />
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
