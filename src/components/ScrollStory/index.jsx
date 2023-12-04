import "./index.scss";

import { Typography } from "@mui/material";

import { useLayoutEffect, useEffect, useState } from "react";

const ScrollStory = ({ text }) => {

  return (
    
  
      
      <div className="text-side" >
        <div className="observerTextPanel" id={"panel-1"}>
          <Typography variant="story" className="observerTextDetail">
            {text.one.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <img className="iconBreak"src="/assets/leaf-1.png"></img>
        <div className="observerTextPanel" id={"panel-2"}>
          <Typography variant="story" className="observerTextDetail">
            {text.two.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <img className="iconBreak"src="/assets/leaf-3.png"></img>
        <div className="observerTextPanel" id={"panel-3"}>
          <Typography variant="story" className="observerTextDetail">
            {text.three.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <img className="iconBreak"src="/assets/leaf-4.png"></img>
        <div className="observerTextPanel" id={"panel-4"}>
          <div className="observerTextDetail">
            {text.four.map((p, i) => {
              return <p>{p}</p>;
            })}
          </div>
        </div>
      
    
    </div>
  );
};

export default ScrollStory;
