import styles from "./boxes.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const BoxLgImageAndText = ({ title, subtitle, description, hasButton }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  let button = (
    <Button
      onClick={() => {
        routeChange("/corsica-clementine");
      }}
    >
      Meet Clementine
    </Button>
  );

  return (
    <Box className={`${styles.boxLg}`}>
      <div
        style={{
          padding: "64px",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
          {subtitle}
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          {description.map((p) => (
            <p>{p}</p>
          ))}
        </Typography>
        {hasButton ? button : null}
      </div>
    </Box>
  );
};

export default BoxLgImageAndText;
