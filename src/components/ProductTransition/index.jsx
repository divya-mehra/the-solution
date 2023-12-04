import "./index.scss";
import { useEffect, useRef } from "react";

const ProductTransition = ({ props }) => {
  const imageRefs = Array.from({ length: 62 });


  return (
        <div className="transitionImageContainer">
      {imageRefs.map((imageRef, index) => (
        <img
          key={index}
          class="transitionImage"
          src= {`/assets/animate/comp_${index + 100}.png`}
          style={{ opacity: 0, transition: 'opacity 0.5s' }}
        ></img>
      ))}
      </div>
    
  );
};

export default ProductTransition;
