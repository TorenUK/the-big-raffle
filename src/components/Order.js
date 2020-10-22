import React from "react";

// components
import "./Order.css";
import Sidebar from "./Sidebar";

// other

const Order = () => {
  return (
    <>
      <Sidebar />
      <div className="order">
        <div className="order__banner">
          <p>winners selected weekly -- free uk delivery</p>
        </div>
        <div className="order__header">
          <h1>thanks for your order!</h1>
        </div>
        <div className="order__container"></div>
        <div className="order__footer">
          <p>2020 The Big Raffle All Rights Reserved </p>
        </div>
      </div>
    </>
  );
};

export default Order;
