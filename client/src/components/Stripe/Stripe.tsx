// import React, { useState, useEffect, useRef } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
// import { Button, TextField } from '@mui/material'

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is a public sample test API key.
// // Don’t submit any personally identifiable information in requests made with this key.
// // Sign in to see your own test API key embedded in code samples.
// const stripePromise = loadStripe("pk_test_51Nyu4hJgpjBZ7R6dm26vtw2qC9PAHoWKUVtU0BigtQC4Vnui5fyH5qQKq9ILhEm6cm1b2zEWIQQH2z7APMZew2Og00aMgBsST7");

// export default function Stripe({pay, id}): number {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("http://localhost:3000/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }], amount: pay }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//         {clientSecret && (
//             <Elements options={options} stripe={stripePromise}>
//               <CheckoutForm id={id} clientSecret={clientSecret} />
//             </Elements>
//           )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Nyu4hJgpjBZ7R6dm26vtw2qC9PAHoWKUVtU0BigtQC4Vnui5fyH5qQKq9ILhEm6cm1b2zEWIQQH2z7APMZew2Og00aMgBsST7");

export default function StripeCheckout({pay, id, message, setMessage}) {
  const [clientSecret, setClientSecret] = useState("");
  
  useEffect(() => {
    // replace this with your own server endpoint
    fetch("http://localhost:3000/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}], amount: pay }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const appearance = {
        theme: 'stripe',
    };
  const options = {
      clientSecret,
      appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm pay={pay} message={message} setMessage={setMessage} id={id} />
        </Elements>
      )}
    </div>
  );
}