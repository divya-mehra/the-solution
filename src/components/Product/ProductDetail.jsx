import { Box, Typography } from "@mui/material";
import styles from "./product.module.css";

const ProductDetail = ({description}) => {
  return (
    <Box className={styles.boxDetail}>
      <Box className={styles.boxDetailElement}>{description}</Box>
      {/* <Box className={styles.boxDetailElement}>What's Inside</Box>
      <Box className={styles.boxDetailElement}>Best For</Box> */}
    </Box>
  );
};

export default ProductDetail;
