import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LookImage from "../assets/look-page.jpg";

const CategoryPage = ({ journeySelection }) => {
  console.log(journeySelection);

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
    margin: 4*5
  });

  return (
    <>
      <MainBox>
        <FlexChild>
          <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 1 }}>
            Everyone has a story.
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 2 }}>
            Yours begins here.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            <p>
              We know it's hard to keep your wellness in check. How you look
              influences how you feel and that where we come in. We have the
              products to make you look 100% so you can feel your best.
            </p>
            <p>
              In our homegrown LOOK category, we derive the highest-quality
              ingredients from the Mediterranean, India, and the Far East.
              Believe it or not, we've actually got scouts out there.These
              solutions are tried and tested in our scientific labratories
              before even being considered for you.
            </p>
          </Typography>
        </FlexChild>
        <FlexChild
          
        >
          {/* <Typography sx={{ textAlign: "right" }}></Typography> */}
          <Box sx={{ backgroundImage: `url(${LookImage})`, backgroundSize: "cover", height: "100%" }}></Box>
        </FlexChild>
      </MainBox>
      <MainBoxSmall>
        <div></div>
        <Typography variant="h3" sx={{ textAlign: "right" }}>
          Aklhemy is as easy as 1-2-3
        </Typography>
      </MainBoxSmall>
      <MainBox>
        <Typography variant="h3" sx={{ textAlign: "right" }}>
          Start with CC LOOK-1
        </Typography>
      </MainBox>
    </>
  );
};

export default CategoryPage;
