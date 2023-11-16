import { Box, Typography } from "@mui/material";
import styles from "../nav.module.css";
import { NavLink } from "react-router-dom";

const ProductNav = ({hasBackground, linkTo}) => {

  return (
    <Box className={styles.productPageNav} style={{backgroundColor: (hasBackground) ? "#000000bb": "transparent"}}>
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

export default ProductNav;
