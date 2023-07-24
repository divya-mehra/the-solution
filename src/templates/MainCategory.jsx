import { Box, Button } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import LookCover from "../assets/cover-look.jpg";
import FeelCover from "../assets/cover-feel.jpg";

const MainCategory = ({ landing, setLanding }) => {
  
    // Styles

  const CategoryWrapperBox = styled(Box)([
    {
      p: 4,
      textAlign: "center",
      minHeight: "100vh",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      opacity: "0",
      zIndex: "1",
      transition: "all ease 2s",
    },

    landing && {
      opacity: "1",
    },
  ]);

  const LeftCategoryBox = styled(Box)({
    width: "50%",
    left: "0",
    top: "0",
    bottom: "0",
    position: "absolute",
    backgroundImage: `url(${LookCover})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const RightCategoryBox = styled(Box)({
    width: "50%",
    right: "0",
    top: "0",
    bottom: "0",
    position: "absolute",
    backgroundImage: `url(${FeelCover})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  // End Styles 

  return (
    <CategoryWrapperBox>
      <LeftCategoryBox>
        <Button>Look</Button>
      </LeftCategoryBox>
      <RightCategoryBox>
        <Button variant="text">Feel</Button>
      </RightCategoryBox>
    </CategoryWrapperBox>
  );
};

export default MainCategory;
