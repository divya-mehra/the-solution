import { Box, Typography } from "@mui/material";
import styles from "./boxes.module.css";
import image from "../../assets/bottle.jpg"

const ProductHero = ({title, code, desProduct, ingredients, bestFor, }) => {
    return ( 
    
    <Box className={`${styles.productHero} ${styles.boxLg}`}>
        <div
        className={styles.flexChild}
      >
        <Typography variant="h3" sx={{ textAlign: "left", paddingBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", paddingBottom: 3 }}>
          {code}
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          {desProduct.map((p) => (
            <p>{p}</p>
          ))}
        </Typography>
      </div>

      
      {/* Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: "50%",
          backgroundSize: "cover"
        }}>
      </div>
{/* Product Des on left */}
{/* Product InfoBox on left */}
{/* Product ImagewithButton on left */}





    </Box> );
}
 
export default ProductHero;