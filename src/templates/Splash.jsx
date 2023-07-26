import { Button, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import Image from "../assets/bottle.jpg";
import "../index.css";

const Splash = ({ landing, setLanding }) => {
  const CustomButton = styled(Button)({ padding: 4 * 2, margin: 4 * 4 });

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
          backgroundSize: "80%",
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
      <Typography variant="h2">
        Welcome to Alkhemy<sup>TM</sup>
      </Typography>
      <Typography variant="h6">We're thrilled to have you here.</Typography>
      <CustomButton onClick={enterButtonClickHandler}> Enter </CustomButton>
    </Box>
  );
};

export default Splash;
