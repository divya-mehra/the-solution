import { Box, Typography, Grid } from "@mui/material";
import styles from "../category.module.css";

const IconSquare = ({ subtitle, title, description, image }) => {
  return (
    <div 
    className={styles.smallBox}
    style={{backgroundColor: "black", backgroundSize: "cover", color: "white"}}
    >

      <img
        src={image}
        alt={title}
        style={{ width: "40%", height: "auto", padding: "8px" }}
      />
      <Typography
        variant="h6"
        sx={{ textTransform: "uppercase"}}
      >
        {title}
      </Typography>
      <Typography variant="body1" style={{ padding: "4px" }}>
        {description}
      </Typography>
    </div>
  );
};

export default IconSquare;
