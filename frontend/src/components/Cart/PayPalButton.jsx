import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
          // "AQ6FXU5Ypp3PTsmt3YXjxHxEYvLMRdEw4tILT3c4O8JjwDZXzJGT7h5QOD9MKHoFFO2W4zmSQddKTgg0",
         
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              { amount: { currency_code: "USD", value: parseFloat(amount).toFixed(2) } },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
