import { useState } from "react";
import P5 from "../P5";

const StaticHero = () => {
  const [showTextCover, setShowTextCover] = useState(false);

  const mouseOverHandler = () => {
    setShowTextCover(true);
  };

  const mouseOutHandler = () => {
    setShowTextCover(false);
  };

  return (
    <div className="static-hero flex-column">
      <P5/>
      <div className="hero-text-title">
        A woman facing forward, eyes gently closed. She is strong and serene.
        She is beautiful (white), but not overly threatening. Her skin sparkles
        like a Christmas ornament. She is surrounded by fruit and leaves. 
      </div>
      <h6>
        We don't know how she got here,
        but she has The Solution.
      </h6>
    </div>
  );
};

export default StaticHero;
