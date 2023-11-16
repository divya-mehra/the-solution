import { Box, Typography } from "@mui/material";
import styles from "../product.module.css";

const ProductDetail = ({ title, code, description, ingredients, bestFor }) => {
  return (
    <Box
      className={`${styles.boxLg}`}
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "70vh",
      }}
    >
      <div className={styles.ProductHeroMainInfoLeft}>
        <h3>
          {title}
        </h3>
        <h6>
          {code}
        </h6>
      </div>
      <Box className={styles.boxDetail}>
        <Box className={styles.boxDetailElement}><p>{description}</p></Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
