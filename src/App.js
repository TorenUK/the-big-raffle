import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Basket from "./components/Basket";

function App() {
  return (
    // BEM\
    <Router>
      <div className="app">
        <Switch>
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
