import { useState } from "react";
import ProductDetail from "../ProductDetail";
import stories from "../../data/stories";

const ProductHero = ({ current_product }) => {
  return (
    <div className="static-hero flex-column">
      <div className="equal-grid max-width">
      <div style={{ display: "flex", flexDirection: "column" ,justifyContent: "center" }}>
          <h3>{stories[`${current_product}`].title}</h3>
          <h6>{stories[`${current_product}`].code}</h6>
          <p>{stories[`${current_product}`].description}</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/product_4.png" width={"100%"}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
