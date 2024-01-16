import React, { useState } from "react";
import Paypal from "../../components/PayPal/PayPal";

const Checkout = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <div>Purchase CheckOut</div>
      <div className="flex-grow my-4 flex items-center justify-center">
        {checkout ? (
          <Paypal />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setCheckout(true);
            }}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
