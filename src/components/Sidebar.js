import React, { useEffect, useRef } from "react";

// components
import "./Sidebar.css";

// other
import gsap from "gsap";
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
  const spinner = useRef(null);

  const basket = useSelector(selectBasket);

  //animation
  useEffect(() => {
    gsap.to(spinner.current, {
      rotate: 360 * 6,
      opacity: 1,
      duration: 4,
      delay: 0.2,
      ease: "ease-in",
    });
  });

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* <h1>The Big Raffle</h1>
        <div className="spinner">
          <img alt="spinner" ref={spinner} src="./spin-wheel.png" />
        </div> */}
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
