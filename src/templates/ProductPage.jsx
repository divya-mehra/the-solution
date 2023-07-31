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
      <ProductHero title={'Corsica Clementine'} code={'CC LOOK-1'} desProduct={productPageArr[0].description}/>
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
