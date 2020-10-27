import React from "react";

// components
import "./Subtotal.css";

// other
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";

const Subtotal = ({ showButton }) => {
  const basket = useSelector(selectBasket);

  // calculate basket total
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, product) => parseInt(product.price) + amount, 0);

  return (
    <div className="subtotal">
      <div className="subtotal__total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>
                subtotal: {basket?.length} ticket(s) <strong>{value}</strong>
              </h3>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
      </div>
      {showButton != false ? (
        <div className="subtotal__links">
          <Link to="/checkout">
            <Button variant="outlined">proceed to checkout</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Subtotal;
