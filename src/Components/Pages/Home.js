import React from "react";
import Footer from "../Footer/Footer";
import Category from "./Category";



export default function Home() {
  return (
    <>
    <div className="home" style={{marginTop: "150px"}}>
      
     <div>
     <span>{"Carousel"}</span>
     <Category />
     </div>
     
    </div>
    <Footer />
    </>
  );
}