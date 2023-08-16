import styles from "./product.module.css";
import { Box, Typography } from "@mui/material";

const ProductStart = ({ description_two }) => {
  return (
    <>
      <div
        className={`${styles.productFullWidth}`}
        style={{
          position: "relative",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          // backgroundImage: "url(/assets/look_nowoman.png)",
          // backgroundSize: "cover",
          color: "white",
        }}
      >
        {/* <div
          className={styles.gradientOverlay}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
            pointerEvents: "none", // Prevent interactions with the overlay
          }}
        ></div> */}
        <p
          style={{
            position: "absolute",
            top: "70%",
            color: "black",
            // left: "50%",
            width: "100%",
            height: "100%",
            padding: "16px",
            zIndex: 2,
          }}
        >
          {description_two}
        </p>
      </div>
    </>
  );
};

export default ProductStart;
