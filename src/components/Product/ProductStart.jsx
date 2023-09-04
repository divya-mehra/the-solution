import styles from "./product.module.css";
import { Box, Typography } from "@mui/material";

const ProductStart = ({ description_two }) => {
  return (
    <>
      <div className={`${styles.productStart} ${styles.productFullWidth} `}>
        <p
          style={{
            color: "#041c04",
            fontWeight: 600,
            fontSize: 18,
            // fontFamily: "Optima"
            
          }}
        >
          {description_two}
        </p>
      </div>
    </>
  );
};

export default ProductStart;
