import React, { useEffect, useRef } from "react";

// components
import "./Spinner.css";

// other
import gsap from "gsap";

const Spinner = () => {
  const spinner = useRef(null);

  useEffect(() => {
    gsap.timeline().fromTo(
      spinner.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      spinner.current,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        duration: 1.7,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div ref={spinner} className="spinner">
      <img src="./spin-wheel.png" alt="fortune wheel" />
    </div>
  );
};

export default Spinner;
