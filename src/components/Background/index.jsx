import "./index.scss";

// Product

import ProductTile from "../ProductTile";

// assets
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

  return (
    <div className="background">
      <div className="equal-grid max-width lightest" style={{"min-height": "100vh", alignItems: "center"}}>
        
          <ProductTile
            title="Everyone has a story"
            subtitle="Yours begins here"
            description={categoryPageArr[0].description}
            orientation="left"
            hasButton={false}
          />
        
        <div>
          <img src={LookImageTwo} width="100%"></img>
        </div>
      </div>
      {/* <div className="equal-grid" style={{ height: "90vh" }}>
        
        <div></div>
        <ProductTile
          title="As Easy As 1-2-3"
          subtitle="If only you'd known"
          description={categoryPageArr[0].description}
          orientation="right"
          hasButton={false}
        />
      </div> */}
    </div>
  );
};

export default Background;
