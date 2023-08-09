import styles from "./boxes.module.css";
import { Box, Typography } from "@mui/material";


const ProductStart = ({description_two}) => {
  return <Box className={styles.productFullWidth}>

    {description_two}

  </Box>;
};

export default ProductStart;
