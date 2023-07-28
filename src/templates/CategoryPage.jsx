import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LookImage from "../assets/look_one.jpg";
import LookImageTwo from "../assets/look_two.jpg";
import Footer from "../components/Footer";
import MedBox from "../components/CategoryPage/MedBox"


const CategoryPage = ({ journeySelection }) => {
  console.log(journeySelection);

  const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flexGrow: 1,
  });

  const MainBox = styled(Box)({
    position: "relative",
    margin: "0 auto",
    display: "flex",
    height: "70vh",
    width: "90%",
    padding: 4 * 20,
    alignItems: "flex-start",
    gap: 4 * 20,
    justifyContent: "space-between",
    flexBasis: "0",
  });

  const MainBoxOne = styled(Box)({
    margin: "0 auto",
    width: "90%",
    display: "grid",
    gridTemplateColumns: "40% auto",
    gridTemplateRows: "1fr",
    padding: 4 * 40,
  });

  const ImageElement = styled.div({
    position: "absolute",
    right: 0,
    // border: "1px solid black",
    height: "700px",
    width: "50%",
    backgroundImage: `url(${LookImage})`,
    backgroundSize: "cover",
  });

  const ImageElementLeft = styled.div({
    position: "absolute",
    left: 0,
    // border: "1px solid black",
    aspectRatio: "1/1",
    width: "50%",
    backgroundImage: `url(${LookImageTwo})`,
    backgroundSize: "cover",
    marginBottom: 4*4,
    
  });

  const MainBoxSmall = styled(Box)({
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    paddingTop: 4 * 30,
    padding: 4 * 20,
    gap: 4 * 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexBasis: "0",
  });

  const FlexChild = styled.div({
    flex: "1 1 0", // Make the flex children equal width
    textAlign: "right",
    height: "100%",
    margin: 4 * 5,
  });

  const ImageBox = styled.div({
    height: "100%",
    width: "100%",
    margin: 4 * 5,
    padding: 4 * 10,
    border: "1px solid grey",
    });

  const MainBoxThree = styled(Box)({
    
    margin: "0 auto",
    width: "90%",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr",
    padding: 4 * 40,
})


  return (
    <><Wrapper>
      <MainBox>
        <ImageBox>
          <Typography variant="hero">
            Two women pose. One smiles bashfully and looks to the side. The
            other is fierce and stares at the camera. Her skin sparkles like a
            Christmas ornament.
          </Typography>
        </ImageBox>
      </MainBox>
      <MainBoxOne>
        <FlexChild>
          <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2 }}>
            Everyone has a story
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
            Yours begins here.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            <p>
              We know life gets hard. You are expected to rise at the crack of
              dawn, put on your best face, and move through the day while
              supporting a family, a career, a house, whole lives other than
              your own.
            </p>

            <p>
              But wellness doesn't have to be a problem. Not when you've got The
              Solution.
            </p>
            <p>
              How you look influences how you feel. We have the products to make
              you look 100% so you can feel on top of the world. 200%. (Can
              someone check the math on this?)
            </p>
            <p>
              In our homegrown LOOK category, we derive the highest-quality
              ingredients from the Mediterranean, India, and the Far East. These
              solutions are tried and tested in our scientific labratories,
              where some of the brightest minds come together to develop the
              right balance of ingredients for you.
            </p>
          </Typography>
        </FlexChild>
        <ImageElement></ImageElement>
      </MainBoxOne>
      <MainBoxSmall>
        <Typography
          variant="h3"
          sx={{ textAlign: "right", alignSelf: "flex-end" }}
        >
          As easy as 1-2-3
        </Typography>
        <MedBox/>
      </MainBoxSmall>
      <MainBoxThree>
        <Typography variant="h3" sx={{ textAlign: "right" }}>
          Start with CC LOOK-1
        </Typography>
        <ImageElementLeft></ImageElementLeft>
      </MainBoxThree>
      <Footer />
    </Wrapper></>

  );
};

export default CategoryPage;
