import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";

// images
import LookImage from "/assets/look_one.png";
import LookImageTwo from "/assets/look_two.jpg";

import Footer from "../components/Footer";

import styles from "./templates.module.css";
import boxStyles from "../components/Category/category.module.css";

import BoxLgImageAndText from "../components/Category/BoxLgImageAndText";
import SmallCard from "../components/Category/SmallCard";
import HeroWithGlitch from "../components/Category/HeroWithGlitch";

import ProductPageNav from "../components/navigation/ProductPageNav";

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
        "How you look influences how you feel.",
        "Our Solutions make you look 100% so you can feel on top of the world.",
        "For our homegrown ~look~ products, we derive the highest-quality ingredients from the Mediterranean, India, and the Far East. These combinations are tested in our scientific laboratories, where some of the brightest minds come together to develop the right balance of ingredients just for you.",
        "You deserve your Solution. So what are you waiting for?",
      ],
    },
    {
      description: [
        "Clementine is our signature Reset product. Start with her and you won't ever look back.",
      ],
    },
  ];

  // Image Loading

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/look_hero.png";
    img.onload = () => {
      setImagesLoaded(true);
    };
    img.onerror = () => {
      // Handle image loading error here
    };
  }, []);

  if (!imagesLoaded) {
    // Return a loading indicator or fallback content
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeroWithGlitch />
      {/* <Grid item xs={12}>
        <ProductPageNav hasBackground={false} linkTo={"MainCategory"}/>
      </Grid> */}
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

        <div
          className={boxStyles.boxLg}
          style={{
            padding: "32px",
            marginLeft: "-96px",
            marginRight: "-96px",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "48px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", padding: "48px", color: "black" }}
          >
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

        <div
          className={styles.bottomBox}
          style={{
            padding: "96px",
            backgroundImage: `url('/assets/tex/terracotta.jpg')`,
            backgroundSize: "cover",
            marginLeft: "-96px",
            marginRight: "-96px",
            marginBottom: "-96px",
            height: "100%",
          }}
        >
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
        </div>
      </Grid>
    </>
  );
};

export default CategoryPage;
