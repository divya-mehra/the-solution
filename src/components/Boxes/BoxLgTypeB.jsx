import { Box, Typography } from "@mui/material";
import BoxSmTypeA from "./BoxSmTypeA";
import styles from './boxes.module.css'

const BoxLgTypeB = ({title}) => {

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

  const stepsArr = [
    { number: 1, title: "Renew" },
    {
      number: 2,
      title: "Refresh",
    },
    {
      number: 3,
      title: "Regenerate",
    },
  ];

  return (
    <Box className={`${styles.boxLgTypeB} ${styles.boxLg}`}>
      <Typography
        variant="h3"
        sx={{textAlign: "middle" }}
      >
        {title}
      </Typography>
      <div className={styles.boxSmWrapper}>
      {stepsArr.map((s) => (
        <BoxSmTypeA number={s.number} title={s.title} description={"des"} />
        
      ))}
      </div>
    </Box>
  );
};

export default BoxLgTypeB;
