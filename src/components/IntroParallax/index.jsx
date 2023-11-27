import { useSpring, animated } from "react-spring";
import { useEffect } from "react";


const IntroParallax = ({ hero, background }) => {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));

  // Update scroll value when the user scrolls
  const handleScroll = () => {
    
    set({ scroll: window.scrollY });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", position: "relative", height: "100%"}}>
      <animated.div
        style={{
            transform: scroll.to((s) => `translate3d(0, ${s}px, 0)`),
        }}
      >
        {hero}
      </animated.div>
      <div >
      {background}
      </div>
    </div>
  );
};

export default IntroParallax;
