import { Box } from "@mui/material";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const ProductPageNav = () => {
  return (
    <Box className={styles.productPageNav}>
      <NavLink
        className={styles.productPageNavItem}
        style={{ color: "white" }}
        to={"/look"}
      >
        look
      </NavLink>
    </Box>
  );
};

export default ProductPageNav;
