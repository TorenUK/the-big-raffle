import React from "react";

// components
import "./Basket.css";
import Sidebar from "./Sidebar";
import BasketProduct from "./BasketProduct";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectBasket } from "../features/basketSlice";

const Basket = () => {
  const basket = useSelector(selectBasket);

  return (
    <>
      <Sidebar />
      <div className="basket">
        <div className="basket__banner">
          <p>winners selected weekly -- free uk delivery</p>
        </div>
        <div className="basket__header">
          <h1>your basket</h1>
          <p>{basket?.length} item(s)</p>
        </div>
        <div className="basket__container">
          {basket?.map((product) => (
            <BasketProduct
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
        <div className="basket__footer">
          <p>2020 The Big Raffle All Rights Reserved </p>
        </div>
      </div>
    </>
  );
};

export default Basket;
