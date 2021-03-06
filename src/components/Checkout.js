import React, { useEffect, useState, useRef } from "react";

// components
import "./Checkout.css";
import Sidebar from "./Sidebar";
import BasketProduct from "./BasketProduct";
import Banner from "./Banner";
import Footer from "./Footer";
import Subtotal from "./Subtotal";
import Logo from "./Logo";

// other
import axios from "./axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectBasket, emptyBasket } from "../features/basketSlice";
import { addCustomer } from "../features/customerSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  // animation
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        y: 300,
      },
      { opacity: 1, y: 0, duration: 0.5, ease: "ease-in-out" }
    );
  }, []);

  const basket = useSelector(selectBasket);

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, product) => parseInt(product.price) + amount, 0);

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios.post("/create-payment-intent", {
        total: getBasketTotal(basket) * 100,
      });

      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      // get the number of tickets ordered per product & store in new object
      let obj = {};
      let reqId, tickets;

      for (let i = 0; i < basket.length; i++) {
        if (obj[basket[i].dbId]) {
          obj[basket[i].dbId]++;
        } else {
          obj[basket[i].dbId] = 1;
        }
      }

      // obj now has product id and amount of tickets as key:value pairs

      // update number of tickets available in db // also reflected on the frontend

      for (const id in obj) {
        reqId = id;
        tickets = obj[id];

        axios
          .post(`/update/${reqId}`, {
            tickets: tickets,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("err -->", err);
          });
      }

      // add new order to db
      axios
        .post("/orders", {
          basket: basket,
          email: email,
        })

        // destructure and assign the newOrder id from db -- add it to data layer.
        .then((res) => {
          const { _id } = res.data;
          dispatch(addCustomer(_id));
          dispatch(emptyBasket());
          history.push("/order");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Sidebar />
      <div className="checkout">
        <Banner />
        <Logo />
        <div className="checkout__header">
          <h1>checkout</h1>
          <p>{basket?.length} ticket(s)</p>
          <Subtotal showButton={false} />
        </div>
        <div className="checkout__container">
          {basket?.map((product) => (
            <BasketProduct
              name={product.name}
              image={product.image}
              price={product.price}
              id={product.id}
              removeButton={false}
            />
          ))}
        </div>
        <div ref={container} className="checkout__stripe">
          <form id="payment-form" onSubmit={handleSubmit}>
            <input
              required
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />

            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>processing</p> : "pay now"}</span>
            </button>

            {error && <div>{error}</div>}
            {/* Show a success message upon completion */}
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Checkout;
