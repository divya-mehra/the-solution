import styles from "./boxes.module.css";
import { Box } from "@mui/material";
import LookHero from '../../assets/look_hero.jpg'

{
  /* <Typography variant="hero">
    Two women pose. One smiles bashfully and looks to the side. The other
    is fierce and stares at the camera. Her skin sparkles like a Christmas
    ornament.
</Typography> */
}

const BoxLgImageOnly = () => {

  return (
    <div
      className={`${styles.boxLgImageOnly} `}
      style={{
        backgroundImage: `url(${LookHero})`,
      }}
    >
        Hi
    </div>
  );
};

export default BoxLgImageOnly;
