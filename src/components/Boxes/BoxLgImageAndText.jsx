import styles from "./boxes.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const BoxLgImageAndText = ({
  title,
  subtitle,
  description,
  hasButton,
}) => {
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
    <Box
    className={`${styles.boxLg}`}
      sx={{
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "64px"
          // order: orientation === "left" ? "1" : "2",
          // marginLeft: orientation === "right" ? "auto" : 0,
          // paddingLeft: orientation === "right" ? 0 : "64px",
          // paddingRight: orientation === "right" ? "64px" : 0,
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
        {(hasButton) ? button : null}
      </div>

    </Box>
  );
};

export default BoxLgImageAndText;
