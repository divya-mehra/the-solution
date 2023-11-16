import { Box, Typography, Grid } from "@mui/material";
import styles from "../category.module.css";

const IconSquare = ({ subtitle, title, description, image }) => {
  return (
    <div 
    className={styles.smallBox}
    style={{backgroundColor: "white", backgroundSize: "cover", color: "black"}}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "32px", height: "auto", padding: "8px" }}
      />
      <h6 style={{textTransform: "uppercase"}}
      >
        {title}
      </h6>
      <p>
        {description}
      </p>
    </div>
  );
};

export default IconSquare;
