import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import CategoryPage from "../../templates/CategoryPage";

const ProductPageNav = () => {
  const ProductPageNav = styled(Box)({
    position: "relative",
    top: "0",
    height: "100px",
    left: "0",
    right: "0",
    backgroundColor: "red",
    opacity: "0.5",
  });

  return (
    <>
      <ProductPageNav>
        <NavLink to={'/look'}>look</NavLink>
      </ProductPageNav>
    </>
  );
};

export default ProductPageNav;
