import styles from "./boxes.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const BoxLgTypeA = ({
  orientation,
  title,
  subtitle,
  description,
  image,
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
    className={`${styles.boxLgTypeA} ${styles.boxLg}`}
      sx={{
        // gridTemplateColumns: orientation === "left" ? "40% auto" : "auto 40%",
        margin: orientation === "left" ? "0 auto" : "auto 0",
        flexDirection: orientation === "left" ? "row" : "row-reverse",
        alignItems: "center",
      }}
    >
      <div
        className={styles.flexChild}
        style={{
          // order: orientation === "left" ? "1" : "2",
          marginLeft: orientation === "right" ? "auto" : 0,
          paddingLeft: orientation === "right" ? 0 : "64px",
          paddingRight: orientation === "right" ? "64px" : 0,
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

      

      {/* Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={
          orientation === "left" ? styles.ImageLgRight : styles.ImageLgLeft
        }
      ></div>
    </Box>
  );
};

export default BoxLgTypeA;
