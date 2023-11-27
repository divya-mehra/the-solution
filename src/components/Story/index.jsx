import ProductHero from "../ProductHero";
import ScrollStory from "../ScrollStory";
import stories from "../../data/stories";
import StoryEnd from "../StoryEnd";

const Story = () => {

    let current_product = "corsica clementine"
    return ( <>
          <ProductHero current_product={current_product} />

      <div>
        <ScrollStory text={stories[`${current_product}`].text} />
      </div>
      <div>
        <StoryEnd />
      </div>
    </> );
}
 
export default Story;