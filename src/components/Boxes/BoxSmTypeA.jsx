import { Box } from "@mui/material";
import styled from "@emotion/styled";

const BoxSmTypeA = ({ number, title, description }) => {
  const SmallBox = styled(Box)({
    border: "1px solid black",
    flex: "1 1 1 0",
    aspectRatio: "1/1",
    flexGrow: "1",
    padding: 4 * 4,
  });

  return (
    <SmallBox>
      <p>Step {number}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>Icon here</p>
    </SmallBox>
  );
};

export default BoxSmTypeA;
