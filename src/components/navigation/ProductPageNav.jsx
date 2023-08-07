import { Box } from "@mui/material";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const ProductPageNav = () => {
  return (
    <Box className={styles.productPageNav}>
      <NavLink
        className={styles.productPageNavItem}
        style={{ color: "white", textTransform: "uppercase" }}
        to={"/look"}
      >
        back to look
      </NavLink>
    </Box>
  );
};

export default ProductPageNav;
