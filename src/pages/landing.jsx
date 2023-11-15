import Splash from "./splash";
import Nav from "./nav";
import CategoryPage from "./category";
import { useState } from "react";

const Landing = () => {
  const [landing, setLanding] = useState(false);
  const [journeySelection, setJourneySelection] = useState(null);

  return journeySelection ? (
    <CategoryPage journeySelection={journeySelection}/>
  ) : (
    <div>
      <Splash landing={landing} setLanding={setLanding} />
      <Nav landing={landing} setLanding={setLanding} journeySelection={journeySelection} setJourneySelection={setJourneySelection}/>
    </div>
  );
};

export default Landing;
