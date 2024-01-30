import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { clearCart } from "../../redux/tourStore/toursActions";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

const Checkout = () => {
  const dispatchACT = useDispatch();
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState("DEFAULT");
  const [buttonKey, setButtonKey] = useState(0);
  const price = useSelector((state) => state.tour.cartTotal);
  const cart = useSelector((state) => state.tour.addCart);
  const userCart = useSelector((state) => state.user.userProfile);
  const quantities = useSelector((state) => state.tour.quantityCart);

  const newArr = [];

  cart.forEach((element) => {
    newArr.push({
      tourId: element.id,
      userId: userCart.id,
      tickets: quantities[element.id],
      initialDate: element.initialDate,
      equipment: element.equipment,
      status: true,
      detail: "tour bonito",
      totalPrice: quantities[element.id] * element.price,
    });
  });

  console.table(newArr);
  console.log("El total de lo que va a pagar el cliente", price);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
    setButtonKey((prevKey) => prevKey + 1);
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

  const sendCartDataToBackend = () => {
    for (const t of newArr) {
      axios
        .post("http://localhost:4000/purchased", t)
        .then((response) => {
          console.log("Cart data sent to the backend: ", response.data);
        })
        .catch((error) => {
          console.error("Error sending cart data to the backend: ", error);
        });
    }
    console.log("1:", newArr);
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;

      // Use Sweetalert instead of alert
      Swal.fire({
        title: `Transaction completed by ${name}`,
        icon: "success",
        showConfirmButton: false,
        timer: 2000, // Set the duration of the success message
      });

      sendCartDataToBackend();

      // Dispatch the clearCart action
      dispatchACT(clearCart());

      // Redirect the user to the home page
      window.location.href = "/";
    });
  };

  /* useEffect(() => {
    console.log("currency change:", currency);
  }, [currency]); */

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
              {/* Use the key prop to trigger re-render */}
              <PayPalButtons
                createOrder={onCreateOrder}
                onApprove={onApproveOrder}
                options={{ ...options, currency }}
                forceReRender={[buttonKey]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
