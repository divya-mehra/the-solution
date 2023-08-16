import { Box, Typography, Grid } from "@mui/material";
import styles from "./category.module.css";
import styled from "@emotion/styled";
import bgSkin from "/assets/cover-look.jpg";

const SmallCard = ({ subtitle, title, description, image }) => {
  return (
    <div className={styles.smallBox}>
      {/* <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: 600, padding: "8px" }}
      >
        {subtitle}
      </Typography> */}
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

export default SmallCard;
