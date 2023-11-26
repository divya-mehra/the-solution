import { useSpring, animated } from "react-spring";
import { useEffect } from "react";


const Parallax = ({ hero, background }) => {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));

  // Update scroll value when the user scrolls
  const handleScroll = () => {
    console.log(window.scrollY)
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
    <div style={{ overflow: "hidden" }}>
      <animated.div
        style={{
            transform: scroll.to((s) => `translate3d(0, ${s}px, 0)`),
        }}
      >
        {hero}
      </animated.div>
      <div style={{ marginTop: "100vh" }}>
      {background}
      </div>
    </div>
  );
};

export default Parallax;
