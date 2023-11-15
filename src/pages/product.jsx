import { Grid } from "@mui/material";
import styles from "./pages.module.css";
import { useState, useEffect } from "react";

import ProductNav from "../components/ProductNav";
import ProductDetail from "../components/ProductDetail";
import StoryStart from "../components/StoryStart";
import StoryEnd from "../components/StoryEnd";
import ScrollStory from "../components/ScrollStory";

// import story data
import stories from "../data/stories";

const Product = ({ name }) => {
  console.log(stories["corsica clementine"]);

  let current_product = "corsica clementine";

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
    return <div></div>;
  }

  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={12}>
          <ProductNav hasBackground={true} linkTo={"/look"} />
        </Grid>
        <Grid item xs={12} className={styles.cardWrapper}>
          <Grid
            container
            columnSpacing={8}
            style={{
              backgroundImage: "url(/assets/look_hero.png)",
              backgroundSize: "cover",
            }}
          >
            <Grid item md={6}>
              <ProductDetail
                title={stories[`${current_product}`].title}
                code={stories[`${current_product}`].code}
                description={stories[`${current_product}`].description}
              />
            </Grid>
            <Grid item md={6} className={styles.imageContainer}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StoryStart
            description_two={stories[`${current_product}`].description_two}
          ></StoryStart>
        </Grid>

        <Grid item xs={12}>
          <ScrollStory text={stories[`${current_product}`].text} />
        </Grid>
        <Grid item xs={12}>
          <StoryEnd />
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
