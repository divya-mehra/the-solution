import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const ProductPageNav = ({hasBackground, linkTo}) => {

  return (
    <Box className={styles.productPageNav} style={{backgroundColor: (hasBackground) ? "#00000070": "transparent"}}>
      <NavLink
        className={styles.productPageNavItem}
        style={{ color: "white", textTransform: "uppercase"}}
        to={linkTo}
      >
        <Typography variant="h7">
        ← back
        </Typography>
      </NavLink>
    </Box>
  );
};

export default ProductPageNav;
