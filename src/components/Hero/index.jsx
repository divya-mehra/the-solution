import styles from "../category.module.css";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Hero = () => {

  const [showTextCover, setShowTextCover] = useState(false);

  const mouseOverHandler = () => {
    setShowTextCover(true)
  };

  const mouseOutHandler = () => {
    setShowTextCover(false)
  };

  

  return (
      <div
        className={styles.boxLgImageOnly}
        style={{
          backgroundColor: "#0c0c0c",
        }}>
        <p className="hero">
          A woman facing forward, eyes gently closed. She is strong and
          serene. She is beautiful (white), but not overly threatening.   
          <span style={{ color: "#ce6952" }}> Her skin sparkles</span> like a
          Christmas ornament. She is surrounded by fruit and leaves. We don't know how she got here.
        </p>
      </div>
  );
};

export default Hero;
