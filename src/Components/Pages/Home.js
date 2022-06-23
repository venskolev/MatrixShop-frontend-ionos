import React from "react";
import Carousels from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Category from "./Category";



export default function Home() {
  return (
    <>
    <div className="home" style={{marginTop: "150px"}}>
      
     <div>
     <Carousels />
     <Category />
     </div>
     
    </div>
    <Footer />
    </>
  );
}