import React, { useEffect, useRef } from "react";

// components
import "./Basket.css";
import Sidebar from "./Sidebar";
import BasketProduct from "./BasketProduct";
import Subtotal from "./Subtotal";
import Banner from "./Banner";
import Footer from "./Footer";
import Logo from "./Logo";

// other
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import gsap from "gsap";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";

const Basket = () => {
  const basket = useSelector(selectBasket);

  const container = useRef(null);

  //animation
  useEffect(() => {
    gsap.to(container.current, {
      opacity: 1,
      duration: 0.7,
      ease: "ease-in-out",
    });
  });

  return (
    <>
      <Sidebar />
      <div className="basket">
        <Banner />
        <Logo />
        {basket?.length ? (
          <>
            <div className="basket__header">
              <h1>your cart</h1>
              <p>{basket?.length} ticket(s)</p>
            </div>
            <div ref={container} className="basket__container">
              {basket?.map((product) => (
                <BasketProduct
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  id={product.id}
                  removeButton
                />
              ))}
            </div>
            <div className="basket__subtotal">
              <Subtotal />
            </div>
          </>
        ) : (
          <div className="basket__empty">
            <h1>your cart is empty</h1>
            <Link to="/">
              {" "}
              <Button variant="contained">continue shopping</Button>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Basket;
