import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Landing from "./pages/landing";
import Category from "./pages/category";
import Product from "./pages/product";

import ScrollToTop from "./components/ScrollToTop";

import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; // import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/corsica-clementine",
    component: () => <Product name="corsica clementine" />, // Wrap JSX in a function
  },
  {
    path: "/look",
    component: () => <Category journeySelection={"LOOK"} />, // Wrap JSX in a function
  },
];

const theme = createTheme({
  palette: { primary: { main: "#000" }, secondary: { main: "#ccc" } },
  
  typography: {
    fontFamily: ["DIN"],
    hero: {
      fontFamily: "DIN",
      fontWeight: 300,
      color: grey[100],
      // wordBreak: "break-all",
      "@media (max-width: 600px)": {
        fontSize: "1.5rem", // Font size for extra-small (mobile) screens
      },
      "@media (min-width: 600px) and (max-width: 960px)": {
        fontSize: "2rem", // Font size for small (tablet) screens
      },
      "@media (min-width: 960px) and (max-width: 1280px)": {
        fontSize: "3rem", // Font size for medium (laptop) screens
      },
      "@media (min-width: 1280px)": {
        fontSize: "4rem", // Font size for large (desktop) screens and above
      },
    },
    story: {
      fontFamily: "Optima",
      fontSize: 20,
    },
    h1: {
      fontFamily: "Optima",
      fontWeight: 300,
      fontSize: 82,
    },
    h3: {
      fontFamily: "Optima",
      fontWeight: 600,
      fontSize: 72,
    },
    h5: {
      fontFamily: "DIN",
      fontWeight: 600,
      fontSize: 18,
    },
    h6: {
      fontFamily: "DIN",
      fontWeight: 600,
      fontSize: 21,
    },
    h7: {
      fontFamily: "DIN",
      fontWeight: 500,
      fontSize: 14,
    },
    body1: {
      fontFamily: "DIN",
      fontWeight: 400,
      fontSize: 21,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        {/* Replaces MemoryRouter with BrowserRouter */}
        <ScrollToTop />
        {/* This will scroll the user to the top on route changes */}
        <CssBaseline />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
