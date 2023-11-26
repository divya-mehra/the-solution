import { useState } from "react";
import ProductDetail from "../ProductDetail";
import stories from "../../data/stories";

const ProductHero = ({current_product}) => {
  const [showTextCover, setShowTextCover] = useState(false);

  const mouseOverHandler = () => {
    setShowTextCover(true);
  };

  const mouseOutHandler = () => {
    setShowTextCover(false);
  };

  return (
    <div className="static-hero flex-column">
       <div className="equal-grid">
      <ProductDetail
                title={stories[`${current_product}`].title}
                code={stories[`${current_product}`].code}
                description={stories[`${current_product}`].description}
              />
              <div></div>

      </div>

    </div>
  );
};

export default ProductHero;
