// import React,{useEffect, useState} from 'react'

// import { BitcoinPaymentButton } from 'react-bitcoin-payment-button'

// const FmainTwo = () => {
//   return (
//    <BitcoinPaymentButton
   
//    onClick={makePayement}>
//     pay_now
//    </BitcoinPaymentButton>
//   )
// }

// export default FmainTwo
//////////////////////////////////////////////////////////
import React,{useEffect,useState}from 'react'

export default function Fmaintwo() {

  const [Payment, setPayment] = useState({
    request_id : "",
    order_id: "",
   
    currency: "",
    price: "",
  });
  const[loading, setLoading] = useState(false);
  useEffect(() =>{
    initialize();
  }, []);
  const initialize = () =>{
    let order_id = "";
    let payer_id= "";
    let Request_key="";
    let Bitpay ={};

    Bitpay.body = {
      "requestType" : "Payment",
      "payer_id":payer_id,
      "order_id" : order_id,
      "Request_key": Request_key,
      "CALLbackUrl" :"",
      Price: {
        "Amount": "",
        "currency": ""
      },
      Payer_ID : payer_id,      }

    };

    const makePayment = () =>{
      setLoading(true);
      var details = {
        "data" : {
          "orderID": Payment.order_id,
          "Request_key": Payment.request_id,
          "currency": Payment.currency,
          "Amount": Payment.price,
  
         },

         "merchant":{
          
          ""
         }
      } 
    };

  

  return (
    <div>
      <button type="submit" onClick={makePayment}>submit</button>

    </div>
  )
}
