import React from "react";

// components
import "./BasketProduct.css";

// other
import { Button } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

// redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/basketSlice";

const BasketProduct = ({ name, image, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img src={image} />
      </div>
      <div className="basketProduct__info">
        <h4>{name}</h4>

        <h3>£{price}</h3>
      </div>
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
    </div>
  );
};

export default BasketProduct;
