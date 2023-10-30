// import React, { useEffect, useState } from "react";
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements,
//   CardElement
// } from "@stripe/react-stripe-js";
// import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'

// export default function CheckoutForm({id, clientSecret}) {
//   const stripe = useStripe();
//   const elements = useElements();
  
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [open, openchange] = useState(false);
//   const openopen = () => {
//     openchange(true)
//   };
//   const closepopup = () => openchange(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//       switch (paymentIntent.status) {
//         case "succeeded":
//           setMessage("Оплата прошла");
//           // fetch('http://localhost:3000/lk/document' , {
//           //   method: 'PATCH',
//           //   headers: {'Content-Type': 'application/json'},
//           //   body: JSON.stringify({id}),
//           // });
//           break;
//         case "processing":
//           setMessage("Your payment is processing.");
//           break;
//         case "requires_payment_method":
//           setMessage("Your payment was not successful, please try again.");
//           break;
//         default:
//           setMessage("Something went wrong.");
//           break;
//       }
//     });
//   }, [stripe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }
//     setIsLoading(true);
//     openopen();
//     setTimeout(() => {
//     }, 20000);
//     // setMessage("Оплата прошла");
//     // const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {payment_method: {card: elements.getElement(CardElement)}})
//     // setMessage(paymentIntent.id, paymentIntent?.status)
//     const {error} = await stripe.confirmPayment(
//       {
//       elements,
//       confirmParams: {
//         return_url: "http://localhost:5173/profileUser",
//       },
//     }
//     );
    
//     // This point will only be reached if there is an immediate error when
//     if (error.type === "card_error" || error.type === "validation_error") {
//       setMessage(error.message);
//     } else {
//       setMessage("An unexpected error occurred.");
//     }
//     // confirming the payment. Otherwise, your customer will be redirected to
//     // your `return_url`. For some payment methods like iDEAL, your customer will
//     // be redirected to an intermediate site first to authorize the payment, then
//     // redirected to the `return_url`.
//     setIsLoading(false);
//   };

//   const paymentElementOptions = {
//     layout: "tabs"
//   }

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <LinkAuthenticationElement
//         id="link-authentication-element"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <PaymentElement id="payment-element" options={paymentElementOptions} />
//       <button disabled={isLoading || !stripe || !elements} id="submit">
//         <span id="button-text">
//           {isLoading ? <div className="spinner" id="spinner"></div> : "Оплатить"}
//         </span>
//       </button>
//       <Dialog open={open} onClose={closepopup}> 
//           <DialogContent>
//             <DialogContentText>
//             {message && <div id="payment-message">{message}</div>}
//             </DialogContentText>
//             </DialogContent>
//           <DialogActions>
//             <Button variant='contained' onClick={closepopup}>Закрыть</Button>
//           </DialogActions>
//         </Dialog> 
//     </form>
//   );
// }

import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";

export default function CheckoutForm({pay, message, setMessage, id}) {
  const stripe = useStripe();
  const elements = useElements();
  const [open, openchange] = useState(false);
  const openopen = () => {
    openchange(true)
  };
  const closepopup = () => openchange(false);

  // const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setMessage(paymentIntent.status === "succeeded" ? "Оплата прошла" : "Неизвестная ошибка");
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  //   stripe.confirmCardPayment('pk_test_51Nyu4hJgpjBZ7R6dm26vtw2qC9PAHoWKUVtU0BigtQC4Vnui5fyH5qQKq9ILhEm6cm1b2zEWIQQH2z7APMZew2Og00aMgBsST7', {
  //   payment_method: {
  //     card: elements.getElement(
  //       CardNumberElement
  //     ),
  //     billing_details: {
  //       name: 'Jenny Rosen',
  //     },
  //   },
  // })
  // .then(function(result) {
  //   console.log(result);
    
  // });
    setTimeout(() => {
    }, 200000);
    setMessage('Оплата прошла')
    const {error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/profileUser",
      },
      redirect: 'if_required',
    })
    openopen()
    if (error && (error.type === "card_error" || error.type === "validation_error")) {
      setMessage(error.message);
    } else if ( paymentIntent?.status === 'succeeded'){
      setMessage('Выполнено')
      fetch('http://localhost:3000/lk/document' , {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id}),
          });
      window.location = '/profileUser';
    }
    console.log(message);
    
  };
  console.log(message);
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-black mb-4">{`Сумма к оплате ${pay}`}</p>
      <PaymentElement />
      <button className='bg-black rounded-xl text-white p-2 mt-6 mb-2' disabled={ !stripe || !elements}>
        {'Оплатить'}
      </button>
      <Dialog open={open} onClose={closepopup}> 
          <DialogContent>
            <DialogContentText>
            {message && <>{message}</>}
           </DialogContentText>
            </DialogContent>
         <DialogActions>
           <Button variant='contained' onClick={closepopup}>Закрыть</Button>
          </DialogActions>
         </Dialog> 
    </form>
  );
}