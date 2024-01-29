import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";

const Checkout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const price = useSelector((state) => state.tour.cartTotal);
  const cart = useSelector((state) => state.tour.addCart);
  const userCart = useSelector((state) => state.user.userProfile);
  const quantities = useSelector((state) => state.tour.quantityCart);
  const cartData = {
    userId: userCart.id,
    tourId: cart.map((item) => item.id),
    initialDate: cart.map((item) => item.initialDate),
    equipment: cart.map((item) => item.equipment),
    detail: "o tour bonito",
    status: true,
    totalPrice: price,
    tickets: quantities,
  };
  console.log("cartData:", cartData);
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };
  const sendCartDataToBackend = (cartData) => {
    // Make an HTTP request to your backend endpoint to save cartData
    console.log("1:", cartData);
    axios
      .post("http://localhost:4000/purchased", cartData)
      .then((response) => {
        console.log("Cart data sent to the backend: ", response.data);
      })
      .catch((error) => {
        console.error("Error sending cart data to the backend: ", error);
      });
  };
  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);

      // Assuming you have a function to send cart data to the backend
      sendCartDataToBackend(cartData);
    });
  };

  return (
    <div className="checkout flex items-center justify-center min-h-screen text-center z-0">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <div className="container mx-auto p-4">
          <select
            value={currency}
            onChange={onCurrencyChange}
            className="mb-4 p-2 border border-gray-300 rounded justify-center"
          >
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
          </select>

          <div className="flex items-center justify-center">
            {/* Surround PayPalButtons with a container for centering */}
            <div className="text-center">
              <PayPalButtons
                style={{ layout: "vertical", height: 55, width: 180 }} // Adjust the width value
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
