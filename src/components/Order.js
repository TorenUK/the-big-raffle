import React, { useState, useEffect } from "react";

// components
import "./Order.css";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";
import BasketProduct from "./BasketProduct";

// other
import axios from "./axios";

// redux
import { useSelector } from "react-redux";
import { selectCustomer } from "../features/customerSlice";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [email, setEmail] = useState("");
  const customer = useSelector(selectCustomer);

  useEffect(() => {
    const fetchOrder = async () => {
      return await axios.get(`/order/${customer}`);
    };

    fetchOrder()
      .then((res) => {
        setEmail(res.data.email);
        setOrder(res.data.order);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Sidebar />
      <div className="order">
        <Banner />
        <div className="order__header">
          <h1>thanks for your order!</h1>
          <p>{email}</p>
          <p>{`order number: ${customer}`}</p>
          <p>{`${order.length} ticket(s)`}</p>
        </div>
        <div className="order__container">
          {order.map((product) => (
            <BasketProduct
              name={product.name}
              image={product.image}
              price={product.price}
              id={product.id}
              removeButton={false}
            />
          ))}
        </div>
        <div className="order__spacer"></div>
        <Footer />
      </div>
    </>
  );
};

export default Order;
