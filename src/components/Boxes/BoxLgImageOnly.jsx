import styles from "./boxes.module.css";
import { Box, Typography } from "@mui/material";
import LookHero from "../../assets/look_hero.jpg";
import { useEffect, useState } from "react";

{
  /* <Typography variant="hero">
    Two women pose. One smiles bashfully and looks to the side. The other
    is fierce and stares at the camera. Her skin sparkles like a Christmas
    ornament.
</Typography> */
}

const BoxLgImageOnly = () => {

  const [showTextCover, setShowTextCover] = useState(false);

  const mouseOverHandler = () => {
    setTimeout(() => {setShowTextCover(true)}, 2000);
  };

  const mouseOutHandler = () => {
    setShowTextCover(false)
  };

  return (
    <div
      className={`${styles.boxLgImageOnly} `}
      style={{
        backgroundImage: `url(${LookHero})`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        color: "#ffffff40",
        opacity: showTextCover ? 0 : 1,
        transition: "ease all 1s"
      }}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        className="textCover"
        style={{
          backgroundColor: "rgba(255, 0, 255, 0.95)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: showTextCover ? 1 : 0,
          transition: "ease all 1s"

        }}
      >
        <Typography variant="hero" sx={{ color: "#000" }}>
          A woman looks on, her eyes closed. She is serene. She is fierce. She
          is zen. She is beautiful.{" "}
          <span style={{ color: "#ff0000" }}>Her skin sparkles</span> like a
          Christmas ornament. She is surrounded my saturated fruit and leaves.
        </Typography>
      </div>
    </div>
  );
};

export default BoxLgImageOnly;
