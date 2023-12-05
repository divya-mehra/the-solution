import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const StoryEnd = () => {
  return (
  
  <div className="story-end full-width flex-column" style = {{backgroundImage: `url("/assets/look_nowoman.png")`, backgroundSize: "cover" }}>
    {/* <Typography variant="h3"><i>It's everything you need.</i></Typography> */}
    <Typography variant="h4" paddingBottom={3}>Order now and get free shipping right to your doorstep.</Typography>
    <Typography variant="body1">(And don't worry. We screen all deliveries for unwanted surprises.)</Typography>
    <Link to="/nav" style={{"alignSelf": "bottom", "padding-top": "24px", "color": "white", "textDecoration": "none"}}>← Take Me Home</Link>


  </div>
  )
};

export default StoryEnd;
