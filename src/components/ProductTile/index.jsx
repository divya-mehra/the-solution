import styles from "../category.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const ProductTile = ({ title, subtitle, description, hasButton }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  let button = (
    <div className={styles.productButton}
      
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
        <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2, color: "#000" }}>
        {/* ffb835 */}
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
          {subtitle}
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          {description.map((p) => (
            <p>{p}</p>
          ))}
        </Typography>
        {hasButton ? button : null}
      </div>
    </Box>
  );
};

export default ProductTile;