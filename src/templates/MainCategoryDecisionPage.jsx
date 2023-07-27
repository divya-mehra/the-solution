import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import LookCover from "../assets/cover-look.jpg";
import FeelCover from "../assets/cover-feel.jpg";

const MainCategoryDecisionPage = ({ landing, setLanding, journeySelection, setJourneySelection }) => {
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
      visibility: "hidden",
      zIndex: "1",
      transition: "all ease 2s",
    },

    landing && {
      opacity: "1",
      visibility: "visible"
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

  const CategoryButton = styled(Button)(
    {
      fontWeight: '800px',
      fontSize: '64px',
      textTransform: 'uppercase',
      color: 'white',
      fontFamily: 'Optima'
      
    }
  )

  // End Styles

  const categoryClickHandler = (e) => {
    let text = e.target.innerText;
    if(text === "LOOK") {
        setJourneySelection("look")
    } else if (text === "FEEL") {
        setJourneySelection("feel")
    } else {
        console.log('error')
    }
  }

  return (
    <CategoryWrapperBox>
      <LeftCategoryBox>
        <CategoryButton onClick={categoryClickHandler}>Look</CategoryButton>
        <Typography sx={{color: "white"}}>Seductive, non-threatening. Freckled skin, but not overdone. Anon face.</Typography>
      </LeftCategoryBox>
      <RightCategoryBox>
        <CategoryButton onClick={categoryClickHandler}>Feel</CategoryButton>
        <Typography sx={{color: "white"}}>Something that could be anything. Dewy petals? Glittery sleeve? Light & floaty.</Typography>
      </RightCategoryBox>
    </CategoryWrapperBox>
  );
};

export default MainCategoryDecisionPage;
