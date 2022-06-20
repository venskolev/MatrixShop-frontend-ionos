import React from "react";
import "./styles.css";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Impressum from "./Components/Pages/Impressum";
import Login from "./Components/Pages/Login";
import Category from "./Components/Pages/Category";
import ShoppingCard from "./Components/Pages/ShoppingCard";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Header";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shoppingcard" element={<ShoppingCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Router>
    </div>
  );
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setDataUsers] = useState([]);
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API}`);
//         setDataUsers(response.data);
//       } catch (err) {
//         console.log(err);
        
//       }
//     };
//     loadData();
//   }, []);
 
//   return (
//     <>
//     <h1>Matrix Shop</h1>
    
//     {JSON.stringify(data)}
//     </>
//   );
// }

// export default App;
