import Splash from "./Splash";
import MainCategory from "./MainCategory";
import { useState } from "react";

const Landing = () => {
  const [landing, setLanding] = useState(false);

  return (
    <div>
      <Splash landing={landing} setLanding={setLanding}/>
      <MainCategory landing={landing} setLanding={setLanding}/>
    </div>
  );
};

export default Landing;
