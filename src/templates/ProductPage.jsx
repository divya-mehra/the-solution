import { Box } from "@mui/material";
import styled from "@emotion/styled";
import ProductPageNav from "../components/navigation/ProductPageNav";

const ProductPage = ({ name }) => {
  const MainBox = styled(Box)({
    display: "flex",
    height: "70vh",
    padding: 4 * 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "0",
  });

  const MainBoxSmall = styled(Box)({
    display: "flex",
    height: "40vh",
    padding: 4 * 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "0",
  });

  const FlexChild = styled.div({
    flex: "1 1 0", // Make the flex children equal width
    textAlign: "right",
    height: "100%",
    margin: 4 * 5,
  });

  return (
    <>
      <ProductPageNav />
      {name}
    </>
  );
};

export default ProductPage;
