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

const preloadImage = () => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      resolve(image);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};

const ProductPage = ({ name }) => {
  console.log(stories["corsica clementine"]);

  let current_product = "corsica clementine"

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      preloadImage("/assets/look_nowoman.png"),
      preloadImage("/assets/product_cc.jpg"),
    ])
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  }, []);

  

  return (
    //
    // removed spacing of 16 for columns
    <Grid container columns={12}>
      <Grid item xs={12}>
        <ProductPageNav />
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
              src="/assets/product_cc.jpg"
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
  );
};

export default ProductPage;
