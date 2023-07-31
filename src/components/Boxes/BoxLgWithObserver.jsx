import { Box } from "@mui/material";
import styles from './boxes.module.css'

const BoxLgWithObserver = () => {
  return <Box className={`${styles.boxLgWithObserver} ${styles.boxLg}`}>

<div style={{
    position: "sticky",
    top: 0,
    height: "100vh"
    }}>1</div>
<div>2</div>


  </Box>;
};

export default BoxLgWithObserver;
