import { Box, Typography, Grid } from "@mui/material";

// images
import LookImage from "/assets/look_one.png";
import LookImageTwo from "/assets/look_two.jpg";
import LookHero from "/assets/look_hero.jpg";

import Footer from "../components/Footer";

import styles from "./templates.module.css";
import boxStyles from "../components/Boxes/boxes.module.css"

import BoxLgImageAndText from "../components/Boxes/BoxLgImageAndText";
import SmallCard from "../components/Boxes/SmallCard";
import HeroWithGlitch from "../components/Boxes/HeroWithGlitch";

const CategoryPage = ({ journeySelection }) => {
  console.log(journeySelection);

  const stepsArr = [
    {
      // subtitle: "1",
      title: "Reset",
      description: "Prepare yourself for the transformation ahead.",
      image: "/assets/icons/1.png",
    },
    {
      // subtitle: "2",
      title: "Rebuild",
      description: "Rebuild your foundations from the ground up.",
      image: "/assets/icons/2.png",
    },
    {
      // subtitle: "3",
      title: "Regrow",
      description: "Continue to grow well past the 3 step system.",
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
      <Grid container className={styles.wrapper} rowSpacing={16}>
        <Grid item xs={12}>
          <Grid container columnSpacing={16}>
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
        {/* "#b24923" */}
        <div className={boxStyles.boxLg} style={{backgroundImage: `url('/assets/tex/terracotta.jpg')`, backgroundSize: "cover", padding: "24px", marginLeft: "-96px", marginRight: "-96px", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography variant="h3" sx={{ textAlign: "center", padding: "48px", color: "white"}}>
            As Easy As 1-2-3
          </Typography>
          <Grid container spacing={12} justifyContent="space-around">
          {stepsArr.map((s, i) => (
            <Grid item xs={3} key={i}>
              <SmallCard
                number={s.number}
                title={s.title}
                description={s.description}
                // subtitle={s.subtitle}
                image={s.image}
              />
            </Grid>
          ))}
          </Grid>
        </div>

        <Grid item xs={12}>
          <Grid container columnSpacing={16}>
            <Grid item md={6}>
              <Box>
                <img src={LookImage} width="100%"></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <BoxLgImageAndText
                title={"Reset with CC LOOK-1"}
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
