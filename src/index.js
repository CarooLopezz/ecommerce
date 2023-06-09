
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import './index.css';
import ItemList from "./components/ItemListContainer/ItemList";
import {Link, useParams} from "react-router-dom";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import Item from "./components/ItemList/Item";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDGDN6fFSF_TU0pfLtR0g-SVA7R4AfB_w",
  authDomain: "ecommerce-384ad.firebaseapp.com",
  projectId: "ecommerce-384ad",
  storageBucket: "ecommerce-384ad.appspot.com",
  messagingSenderId: "199533417675",
  appId: "1:199533417675:web:9bc5cfe840181a881ab74e",
  measurementId: "G-DXW2Y03CKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  


const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer/>,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer/>,
  },
  {
  path:"/item/:id",
  element:<Item/>
  },
]);
<route exact path="/"></route>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
);