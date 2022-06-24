import React from "react";
import Lottie from "lottie-react";

import shoppingBag from "./lottie/shopping-bag.json";
import "../../sass/NavCategory.scss"

export default function CategoryNav() {
  return (
    <>
    <div className="Category">
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      <figure>
        <Lottie
          animationData={shoppingBag}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Category</figcaption>
      </figure>
      </div>
    </>
  );
}
