
import "./index.scss";

import { Box, Typography } from "@mui/material";
import image1 from "/assets/red.png";
import image2 from "/assets/redblue.png";
import image3 from "/assets/redblueyellow.png";
import image4 from "/assets/last.png";
import { useLayoutEffect, useEffect, useState } from "react";



const ScrollStory = ({ text }) => {
  // set an array with the image panels
  const [imagePanels, setImagePanels] = useState([]);
  //  set image visibility for each image

  const [visibleImage1, setVisibleImage1] = useState(true);
  const [visibleImage2, setVisibleImage2] = useState(false);
  const [visibleImage3, setVisibleImage3] = useState(false);
  const [visibleImage4, setVisibleImage4] = useState(false);

  const options = {
    threshold: 0.95,
  };

  console.log(text.one);

  const handleIntersection = (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        let textid = e.target.id.split("-")[1];

        imagePanels.forEach((p) => console.log(p.id.split("-")[1]));

        if (textid === "1") {
          setVisibleImage1(true);
          setVisibleImage2(false);
          setVisibleImage3(false);
          setVisibleImage4(false);
        } else if (textid === "2") {
          setVisibleImage1(false);
          setVisibleImage2(true);
          setVisibleImage3(false);
          setVisibleImage4(false);
        } else if (textid === "3") {
          setVisibleImage1(false);
          setVisibleImage2(false);
          setVisibleImage3(true);
          setVisibleImage4(false);
        } else if (textid === "4") {
          setVisibleImage1(false);
          setVisibleImage2(false);
          setVisibleImage3(false);
          setVisibleImage4(true);
        }
        // let panelsArray = Array.from(imagePanels);

        // let foundImage = panelsArray.find((p) => {
        //     let pid = p.id.split("-")[1]
        //     return pid === textid
        // })

        // console.log(foundImage)
      }
    });
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    let panels = document.querySelectorAll(`.observerTextPanel`);
    console.log(panels);

    panels.forEach((p) => {
      observer.observe(p);
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(`.intersectionDiv`);
    setImagePanels(images);
  }, []);

  return (
    <div
      className="scroll-story"
    >
      <div className="visual-side"
      >
        <img
          className="intersectionDiv"
          src={image1}
          id={"image-1"}
          alt="Image One"
          style={{ visibility: visibleImage1 ? "visible " : "hidden" }}
        />
        <img
          className="intersectionDiv"
          src={image2}
          id={"image-2"}
          alt="Image Two"
          style={{ visibility: visibleImage2 ? "visible " : "hidden" }}
        />
        <img
          className="intersectionDiv"
          src={image3}
          id={"image-3"}
          alt="Image Three"
          style={{ opacity: visibleImage3 ? 1 : 0 }}
        />
        <img
          className="intersectionDiv"
          src={image4}
          id={"image-4"}
          alt="Image Three"
          style={{ opacity: visibleImage4 ? 1 : 0 }}
        />
      </div>
      <div
        className="text-side"
      >
        <div className="observerTextPanel" id={"panel-1"}>
          <Typography variant="story" className="observerTextDetail">
            {text.one.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <div className="observerTextPanel" id={"panel-2"}>
          <Typography variant="story" className="observerTextDetail">
            {text.two.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <div className="observerTextPanel" id={"panel-3"}>
          <Typography variant="story" className="observerTextDetail">
            {text.three.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
        <div className="observerTextPanel" id={"panel-4"}>
          <Typography variant="story" className="observerTextDetail">
            {text.four.map((p, i) => {
              return <p>{p}</p>;
            })}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
