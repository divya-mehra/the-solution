import Layout from "../components/Layout";
import { useState, useEffect } from "react";

// components
import StaticHero from "../components/StaticHero";
import ProductTile from "../components/ProductTile";
import ProductTransition from "../components/ProductTransition";
import ProductHero from "../components/ProductHero";

import ScrollStory from "../components/ScrollStory";
import StoryEnd from "../components/StoryEnd";

// assets
import LookImage from "/assets/look_one.png";
import LookImageTwo from "/assets/look_two.jpg";

// styles
import styles from "./pages.module.css";

// import story data
import stories from "../data/stories";

const Category = ({ journeySelection }) => {
  console.log(journeySelection);

  let current_product = "corsica clementine";

  const stepsArr = [
    {
      // subtitle: "1",
      title: "Reset",
      description: "Prepare yourself for the transformation ahead.",
      image: "/assets/icons/1.png",
    },
    {
      // subtitle: "2",
      title: "Rebuild",
      description: "Rebuild your foundations from the ground up.",
      image: "/assets/icons/2.png",
    },
    {
      // subtitle: "3",
      title: "Regrow",
      description: "Continue to grow well past the 3 step system.",
      image: "/assets/icons/3.png",
    },
  ];

  const categoryPageArr = [
    {
      description: [
        "How you look influences how you feel.",
        "Our Solutions make you look 100% so you can feel on top of the world.",
        "For our homegrown ~look~ products, we derive the highest-quality ingredients from the Mediterranean, India, and the Far East. These combinations are tested in our scientific laboratories, where some of the brightest minds come together to develop the right balance of ingredients just for you.",
        "You deserve your Solution. So what are you waiting for?",
      ],
    },
    {
      description: [
        "Clementine is our signature Reset product. Start with her and you won't ever look back.",
      ],
    },
  ];

  // Image Loading

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/look_hero.png";
    img.onload = () => {
      setImagesLoaded(true);
    };
    img.onerror = () => {
      // Handle image loading error here
    };
  }, []);

  if (!imagesLoaded) {
    // Return a loading indicator or fallback content
    return <div></div>;
  }

  return (
    <Layout home={false}>
      <StaticHero />
      {/* <Grid container className={styles.wrapper} rowSpacing={16}>
        <Grid item xs={12}> */}
      <div className="equal-grid">
        <div>
          <ProductTile
            title="Everyone has a story"
            subtitle="Yours begins here"
            description={categoryPageArr[0].description}
            orientation="left"
            hasButton={false}
          />
        </div>
        <div>
          <img src={LookImageTwo} width="100%"></img>
        </div>
        {/* </Grid> */}
      </div>
      {/* "#b24923" */}

      <div className="equal-grid"
      >
        <div></div>
                  <ProductTile
            title="As Easy As 1-2-3"
            subtitle="If only you'd known"
            description={categoryPageArr[0].description}
            orientation="right"
            hasButton={false}
          />
        
          
        
      </div>

      <div className={styles.bottomBox}>
        <div>
          <ProductTransition
            title={"Reset with CC LOOK-1"}
            subtitle={"Or as we like to call her, Clementine"}
            description={categoryPageArr[1].description}
            image={LookImage}
          />
        </div>
      </div>
      <ProductHero current_product={current_product} />
      
      <div>
        <ScrollStory text={stories[`${current_product}`].text} />
      </div>
      <div>
        <StoryEnd />
      </div>
    </Layout>
  );
};

export default Category;
