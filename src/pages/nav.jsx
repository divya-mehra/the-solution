import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import styles from './pages.module.css'
import LookCover from "/assets/cover-look.jpg";
import FeelCover from "/assets/cover-feel.jpg";
import ProtoDialog from "../components/utilities/ProtoDialog";

const Nav = ({
  landing,
  setLanding,
  journeySelection,
  setJourneySelection,
}) => {
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
      visibility: "visible",
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
    } else if (text === "FEEL") {
      // setJourneySelection("feel")
      handleClickOpen();
    } else {
      console.log("error");
    }
  };

  return (
    <CategoryWrapperBox>
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
    </CategoryWrapperBox>
  );
};

export default Nav;
