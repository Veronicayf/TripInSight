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
  const [currency, setCurrency] = useState(options.currency);
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
        .post("https://tripinsight.onrender.com/purchased", t)
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
      /* const name = details.payer.name.given_name;
       */
      // Use Sweetalert instead of alert
      Swal.fire({
        title: "Transaction completed!",
        icon: "success",
        showConfirmButton: true,
        timer: 2000, // Set the duration of the success message
      });

      // Send cart data to backend
      sendCartDataToBackend()
        .then(() => {
          // Dispatch the clearCart action
          dispatchACT(clearCart());

          // Redirect the user to the home page
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error sending cart data to the backend: ", error);
          // Handle error, e.g., show an error message to the user
        });
    });
  };

  /* useEffect(() => {
    console.log("currency change:", currency);
  }, [currency]); */

  return (
    <div className="checkout flex items-center justify-center min-h-screen text-center z-0 shadow-md rounded-md">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <div className="container mx-auto p-4 ">
          <label className="block mb-2 font-bold text-lg">
            Choose your preferred currency:
          </label>
          <select
            value={currency}
            onChange={onCurrencyChange}
            className="mb-4 p-2 border border-gray-300 rounded justify-center"
          >
            {/* <option value="USD">💵 USD</option> */}
            <option value="EUR">💶 Euro</option>
          </select>
          <div className="flex flex-row items-center justify-center mb-2">
            <label className="block font-bold text-lg">Total</label>
            <label className="text-primary mx-1 block font-bold text-lg">
              amount:
            </label>
          </div>
          <p className="text-xl font-bold mb-4">
            {price} {currency}
          </p>

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
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => {
              // Show confirmation alert
              Swal.fire({
                title: "Cancel Purchase",
                text: "Are you sure you want to cancel the purchase? This will delete everything in your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, go back",
              }).then((result) => {
                if (result.isConfirmed) {
                  // Clear the cart
                  dispatchACT(clearCart());

                  // Redirect the user to the home page
                  window.location.href = "/";
                }
              });
            }}
          >
            Cancel Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
