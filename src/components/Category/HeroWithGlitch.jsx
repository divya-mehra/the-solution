import styles from "./category.module.css";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

{
  /* <Typography variant="hero">
    Two women pose. One smiles bashfully and looks to the side. The other
    is fierce and stares at the camera. Her skin sparkles like a Christmas
    ornament.
</Typography> */
}

const HeroWithGlitch = () => {

  const [showTextCover, setShowTextCover] = useState(false);

  const mouseOverHandler = () => {
    setShowTextCover(true)
    // setTimeout(() => {setShowTextCover(false)}, 4000);
  };

  const mouseOutHandler = () => {
    setShowTextCover(false)
  };

  return (
    <div
      className={`${styles.boxLgImageOnly} `}
      style={{
        backgroundImage: `url("/assets/look_hero.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        className={styles.textCover}
        style={{
          opacity: showTextCover ? 0.6 : 0,
        }}
      >
        <Typography variant="hero" sx={{ color: "#ffffff" }}>
          A woman facing forward, eyes closed. She is strong and
          serene. She is beautiful and white, but not overly threatening.   
          <span style={{ color: "#ce6952" }}> Her skin sparkles</span> like a
          Christmas ornament, surrounded by fruit and leaves. 
        </Typography>
      </div>
    </div>
  );
};

export default HeroWithGlitch;
