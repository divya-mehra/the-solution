import { Box } from "@mui/material";
import styled from "@emotion/styled";

const BoxSmTypeA = ({ subtitle, title, description, icon }) => {
  const SmallBox = styled(Box)({
    border: "0.5px solid black",
    aspectRatio: "3/2",
    flexGrow: "1",
    padding: 4 * 4,
  });

  return (
    <SmallBox>
      <p>{subtitle}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{icon}</p>
    </SmallBox>
  );
};

export default BoxSmTypeA;
