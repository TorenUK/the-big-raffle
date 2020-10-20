import React, { useEffect, useState, useRef } from "react";

// components
import "./Sidebar.css";

// other
import gsap from "gsap";
import InstagramIcon from "@material-ui/icons/Instagram";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Sidebar = () => {
  const spinner = useRef(null);

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
        <a href="#" className="sidebar__link">
          <ShoppingCartOutlinedIcon />
        </a>

        <a href="#" className="sidebar__link">
          <InstagramIcon />
        </a>
      </div>
      <div className="sidebar__bottom">
        <h2>sidebar bottom</h2>
        <p>example</p>
      </div>
    </div>
  );
};

export default Sidebar;
