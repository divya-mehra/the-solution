import { Box, Typography } from "@mui/material";
import BoxSmTypeA from "./BoxSmTypeA";
import styles from './boxes.module.css'

const BoxLgWithSmCards = ({title, arr}) => {

  // const MainBoxSmall = styled(Box)({
  //     margin: "0 auto",
  //     display: "flex",
  //     flexDirection: "column",
  //     width: "90%",
  //     paddingTop: 4 * 30,
  //     padding: 4 * 20,
  //     gap: 4 * 20,
  //     alignItems: "flex-start",
  //     justifyContent: "space-between",
  //     flexBasis: "0",
  //   });

  return (
    <Box className={`${styles.boxLgWithSmCards} ${styles.boxLg}`}>
      <Typography
        variant="h3"
        sx={{textAlign: "middle" }}
      >
        {title}
      </Typography>
      <div className={styles.boxSmWrapper}>
      {arr.map((s) => (
        <BoxSmTypeA number={s.number} title={s.title} description={s.description} />
        
        
      ))}
      </div>
    </Box>
  );
};

export default BoxLgWithSmCards;
