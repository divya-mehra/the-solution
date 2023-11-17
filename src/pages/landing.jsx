import Splash from "./splash";
import Nav from "./nav";
import CategoryPage from "./category";
import { useState } from "react";

const Landing = () => {
  const [landing, setLanding] = useState(false);

  return (
    <div>
      <Splash landing={landing} setLanding={setLanding} />
      <Nav landing={landing} setLanding={setLanding}/>
    </div>
  );
};

export default Landing;
