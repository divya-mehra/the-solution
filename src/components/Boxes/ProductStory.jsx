import { Box, Typography } from "@mui/material";
import styles from "./boxes.module.css";
import image1 from "/assets/red.png";
import image2 from "/assets/redblue.png";
import image3 from "/assets/redblueyellow.png";
import { useLayoutEffect, useEffect, useState } from "react";

const ProductStory = () => {
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

    let panels = document.querySelectorAll(`.${styles.observerTextPanel}`);
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
    const images = document.querySelectorAll(`.${styles.intersectionDiv}`);
    setImagePanels(images);
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
          src={image1}
          id={"image-1"}
          alt="Image One"
          style={{ visibility: visibleImage1 ? "visible " : "hidden" }}
        />
        <img
          className={styles.intersectionDiv}
          src={image2}
          id={"image-2"}
          alt="Image Two"
          style={{ visibility: visibleImage2 ? "visible " : "hidden" }}
        />
        <img
          className={styles.intersectionDiv}
          src={image3}
          id={"image-3"}
          alt="Image Three"
          style={{ opacity: visibleImage3 ? 1 : 0 }}
        />
        <img
          className={styles.intersectionDiv}
          src={image1}
          id={"image-4"}
          alt="Image Three"
          style={{ opacity: visibleImage4 ? 1 : 0 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.observerTextPanel} id={"panel-1"}>
          <Typography variant="story" className={styles.observerTextDetail}>
            <p>
              Clementine is astounded by all this. Mo ricochets through her
              bathroom door and screams the truth: we have no time! He stands
              there, pointing at his bare wrist and gesticulating wildly, and
              she wonders how he can look so graceful and wild at the same time.
              Time, time, time.
            </p>
            <p>
              "She finds time to scrub her face silly. "The face of it, the pure
              syrupy, glazed donut face of the matter is that: 200 years after
              Chaucer described beauty as “bright, rosy, fresh, and new,”
              Elizabeth I of England caked herself in lead, masking her scars of
              smallpox. The lead trapped her in a cycle of break and repair. She
              died a virgin in a white mask.
            </p>
          </Typography>
        </div>
        <div className={`${styles.observerTextPanel}`} id={"panel-2"}>
          <Typography variant="story" className={styles.observerTextDetail}>
            <p>
              It wasn’t always like this, the woman thinks, but then maybe it
              was. Maybe she has no idea what it was really like. The woman
              likes to impress her own version of history upon its moldy façade.
              Big men with big bellies have let its walls rot, thrown
              meaningless words (sometimes, their best words) over yesteryear,
              trampling for Sharpies like legions at war because they worry
              about becoming obsolete even though no one even uses the word
              yesteryear anymore.
            </p>
            <p>A man corrects the woman: no, it has always been this way.</p>
            <p>Words are the weapons of today’s kings, she thinks. </p>
          </Typography>
        </div>
        <div className={`${styles.observerTextPanel}`} id={"panel-3"}>
        <Typography variant="story" className={styles.observerTextDetail}>
            <p>
              After a final wash and dry, she dabs around her eyes and over her
              cheeks. When she is done, her face is blurred, ethereal. As a
              young girl, she used to accompany her mother to the powder room,
              where she sat in awe of the women collecting on plush carpets and
              flesh-colored chairs. They squeezed shine and sweat from their
              faces and gossiped about the men outside. To a young Clementine,
              the floral musk mixed with cigarette smoke emanating off their
              bodies seemed a dream. They were powerful. They wore knowing
              smiles and gracious curves. She’d loathe returning to the crowd,
              where she’d lose her mother to some new vagrant passing through
              town, and eventually, one of the husbands stroked her cheek and
              whispered, there’s a beautiful girl.
            </p>
          </Typography>
        </div>
        <div className={`${styles.observerTextPanel} `} id={"panel-4"}>
        <Typography variant="story" className={styles.observerTextDetail}>
            “I’m peachy, Mo.” She rubs her skin to demonstrate. “If you say so.”
            What an aggravating thing to say: if you say so. The more she says
            it, the stranger is sounds, and her skin starts to peel. Her fingers
            dip inside. She thinks of Elizabeth the First.
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default ProductStory;
