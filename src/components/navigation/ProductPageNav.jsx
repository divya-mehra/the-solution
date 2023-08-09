import { Box } from "@mui/material";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const ProductPageNav = () => {

let product_color = "#c35b37"

  return (
    <Box className={styles.productPageNav} style={{backgroundColor: product_color}}>
      <NavLink
        className={styles.productPageNavItem}
        style={{ color: "white", textTransform: "uppercase"}}
        to={"/look"}
      >
        back to look
      </NavLink>
    </Box>
  );
};

export default ProductPageNav;
