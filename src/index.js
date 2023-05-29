import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import Cart from "./components/cart";
import ItemDetailContainer  from './components/ItemDetailContainer/Item.js';
  


const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer/>,
  },
  {
    path:"/item/:id",
    element:<ItemDetailContainer/>
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
