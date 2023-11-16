import styles from "../category.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const ProductTile = ({ title, subtitle, description, hasButton }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  let button = (
    <div
      className={styles.productButton}
      onClick={() => {
        routeChange("/corsica-clementine");
      }}
    >
      Meet Clementine
    </div>
  );

  return (
    <Box className={`${styles.boxLg}`}>
      <div
        style={{
          padding: "32px",
        }}
      >
        <h3>
          {/* ffb835 */}
          {title}
        </h3>
        <h6>{subtitle}</h6>
        {description.map((p) => (
          <p>{p}</p>
        ))}
        {hasButton ? button : null}
      </div>
    </Box>
  );
};

export default ProductTile;
