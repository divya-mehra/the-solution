import { Box, Grid } from "@mui/material";
import styles from "./templates.module.css";
import ProductPageNav from "../components/navigation/ProductPageNav";
import ProductHero from "../components/Boxes/ProductHero";
import BoxSmTypeB from "../components/Boxes/BoxSmTypeB";
import ProductStory from "../components/Boxes/ProductStory";
import BoxLgWithSmCards from "../components/Boxes/BoxLgWithSmCards";

const ProductPage = ({ name }) => {
  const recProductArr = [
    {
      title: "Superwoman",
    },
    {
      title: "Glow Getter",
    },
    {
      subtitle: "Product",
    },
  ];

  const productPageArr = [
    {
      description: [
        "The eastern plains of Corsica run twenty degrees colder than the rest of the island. Clementines grow in abundance and are harvested by hand in family-run orchards. They flood the sun-drenched earth in orange. The fruit’s oil extract brightens and tones; its peel reverses time; its juice firms your skin. It runs deep through your pores, leaving you fresh-faced and brand new. This is our promise.",
      ],
    },
    {
      description: [
        "We know life gets hard. You are expected to rise at the crack of dawn, put on your best face, and move through the day while supporting a family, a career, a house, whole lives other than your own. But wellness doesn't have to be a problem. Not when you've got The Solution.",
      ],
    },
  ];

  return (
    <Grid container className={styles.wrapper}>
      <Grid item xs={12}>
        <ProductPageNav />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item md={6}>
            <ProductHero
              title={"Corsica Clementine"}
              code={"CC LOOK-1"}
              desProduct={productPageArr[0].description}
            />
          </Grid>
          <Grid item md={6}>
            <img width="100%"></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ProductStory />
      </Grid>
      <Grid item xs={12}>
        <BoxSmTypeB />
        {/* Reccomendatations. See More:  */}
      </Grid>
      <Grid item xs={12}>
        <BoxLgWithSmCards
          title={"You might also like..."}
          arr={recProductArr}
        />
      </Grid>
    </Grid>
  );
};

export default ProductPage;
