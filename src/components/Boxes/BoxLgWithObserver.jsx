import { Box } from "@mui/material";
import styles from "./boxes.module.css";
import imageOne from "../../assets/red.png";
import imageTwo from "../../assets/redblue.png";
import imageThree from "../../assets/redblueyellow.png";
import { useLayoutEffect, useEffect } from "react";

const BoxLgWithObserver = () => {
  const options = {
    threshold: 0.95,
  };

  const handleIntersection = (entries) => {
    entries.forEach((e) => {
        if(e.isIntersecting) {
            console.log(e.target);
        }
      
    });
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    let panels = document.querySelectorAll(`.${styles.observerTextPanel}`);
    console.log(panels)
    panels.forEach((p) => {
      observer.observe(p);
      
    });
    

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box className={`${styles.boxLgWithObserver} ${styles.boxLg}`}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          className={styles.intersectionDiv}
          src={imageOne}
          alt="Image One"
        />
        <img
          className={styles.intersectionDiv}
          src={imageTwo}
          alt="Image Two"
        />
        <img
          className={styles.intersectionDiv}
          src={imageThree}
          alt="Image Three"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.observerTextPanel}>hi</div>
        <div className={styles.observerTextPanel}></div>
        <div className={styles.observerTextPanel}></div>
        <div className={styles.observerTextPanel}></div>
      </div>
    </Box>
  );
};

export default BoxLgWithObserver;
