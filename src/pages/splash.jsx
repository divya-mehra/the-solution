import { Button, Typography, Box } from "@mui/material";
import styles from "./pages.module.css";
import { useState } from "react";
import Image from "/assets/bottle.png";
import "../components/Layout/base.scss";

const Splash = ({ landing, setLanding }) => {
  const [backgroundImage, setBackgroundImage] = useState(`url(${Image})`);

  const enterButtonClickHandler = () => {
    setLanding(true);
    console.log("Landing page set");
    //TO DO: find a way to disable this button on click so it doesn't show through
  };

  console.log(backgroundImage);

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          p: 4,
          textAlign: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          opacity: "1",
          zIndex: "2",
          transition: "all ease 1s",
        },
        landing && {
          opacity: "0",
          visibility: "hidden",
        },
      ]}
      className={"active"}
    >
      <h1>
        Welcome to The Solution<sup>TM</sup>
      </h1>
      <h5>We're thrilled to have you here.</h5>
      <div className={styles.enterButton} onClick={enterButtonClickHandler}>
        {" "}
        Enter{" "}
      </div>
    </Box>
  );
};

export default Splash;
