import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Footer = () => {
  const FooterElement = styled(Box)({
    margin: "0 auto",
    width: "90%",
    display: "flex",
    padding: 4 * 40,
  });

  return <FooterElement></FooterElement>;
};

export default Footer;
