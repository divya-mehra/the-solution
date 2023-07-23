import { Button, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

const Splash = () => {
  const CustomButton = styled(Button)({ padding: 4 * 2, margin: 4 * 4 });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 4,
        textAlign: "center",
        justifyContent: "center"
      }}
    >
      <Typography variant="variantOne">Welcome to The Solution</Typography>
      <Typography>We're thrilled to have you here.</Typography>
      <CustomButton variant="contained"> Enter </CustomButton>
    </Box>
  );
};

export default Splash;
