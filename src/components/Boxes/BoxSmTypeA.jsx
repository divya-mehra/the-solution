import { Box } from "@mui/material";
import styled from "@emotion/styled";
import bgSkin from "../../assets/cover-look.jpg";

const BoxSmTypeA = ({ subtitle, title, description, icon }) => {
  const SmallBox = styled(Box)({
    // border: "0.5px solid black",
    backgroundColor: "#acd4c4",
    borderRadius: 2 * 4,
    aspectRatio: "3/2",
    flexGrow: "1",
    padding: 4 * 4,
  });

  return (
    <SmallBox style={{ textAlign: "center" }}>
      {/* what's the subtitle? */}
      <p style={{ textTransform: "uppercase", fontWeight: 600 }}>{title}</p>
      <p>{description}</p>
      <p>{icon}</p>
    </SmallBox>
  );
};

export default BoxSmTypeA;
