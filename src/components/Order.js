import React, { useEffect, useState } from "react";

// components
import "./Order.css";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";

// other
import axios from "./axios";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCustomer } from "../features/customerSlice";

const Order = () => {
  const [order, setOrder] = useState([]);

  const customer = useSelector(selectCustomer);

  useEffect(() => {
    // get order details with individual id
    async function getOrder() {
      const res = await axios.get("/order");

      setOrder(res.data);
    }

    getOrder();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="order">
        <Banner />
        <div className="order__header">
          <h1>thanks for your order!</h1>
        </div>
        <div className="order__container"></div>
        <Footer />
      </div>
    </>
  );
};

export default Order;
