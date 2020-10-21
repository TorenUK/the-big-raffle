import React from "react";

// components
import "./Product.css";

// other
import { Button } from "@material-ui/core";

//redux
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../features/basketSlice";

const Product = ({ name, image, price, id, notify }) => {
  const dispatch = useDispatch();

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
            dispatch(
              addToBasket({
                name: name,
                image: image,
                price: price,
                id: id,
              })
            );
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
