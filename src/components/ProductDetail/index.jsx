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
        <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
          {code}
        </Typography>
      </div>
      <Box className={styles.boxDetail}>
        <Box className={styles.boxDetailElement}>{description}</Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
