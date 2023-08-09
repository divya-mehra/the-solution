import { Box, Grid } from "@mui/material";
import styles from "./templates.module.css";
import ProductPageNav from "../components/navigation/ProductPageNav";
import ProductHero from "../components/Boxes/ProductHero";
import ProductStart from "../components/Boxes/ProductStart";
import ProductEnd from "../components/Boxes/ProductEnd";
import ProductStory from "../components/Boxes/ProductStory";

// import story data
import stories from "../data/stories";

const ProductPage = ({ name }) => {
  console.log(stories["corsica clementine"]);

  let current_product = "corsica clementine";

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
            backgroundImage: "url(/assets/product_cc_2.jpg)",
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
              src="/assets/product_cc.jpg"
              className={styles.centeredImage}
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
