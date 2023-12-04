import ProductHero from "../ProductHero";
import ScrollStory from "../ScrollStory";
import stories from "../../data/stories";
import StoryEnd from "../StoryEnd";

const Story = () => {
  let current_product = "corsica clementine";
  return (
    <div className="lightest">
      <ProductHero current_product={current_product} />
      <ScrollStory text={stories[`${current_product}`].text} />
      <StoryEnd />
    </div>
  );
};

export default Story;
