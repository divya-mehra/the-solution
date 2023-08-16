import styles from "./product.module.css";
import { Box, Typography } from "@mui/material";

const ProductStart = ({ description_two }) => {
  return (
    <>
      <div className={`${styles.productStart} ${styles.productFullWidth} `}>
        <p
          style={{
            color: "black",
          }}
        >
          {description_two}
        </p>
      </div>
    </>
  );
};

export default ProductStart;
