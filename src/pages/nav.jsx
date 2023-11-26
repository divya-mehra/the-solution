import Layout from "../components/Layout";
import { useState } from "react";
import LookCover from "/assets/cover-look.jpg";
// import FeelCover from "/assets/tongue.jpg"
import ProtoDialog from "../components/utilities/ProtoDialog";

import { useNavigate } from "react-router";


const Nav = ({
  landing,
}) => {

  const [journeySelection, setJourneySelection] = useState(null);

  // Handlers

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
    
    <div className= {landing ? "big-nav big-nav-visible" : "big-nav"}>
      
      <div className="left-absolute flex-column" style={{backgroundColor: "beige"}}>
        <div className="category-button look-button" onClick={categoryClickHandler}>
          Look
        </div>
      </div>
      <div className="right-absolute flex-column" style={{backgroundImage: "url(src/assets/tongue.jpg)", backgroundSize: "cover"}}>
        <div className="category-button feel-button" onClick={categoryClickHandler}>
          Feel
        </div>
      </div>
      <ProtoDialog open={open} setOpen={setOpen} handleClose={handleClose} />
      </div>
    
    
    </Layout>
  );
};

export default Nav;
