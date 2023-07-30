import { Box, Typography } from "@mui/material";
import LookImage from "../assets/look_one.jpg";
import LookImageTwo from "../assets/look_two.jpg";
import Footer from "../components/Footer";

import styles from "./templates.module.css";

import BoxLgTypeA from "../components/Boxes/BoxLgTypeA";
import BoxLgTypeB from "../components/Boxes/BoxLgTypeB";

const CategoryPage = ({ journeySelection }) => {
  console.log(journeySelection);

  const categoryPageArr = [
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
    <Box className={styles.wrapper}>
      <Box className={styles.hero}>
        <Typography variant="hero">
          Two women pose. One smiles bashfully and looks to the side. The other
          is fierce and stares at the camera. Her skin sparkles like a Christmas
          ornament.
        </Typography>
      </Box>
      <BoxLgTypeA
        title="Everyone has a story"
        subtitle="Yours begins here"
        description={categoryPageArr[0].description}
        image={LookImage}
        orientation="left"
        hasButton={false}
      />

      <BoxLgTypeB title={"As Easy As 1-2-3"} />

      <BoxLgTypeA
        title={"Start with CC LOOK-1"}
        subtitle={"Or as we like to call her, Clementine"}
        description={categoryPageArr[1].description}
        orientation="right"
        image={LookImageTwo}
        hasButton={true}
      />
      <Footer />
    </Box>
  );
};

export default CategoryPage;
