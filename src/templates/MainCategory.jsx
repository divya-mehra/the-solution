import { Box } from "@mui/material";
import { useState } from "react";

const MainCategory = ({ landing, setLanding }) => {
  return (
    <Box
      sx={[
        {
          p: 4,
          textAlign: "center",
          minHeight: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          opacity: "0",
          zIndex: "1",
          transition: "all ease 2s"
        },

        landing && {
          opacity: "1",
        },
      ]}
    >
      hiiiiiiii!
    </Box>
  );
};

export default MainCategory;
