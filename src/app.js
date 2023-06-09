
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../../ecommerce/src/app";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <app />
  </React.StrictMode>,
  document.getElementById("root")
);
