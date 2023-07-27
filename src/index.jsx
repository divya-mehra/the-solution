import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./templates/Landing";
import { ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: { primary: { main: "#000" }, secondary: { main: "#ccc" } },
  typography: {
    fontFamily: ["DIN"],
    variantTest: { fontSize: "6rem", color: red[200] },
    h1: {
      fontFamily: "Optima",
      fontWeight: 300,
      fontSize: 82,
    },
    h3: {
      fontFamily: "Optima",
    },
    h5: {
      fontFamily: "DIN",
      fontWeight: 600,
      fontSize: 18,
    },
    body1: {
      fontFamily: "DIN",
      fontWeight: 400
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  </React.StrictMode>
);
