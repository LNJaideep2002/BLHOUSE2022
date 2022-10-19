import React from 'react';
import css from "./Checkout.module.css";
import { Ordersapi, Paymentapi, Successpaymentapi, Deletecartapi } from "../../Api/Apifunctions";
function Checkoutmain(props) {
  console.log(props);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // creating a new order
      const result = await Ordersapi({ price: 100 });

      if (!result) {
        alert("Server error. Are you online?");
        return;
      }

      // Getting the order details back
      const { amount, id: order_id, currency } = result;

      const options = {
        key: "rzp_test_n4PhVWM5ex6rNg", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Formfillups",
        description: "Buying Subscription",
        image: "",
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            amount: amount.toString(),
            currency: currency,
          };

          const result = await Paymentapi(data);
          console.log(result)
          if (result.msg === "success") {
            const response = await Successpaymentapi({ UserID: props.userID, name: props.bag.name, orderID: result.orderId, currentbag: props.currentbag, price: props.bag.price });
            const response1 = await Deletecartapi({ ID: props.userID, name: props.bag.name });
            props.dispatch({ type: "deletebag", payload: response1.Data });
            props.history.push("/");
          }
          alert("Order Placed Sucessfully");
        },
        prefill: {
          name: null,
          email: null,
          contact: null,
        },
        notes: {
          address: null,
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={css.outer}>
      {props.bag !== undefined ? <div>
        <p className={css.head}>Checkout</p>
        <div className={css.cartsubcard}>
          <img className={css.img} style={{ margin: '0.5vw 0vw 0.5vw 2vw', float: 'left', width: '10vw' }} src={props.bag.image} alt="" />
          <div className={css.cartname}>
            <p style={{ margin: '0.5vw 0vw 1vw 0vw' }} className={css.name}>{props.bag.name}</p>
            <p className={css.content}>Price : {props.bag.price}</p>
            <p className={css.content}>No of items: {props.bag.noofitems}</p>
          </div>
        </div>
        <p className={css.delivered}>Pick UP {`&`} Deliver from {`-->`}</p>
        <div className={css.addresscard}>
          <p><span className={css.address}>Address:</span>{props.address}</p>
        </div>
        <button onClick={displayRazorpay} className={css.button}>Pay</button>
      </div> : null}
    </div>
  )
}

export default Checkoutmain;