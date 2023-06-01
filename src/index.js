import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import Cart from "./components/cart";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ItemList from "./components/ItemListContainer/ItemList";


// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
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
const analytics = getAnalytics(app);
  


const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer/>,
  },
  {
    path: "/category/:category",
    element: <ItemListContainer/>,
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
