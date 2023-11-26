import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Layout/base.scss";


import Landing from "./pages/landing";
import Category from "./pages/category";
import Nav from "./pages/nav";

import ScrollToTop from "./components/ScrollToTop";

import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

import CssBaseline from "@mui/material/CssBaseline";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 


const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/look",
    component: () => <Category journeySelection={"LOOK"} />, // Wrap JSX in a function
  },
  {
    path: "/nav",
    component: () => <Nav landing={true}  />, // Wrap JSX in a function
  },
];

const theme = createTheme({
  palette: { primary: { main: "#000" }, secondary: { main: "#ccc" } },
})

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
