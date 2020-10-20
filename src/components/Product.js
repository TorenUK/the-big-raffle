import React from "react";

// components
import "./Product.css";

// other
import { Button } from "@material-ui/core";

const Product = ({ name, image, price, notify }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} />
      </div>
      <div className="product__info">
        <h2>{name}</h2>
        <h2>£{price}</h2>
        <Button
          onClick={() => {
            notify(name);
          }}
          variant="contained"
        >
          add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
