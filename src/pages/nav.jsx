import Layout from "../components/Layout";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import styles from './pages.module.css'
import LookCover from "/assets/cover-look.jpg";
import FeelCover from "/assets/cover-feel.jpg";
import ProtoDialog from "../components/utilities/ProtoDialog";

import { useNavigate } from "react-router";


const Nav = ({
  landing,
}) => {

  const [journeySelection, setJourneySelection] = useState(null);




  // Styles

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
    cursor: "pointer",
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

  // Handler

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  
  
  


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categoryClickHandler = (e) => {
    let text = e.target.innerText;
    if (text === "LOOK") {
      setJourneySelection("look");
      routeChange("/look");

    } else if (text === "FEEL") {
      // setJourneySelection("feel")
      handleClickOpen();
    } else {
      console.log("error");
    }
  };

  return (
    <Layout>
    {/* <CategoryWrapperBox> */}
    <div className= {landing ? "main-nav main-nav-visible" : "main-nav"}>
      <LeftCategoryBox>
        <div className={styles.categoryButton} onClick={categoryClickHandler}>
          Look
        </div>
        {/* <Typography sx={{color: "white"}}>Seductive, non-threatening. Freckled skin, but not overdone. Anon face.</Typography> */}
      </LeftCategoryBox>
      <RightCategoryBox>
        <div className={styles.categoryButton} onClick={categoryClickHandler}>
          Feel
        </div>
        {/* <Typography sx={{color: "white"}}>Something that could be anything. Dewy petals? Glittery sleeve? Light & floaty.</Typography> */}
      </RightCategoryBox>
      <ProtoDialog open={open} setOpen={setOpen} handleClose={handleClose} />
    {/* </CategoryWrapperBox> */}
    </div>
    </Layout>
  );
};

export default Nav;
