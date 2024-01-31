import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import iconTrust from "../../assets/icons/iconTrust.png";
import ImageProvisoria1 from "../../assets/img/ciervo1.jpg";
import ImageProvisoria2 from "../../assets/img/paisaje1.jpg";
import ImageProvisoria3 from "../../assets/img/paisaje2.jpg";
import Carousel from "../../components/Carrusel/Carousel";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CartItem from "../../components/CartItem/CartItem";
import { removeTourFromCartAction } from "../../redux/tourStore/toursActions";
import TrustSection from "../../components/TrustSection/TrustSection";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.tour.addCart);
  
  const initialQuantities = cart.reduce((quantities, product) => {
        
    quantities[product.id] = 1;
    
    return quantities;
  }, {});
  
  const [quantities, setQuantities] = useState(initialQuantities);

  //? const handleIncrease = (productId) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [productId]: (prevQuantities[productId] || 0) + 1,
  //   }));
  //   const product = cart.find((p) => p.id === productId);

  //   if(quantities[productId] >= product.places) {
  //     alert('No puedes comprar mas tours de los que hay disponibles');
  //   }

  //   console.log(quantities[productId])
  //   // console.log(product.places);
  //? };

  const handleIncrease = (productId) => {
    setQuantities((prevQuantities) => {
      const product = cart.find((p) => p.id === productId);
  
      if (!product) {
        return prevQuantities;
      }
  
      const currentQuantity = prevQuantities[productId] || 0;
      const newQuantity = Math.min(currentQuantity + 1, product.places);
      
      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  };
  

  const handleDecrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
  };

  const handleRemove = (cart) => {
    dispatch(removeTourFromCartAction(cart));
  };
  // console.log("quantity:", quantities);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * quantities[product.id],
    0
  );

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
    <main className="font-Nunito">
      <Carousel images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]} />
      <div className="text-xl text-secondary-text flex justify-center">
        <b>One more step towards enjoyment</b>
      </div>
      <div className="flex justify-center text-5xl">
        <b>Your</b> <b className="text-primary mx-1">Trip</b>
      </div>
      {/* Cart Section */}
      <section className="flex flex-col lg:flex-row w-full px-7">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 py-7 flex flex-col">
          <div className="text-secondary-text">
            <div className="w-full flex flex-row">
              <div className="w-2/6   flex justify-center">
                <b>Product</b>
              </div>
              <div className=" w-2/6 flex justify-center">
                <b>Quantity</b>
              </div>
              <div className="w-1/4 flex justify-center">
                <b>Price</b>
              </div>
            </div>
          </div>
          {/* Map through the products in the cart and display them */}
          <div>
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <CartItem
                  key={index}
                  product={product}
                  quantity={quantities[product.id] || 1}
                  handleDecrease={() => handleDecrease(product.id)}
                  handleIncrease={() => handleIncrease(product.id)}
                  handleRemove={() => handleRemove(product.id)}
                />
              ))
            ) : (
              <p className="flex justify-center w-full font-bold text-xl bg-primary rounded-full">
                The cart is empty.
              </p>
            )}
          </div>
        </div>
         {/* Order Summary */}
        <div className="w-full lg:w-1/3 flex flex-col mt-5 lg:mt-0 lg:ml-5">
          <OrderSummary totalPrice={totalPrice} quantities={quantities} />
          <div className="flex flex-col items-center mt-5">
            <div className="text-2xl py-3">
              <b>Buy with confidence</b>
            </div>
            {/* Trust icons */}
            <TrustSection
              icon={iconTrust}
              title="Your Happiness is Our Priority"
              description="Trip In Sight takes pride in delivering more than just support — we prioritize your happiness. Our team goes the extra mile to ensure you have an amazing experience from start to finish."
            />
            <TrustSection
              icon={iconTrust}
              title="Customer-Centric Support at Your Fingertips"
              description="Enjoy the convenience of customer-centric support with Trip In Sight. Our team is dedicated to ensuring your satisfaction, making your journey with us even more delightful."
            />
            <TrustSection
              icon={iconTrust}
              title="Exceptional Support Whenever You Need It"
              description="At Trip In Sight, we're committed to providing world-class customer support. Whenever you have a question or need assistance, our dedicated team is here to help you with a smile."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;