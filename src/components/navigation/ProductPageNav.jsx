import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import CategoryPage from "../../templates/CategoryPage";

const ProductPageNav = () => {
  const ProductPageNav = styled(Box)({
    position: "relative",
    top: "0",
    height: "50px",
    left: "0",
    right: "0",
    backgroundColor: "black",
    opacity: "0.5",
  });

  return (
    <>
      <ProductPageNav>
        <NavLink style={{color: "white"}} to={'/look'}>look</NavLink>
      </ProductPageNav>
    </>
  );
};

export default ProductPageNav;
