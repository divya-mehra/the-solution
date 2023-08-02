import styles from "./boxes.module.css";
import { Box, Typography } from "@mui/material";
import LookHero from '../../assets/look_hero.jpg'

{
  /* <Typography variant="hero">
    Two women pose. One smiles bashfully and looks to the side. The other
    is fierce and stares at the camera. Her skin sparkles like a Christmas
    ornament.
</Typography> */
}

const BoxLgImageOnly = () => {

    const mouseOverHandler = () => {
        setTimeout(()=> {}, 2000)
    }

  return (
    <div
      className={`${styles.boxLgImageOnly} `}
      style={{
        backgroundImage: `url(${LookHero})`,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#ffffff40',
        opacity: 1
      }}
      onMouseOver={mouseOverHandler}
    >
        
        
        <div
        className="textCover"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0
        }}>
<Typography variant="hero" sx={{color: '#000'}}>A woman looks on, her eyes closed. She is serene. She is fierce. She is zen. She is beautiful. <span style={{color: "#ff0000"}}>Her skin sparkles</span> like a Christmas ornament. She is surrounded my saturated fruit and leaves.</Typography>   
        </div>
      


        
    </div>
  );
};

export default BoxLgImageOnly;
