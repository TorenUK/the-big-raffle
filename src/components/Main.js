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

  const notify = (name) => toast.dark(` 1 ${name} ticket added to cart`);

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
      duration: 0.7,
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
          <p>Win luxury items & cash prizes</p>
        </div>
        <div className="main__p">
          <p>All items 100% authentic</p>
        </div>
        <div className="main__p">
          <p>Dispatch: 1-2 working days</p>
        </div>
      </div>
      <div ref={container} className="main__container">
        {products.map((product) => (
          <Product
            key={Math.random()}
            notify={notify}
            name={product.name}
            image={product.image}
            price={product.price}
            tickets={product.tickets}
          />
        ))}
        <ToastContainer
          position="bottom-left"
          autoClose={2700}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
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
