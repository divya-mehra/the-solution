import Layout from "../components/Layout";
import { useState, useEffect } from "react";

// components
import StaticHero from "../components/StaticHero";
import Background from "../components/Background";
import Parallax from "../components/Parallax";


// import story data
import stories from "../data/stories";

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
      <Parallax hero = {<StaticHero/>} background={<Background/>} />

      {/* Panel 2 */}

      {/* Panel 2 end */}

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
