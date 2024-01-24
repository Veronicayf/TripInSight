import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Paypal() {
  const paypal = useRef();
  const [isButtonRendered, setIsButtonRendered] = useState(false);
  const price = useSelector((state) => state.tour.cartTotal);
  console.log(price);
  useEffect(() => {
    let buttonsInstance;

    const setupPaypalButton = () => {
      buttonsInstance = window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Trip package",
                  amount: {
                    currency_code: "EUR",
                    value: price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    };

    if (!isButtonRendered) {
      setupPaypalButton();
      setIsButtonRendered(true);
    }

    return () => {
      // Cleanup when component is unmounted
      if (buttonsInstance && typeof buttonsInstance.close === "function") {
        buttonsInstance.close();
      }
    };
  }, [isButtonRendered]);

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return <main ref={paypal}></main>;
}

console.log(Paypal);
