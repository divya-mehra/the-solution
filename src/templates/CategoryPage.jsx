import { Box, Typography, Grid } from "@mui/material";

// images
import LookImage from "/assets/look_one.png";
import LookImageTwo from "/assets/look_two.jpg";
import LookHero from "/assets/look_hero.jpg";

import Footer from "../components/Footer";

import styles from "./templates.module.css";

import BoxLgImageAndText from "../components/Boxes/BoxLgImageAndText";
import BoxLgWithSmCards from "../components/Boxes/BoxLgWithSmCards";
import HeroWithGlitch from "../components/Boxes/HeroWithGlitch";

const CategoryPage = ({ journeySelection }) => {
  console.log(journeySelection);

  const stepsArr = [
    {
      subtitle: "Step 1",
      title: "Reset",
      description: "Prepare yourself for the transformation ahead.",
      image: "/assets/icons/1.png",
    },
    {
      subtitle: "Step 2",
      title: "Rebuild",
      description: "Rebuild your foundations from the ground up.",
      image: "/assets/icons/2.png",
    },
    {
      subtitle: "Step 3",
      title: "Regrow",
      description: "Continue to grow well past the three step system.",
      image: "/assets/icons/3.png",
    },
  ];

  const categoryPageArr = [
    {
      description: [
        "How you look influences how you feel. Our Solutions make you look 100% so you can feel on top of the world.",
        "In our homegrown LOOK category, we derive the highest-quality ingredients from the Mediterranean, India, and the Far East. These combinations are tried and tested in our scientific laboratories, where some of the brightest minds come together to develop the right balance of ingredients just for you.",
        "We believe that wellness is for everyone and are on a mission to make this come true.",
      ],
    },
    {
      description: [
        "Clementine is our signature Reset product. Start with her and you won't ever look back.",
      ],
    },
  ];

  return (
    <>
      <HeroWithGlitch image={{ LookHero }} />
      <Grid container className={styles.wrapper}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6}>
            
              <BoxLgImageAndText
                title="Everyone has a story"
                subtitle="Yours begins here"
                description={categoryPageArr[0].description}
                orientation="left"
                hasButton={false}
              />
            </Grid>
            <Grid item md={6}>
              <img src={LookImageTwo} width="100%"></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BoxLgWithSmCards title={"As Easy As 1-2-3"} arr={stepsArr} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6}>
              <Box>
                <img src={LookImage} width="100%"></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <BoxLgImageAndText
                title={"Reset with Corsica Clementine"}
                subtitle={"Or as we like to call her, Clementine"}
                description={categoryPageArr[1].description}
                orientation="right"
                hasButton={true}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* <Footer /> */}
      </Grid>
    </>
  );
};

export default CategoryPage;
