import { Box, Typography } from "@mui/material";
import styles from "./product.module.css";
import ProductDetail from "./ProductDetail";

const ProductHero = ({ title, code, description, ingredients, bestFor }) => {
  return (
    <Box className={`${styles.boxLg}`} sx={{color: "white"}}>
      <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2 }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
        {code}
      </Typography>
      <Typography sx={{ textAlign: "left" }}>{description}</Typography>

      <ProductDetail />

      {/* Product Des on left */}
      {/* Product InfoBox on left */}
      {/* Product ImagewithButton on left */}
    </Box>
  );
};

export default ProductHero;
