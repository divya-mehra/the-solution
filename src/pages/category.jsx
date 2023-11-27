import Layout from "../components/Layout";
import { useState, useEffect } from "react";

// components
import StaticHero from "../components/StaticHero";
import Background from "../components/Background";
import IntroParallax from "../components/IntroParallax";


// import story data
import stories from "../data/stories";
import ProductHero from "../components/ProductHero";
import ScrollStory from "../components/ScrollStory";
import ProductParallax from "../components/ProductParallax";

const Category = ({ journeySelection }) => {
  console.log(journeySelection);

  let current_product = "corsica clementine";
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
      <IntroParallax hero = {<StaticHero/>} background={<Background/>} />
      <ProductParallax hero = {<ProductHero current_product={current_product} />} />
      

      {/* <ProductHero current_product={current_product} />

      <div>
        <ScrollStory text={stories[`${current_product}`].text} />
      </div>
      <div>
        <StoryEnd />
      </div> */}
    </Layout>
  );
};

export default Category;
