import React from "react";
import { useSelector } from "react-redux";

// components
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
