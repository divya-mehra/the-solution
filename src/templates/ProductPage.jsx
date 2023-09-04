import { Grid } from "@mui/material";
import styles from "./templates.module.css";
import { useState, useEffect } from "react";

import ProductPageNav from "../components/navigation/ProductPageNav";
import ProductHero from "../components/Product/ProductHero";
import ProductStart from "../components/Product/ProductStart";
import ProductEnd from "../components/Product/ProductEnd";
import ProductStory from "../components/Product/ProductStory";

// import story data
import stories from "../data/stories";

const ProductPage = ({ name }) => {
  console.log(stories["corsica clementine"]);

  let current_product = "corsica clementine";

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/look_nowoman.png";
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
      <Grid container columns={12}>
        <Grid item xs={12}>
          <ProductPageNav hasBackground={true} linkTo={"/look"} />
        </Grid>
        <Grid item xs={12} className={styles.cardWrapper}>
          <Grid
            container
            columnSpacing={8}
            style={{
              backgroundImage: "url(/assets/look_nowoman.png)",
              backgroundSize: "cover",
            }}
          >
            <Grid item md={6}>
              <ProductHero
                title={stories[`${current_product}`].title}
                code={stories[`${current_product}`].code}
                description={stories[`${current_product}`].description}
              />
            </Grid>
            <Grid item md={6} className={styles.imageContainer}>
              <img
                style={{ padding: "48px" }}
                // src="/assets/splash.png"
                className={`${styles.centeredImage}`}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ProductStart
            description_two={stories[`${current_product}`].description_two}
          ></ProductStart>
        </Grid>

        <Grid item xs={12}>
          <ProductStory text={stories[`${current_product}`].text} />
        </Grid>
        <Grid item xs={12}>
          <ProductEnd />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
