// Product

import ProductTransition from "../ProductTransition";
import ProductTile from "../ProductTile"

// assets
import LookImage from "/assets/look_one.png";
import LookImageTwo from "/assets/look_two.jpg";


const Background = () => {

    let current_product = "corsica clementine";

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

    return ( <div className="background">
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
    </div>
    <div className="equal-grid">
      <div></div>
      <ProductTile
        title="As Easy As 1-2-3"
        subtitle="If only you'd known"
        description={categoryPageArr[0].description}
        orientation="right"
        hasButton={false}
      />
    </div>

      <div>
        <ProductTransition
          title={"Reset with CC LOOK-1"}
          subtitle={"Or as we like to call her, Clementine"}
          description={categoryPageArr[1].description}
          image={LookImage}
        />
      </div>
  </div>
);
}
 
export default Background;