import React, { useEffect, useState, useRef } from "react";

// components
import "./Main.css";
import Product from "./Product";

// other
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import axios from "./axios";

const Main = () => {
  const [products, setProducts] = useState([]);

  const notify = (name) => toast.dark(`${name} added to basket`);

  const container = useRef(null);

  // fetch product data from db
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/products");

      setProducts(req.data);
    }

    fetchData();
  }, []);

  //animation
  useEffect(() => {
    gsap.to(container.current, {
      opacity: 1,
      duration: 1,
      ease: "ease-in-out",
    });
  });

  return (
    <div className="main">
      <div className="main__banner">
        <p>winners selected weekly -- free uk delivery</p>
      </div>
      <div className="main__header">
        <div className="main__p">
          <p>hello this is just some example text</p>
        </div>
        <div className="main__p">
          <p>hello this is just some example text</p>
        </div>
        <div className="main__p">
          <p>hello this is just some example text</p>
        </div>
      </div>
      <div ref={container} className="main__container">
        {products.map((product) => (
          <Product
            notify={notify}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div className="main__footer">
        <p>2020 The Big Raffle All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Main;
