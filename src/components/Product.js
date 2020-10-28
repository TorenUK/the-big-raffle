import React from "react";

// components
import "./Product.css";

// other
import { Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

//redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../features/basketSlice";

const Product = ({ name, image, price, tickets, notify, dbId }) => {
  const dispatch = useDispatch();

  return (
    <>
      {tickets > 0 ? (
        <div className="product">
          {tickets < 10 ? (
            <div className="product__low">
              <p>low in stock!</p>
            </div>
          ) : null}

          <div className="product__image">
            <img alt="product" src={image} />
          </div>
          <div className="product__info">
            <h2>{name}</h2>
            <p>
              {" "}
              <span>{tickets}</span> tickets available
            </p>
            <h2>£{price}</h2>
            <Button
              onClick={() => {
                notify(name);
                dispatch(
                  addToBasket({
                    name: name,
                    image: image,
                    price: price,
                    id: uuidv4(),
                    dbId: dbId,
                  })
                );
              }}
              variant="contained"
            >
              add to cart
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Product;
