import React, { useState } from "react";
import Axios from "axios";

function loadScript(src) {
  return new Promise(resolve => {
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

// const __DEV__ = document.domain === "localhost";

export default function Payment(props) {
  const [name, setName] = useState("");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // const data = await fetch("http://localhost:3000/razorpay", {
    //   method: "POST"
    // }).then(t => t.json());
    var data;
    Axios.post(
      "/api/v1/users/razorpay",
      { amount: props.total },
      {
        headers: { authorization: JSON.parse(localStorage.gcoin).token }
      }
    ).then(res => {
      console.log(res.data, "from razor pay");
      var data = res.data;
      const options = {
        // rzp_test_rY1XQ0DedceJoN my id
        // rzp_test_uGoq5ABJztRAhk
        key: "rzp_live_s0He37vgdGkYPE",
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: "Donation",
        description: "Thank you for nothing. Please give us some money",
        image: "",
        handler: function(response) {
          console.log(response, "its a response");
          Axios.post(
            "/api/v1/users/paymentdone",
            { amount: props.total, items: props.items },
            {
              headers: { authorization: JSON.parse(localStorage.gcoin).token }
            }
          ).then(res => {
            alert(
              "Payment successful, this is your Payment Id" +
                response.razorpay_payment_id
            );
            props.emptyCart();
          });
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: "",
          email: "",
          phone_number: ""
        }
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link btn btn-success btn-lg btn-block"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          Pay {props.total}
        </a>
      </header>
    </div>
  );
}
