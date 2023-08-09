import styles from "./boxes.module.css";
import { Box, Typography } from "@mui/material";


const ProductStart = ({description_two}) => {
  return <Box className={styles.productFullWidth} sx={{height: "70vh", display:"flex", flexDirection:"column", justifyContent: "center"}}>

    {description_two}

  </Box>;
};

export default ProductStart;
