import Layout from "../components/Layout";
import { useState, useEffect } from "react";

// components
import StaticHero from "../components/StaticHero";
import Background from "../components/Background";
import IntroParallax from "../components/IntroParallax";
import ProductTransition from "../components/ProductTransition";
import Story from "../components/Story";



// import story data
import ProductParallax from "../components/ProductParallax";

const Category = ({ journeySelection }) => {
  console.log(journeySelection);

  // Image Loading

  // const [imagesLoaded, setImagesLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "/assets/look_hero.png";
  //   img.onload = () => {
  //     setImagesLoaded(true);
  //   };
  //   img.onerror = () => {
  //     // Handle image loading error here
  //   };
  // }, []);

  // if (!imagesLoaded) {
  //   // Return a loading indicator or fallback content
  //   return <div></div>;
  // }

  return (
    <Layout home={false}>
      <IntroParallax hero = {<StaticHero/>} background={<Background/>} />
      <ProductParallax transition={       
        <ProductTransition
          title={"Reset with CC LOOK-1"}
          subtitle={"Or as we like to call her, Clementine"}
          description={"Clementine is our signature Reset product. Start with her and you won't ever look back."}
        />
      } story={<Story/>}/>
    </Layout>
  );
};

export default Category;
