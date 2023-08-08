import { Box } from "@mui/material";
import styles from "./boxes.module.css";

const ProductDetail = () => {
  return (
  <Box className={styles.boxDetail}>
  <Box className={styles.boxDetailElement}>What's Inside</Box>
  <Box className={styles.boxDetailElement}>Best For</Box>
  </Box>
  )
};

export default ProductDetail;
