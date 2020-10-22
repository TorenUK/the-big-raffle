import React from "react";

// components
import "./BasketProduct.css";

// other
import { Button } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

// redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/basketSlice";

const BasketProduct = ({ name, image, price, id, removeButton }) => {
  const dispatch = useDispatch();

  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img alt="product" src={image} />
      </div>
      <div className="basketProduct__info">
        <h4>{name}</h4>
        <h3>£{price}</h3>
      </div>
      {removeButton ? (
        <div className="basket__interact">
          <Button
            onClick={() => {
              dispatch(
                removeFromBasket({
                  id: id,
                })
              );
            }}
            size="small"
            variant="contained"
          >
            <DeleteForeverOutlinedIcon />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default BasketProduct;
