import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Splash from "./templates/Splash";
import { ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: { primary: { main: "#000" }, secondary: { main: "#ccc" } },
  typography: { variantOne: { fontSize: "6rem", color: red[200] } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  </React.StrictMode>
);
