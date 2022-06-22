import React from "react";
import Footer from "../Footer/Footer";
import Product from "../Products/Products";

export default function Products() {
  return (
    <>
      <div className="products" style={{marginTop: "150px"}}>
        <h1>Products</h1>
      </div>

      <Product />
      <Footer />
    </>
  );
}
