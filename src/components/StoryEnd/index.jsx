import { Box, Typography } from "@mui/material";
import styles from "../product.module.css";

const StoryEnd = () => {
  return (
  
  <Box className={styles.productFullWidth} style = {{backgroundImage: `url("/assets/look_hero.png")`, backgroundSize: "cover" }}>
    {/* <Typography variant="h3"><i>It's everything you need.</i></Typography> */}
    <Typography variant="h4" paddingBottom={3}>Order now and get free shipping right to your doorstep.</Typography>
    <Typography variant="body1">(And don't worry. We screen all deliveries for unwanted surprises.)</Typography>


  </Box>
  )
};

export default StoryEnd;
