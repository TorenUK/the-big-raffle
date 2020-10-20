import React from "react";

// components
import "./BasketProduct.css";

const BasketProduct = ({ name, image, price }) => {
  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img src={image} />
      </div>
      <div className="basketProduct__info">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default BasketProduct;
