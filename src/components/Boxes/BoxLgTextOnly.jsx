import { Box } from "@mui/material";
import styles from './boxes.module.css'

const BoxLgTextOnly = () => {
    return ( <Box className={`${styles.boxLgTextOnly} ${styles.boxLg}`}>text only</Box> );
}
 
export default BoxLgTextOnly;