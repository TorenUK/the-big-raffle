import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import Order from "./components/Order";

// other
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HCr8zGrO8LMr0aUXQ0OQTnN3yG2EZOvmnm5zs01TjUVekfhGgS3b0WL7BeDxqV97ikJ7DqJR5qaFknoFIx7pnhu00rn1llTud"
);

function App() {
  return (
    // BEM\
    <Router>
      <div className="app">
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              {" "}
              <Checkout />
            </Elements>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Sidebar />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
