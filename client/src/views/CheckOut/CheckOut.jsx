import React, { useState } from "react";
import Paypal from "../../components/PayPal/PayPal";

const Checkout = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center sticky">
      <div className="bg-white p-4 shadow-md">
        <div className="text-2xl font-bold mb-4">Purchase Checkout</div>
        <div className="flex items-center justify-center">
          {checkout ? (
            <Paypal />
          ) : (
            <button
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setCheckout(true);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
