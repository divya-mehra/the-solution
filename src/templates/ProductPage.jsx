import { Box } from "@mui/material";
import styles from './templates.module.css'
import ProductPageNav from "../components/navigation/ProductPageNav";
import ProductHero from "../components/Boxes/ProductHero";
import BoxSmTypeB from "../components/Boxes/BoxSmTypeB";
import BoxLgTextOnly from "../components/Boxes/BoxLgTextOnly";
import BoxLgWithObserver from "../components/Boxes/BoxLgWithObserver";
import BoxLgWithSmCards from "../components/Boxes/BoxLgWithSmCards";

const ProductPage = ({ name }) => {

    const recProductArr = [
        {
          subtitle: "Product",
          title: "CC Look-3",
        },]

        const productPageArr = [
            {
              description: [
                "We know life gets hard. You are expected to rise at the crack of dawn, put on your best face, and move through the day while supporting a family, a career, a house, whole lives other than your own. But wellness doesn't have to be a problem. Not when you've got The Solution.",
                "How you look influences how you feel. We have the products to make you look 100% so you can feel on top of the world. 200%.",
                "In our homegrown LOOK category, we derive the highest-quality ingredients from the Mediterranean, India, and the Far East. These solutions are tried and tested in our scientific labratories, where some of the brightest minds come together to develop the right balance of ingredients for you.",
              ],
            },
            {
              description: [
                "We know life gets hard. You are expected to rise at the crack of dawn, put on your best face, and move through the day while supporting a family, a career, a house, whole lives other than your own. But wellness doesn't have to be a problem. Not when you've got The Solution.",
              ],
            },
          ];

  return (
    <>
    <Box className={styles.wrapper}>
      <ProductPageNav />
      <ProductHero title={'hi'} code={'88sd'} desProduct={productPageArr[0].description}/>
      <BoxLgWithObserver/>
      <BoxLgTextOnly/>
      <BoxLgTextOnly/>
      <BoxSmTypeB/>
      {/* Reccomendatations. See More:  */}
      <BoxLgWithSmCards title={"You might also like..."} arr={recProductArr}/>
      </Box>
    </>
  );
};

export default ProductPage;
