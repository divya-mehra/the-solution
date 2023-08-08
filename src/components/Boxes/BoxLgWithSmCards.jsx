import { Box, Typography } from "@mui/material";
import BoxSmTypeA from "./BoxSmTypeA";
import styles from './boxes.module.css'

const BoxLgWithSmCards = ({title, arr}) => {

  return (


    <Box className={`${styles.boxLgWithSmCards} ${styles.boxLg}`}>
      <Typography
        variant="h3"
        sx={{textAlign: "middle" }}
      >
        {title}
      </Typography>
      <div className={styles.boxSmWrapper}>
      
    
      </div>
    </Box>
  );
};

export default BoxLgWithSmCards;
