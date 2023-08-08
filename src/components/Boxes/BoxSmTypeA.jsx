import { Box, Typography, Grid } from "@mui/material";
import styles from './boxes.module.css'
import styled from "@emotion/styled";
import bgSkin from "/assets/cover-look.jpg";

const BoxSmTypeA = ({ subtitle, title, description, image }) => {

  console.log(image);

  return (
    <div className={styles.smallBox} style={{color: "black"}}>
      <Typography
      variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: 600, padding:  "16px"  }}
        >
        {subtitle}
      </Typography>
      <img
        src={image}
        alt={title}
        style={{ width: "40%", height: "auto", padding: "16px"}}
      />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>

    </div>
  );
};

export default BoxSmTypeA;
