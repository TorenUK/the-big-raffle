import React, { useEffect, useRef } from "react";

// components
import "./Sidebar.css";
import Spinner from "./Spinner";

// other
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";

const Sidebar = () => {
  const basket = useSelector(selectBasket);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Spinner />
      </div>
      <div className="sidebar__nav">
        <Link to="/" className="sidebar__link">
          <HomeOutlinedIcon />
        </Link>
        <Link to="/basket" className="sidebar__link">
          <ShoppingCartOutlinedIcon />
          {basket?.length ? <p>{basket?.length}</p> : null}
        </Link>
        <Link to="#" className="sidebar__link">
          <EmailOutlinedIcon />
        </Link>
      </div>
      <div className="sidebar__bottom">
        <h4>Follow us:</h4>
        <div className="sidebar__icons">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
