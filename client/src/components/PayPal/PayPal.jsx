import React, { useRef, useEffect, useState } from "react";

export default function Paypal() {
  const paypal = useRef();
  const [isButtonRendered, setIsButtonRendered] = useState(false);

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
                  description: "A trip to Spain",
                  amount: {
                    currency_code: "EUR",
                    value: 1,
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

  return <main ref={paypal}></main>;
}

console.log(Paypal);
