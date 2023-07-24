import Splash from "./Splash";
import MainCategoryDecisionPage from "./MainCategoryDecisionPage";
import CategoryPage from "./CategoryPage";
import { useState } from "react";

const Landing = () => {
  const [landing, setLanding] = useState(false);
  const [journeySelection, setJourneySelection] = useState(null);

  return journeySelection ? (
    <CategoryPage journeySelection={journeySelection}/>
  ) : (
    <div>
      <Splash landing={landing} setLanding={setLanding} />
      <MainCategoryDecisionPage landing={landing} setLanding={setLanding} journeySelection={journeySelection} setJourneySelection={setJourneySelection}/>
    </div>
  );
};

export default Landing;
