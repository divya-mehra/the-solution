import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import bgSkin from "/assets/cover-look.jpg";

const BoxSmTypeA = ({ subtitle, title, description, image }) => {
  const SmallBox = styled(Box)({
    // border: "0.5px solid black",
    backgroundColor: "white",
    borderRadius: 2 * 4,
    aspectRatio: "3/2",
    flexGrow: "1",
    padding: 4 * 4,
  });

  console.log(image);

  return (
    <SmallBox style={{ textAlign: "center" }}>
      <Typography
      variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: 600, padding:  "16px"  }}
        >
        {subtitle}
      </Typography>
      <img
        src={image}
        alt={title}
        style={{ width: "40%", height: "auto", padding: "16px" }}
      />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>

    </SmallBox>
  );
};

export default BoxSmTypeA;
