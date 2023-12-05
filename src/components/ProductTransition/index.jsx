import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const ProductTransition = () => {
  // set circles

  let circles = [];

  // intersection observer to check when element scrolls into view
  const observedElementRef = useRef(null);
  const [inViewRef, inView] = useInView({ threshold: 0.1 });

  // set scroll position

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (inView) {
      const elementTop = observedElementRef.current.getBoundingClientRect().top;
      const mappedScrollPosition = Math.max(0, window.scrollY - elementTop);

      console.log(mappedScrollPosition)
    }
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  return (
    <div
      className={`full-width relative-hero flex-column ${
        inView ? "in-view" : ""
      }`}
      ref={(node) => {
        inViewRef(node);
        observedElementRef.current = node;
      }}
    >
      <div className="hero-text-title show centered">Reset with CC LOOK-1</div>
      <h6 className="centered">Or as we like to call her, Clementine</h6>
      <svg className="svg-hero-background" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="transitionCircle"
          id="circle-6"
          cx="50%"
          cy="100%"
          r="100%"
          fill="#D76F0030"
        ></circle>
        <circle
          className="transitionCircle"
          id="circle-5"
          cx="50%"
          cy="100%"
          r="80%"
          fill="#D76F0030"
        ></circle>
        <circle
          className="transitionCircle"
          id="circle-4"
          cx="50%"
          cy="100%"
          r="60%"
          fill="#D76F0030"
        ></circle>
        <circle
          className="transitionCircle"
          id="circle-3"
          cx="50%"
          cy="100%"
          r="40%"
          fill="#D76F0030"
        ></circle>
        <circle
          className="transitionCircle"
          id="circle-2"
          cx="50%"
          cy="100%"
          r="20%"
          fill="#D76F0030"
        ></circle>
        <circle
          className="transitionCircle"
          id="circle-1"
          cx="50%"
          cy="100%"
          r="10%"
          fill="#D76F0030"
        ></circle>
      </svg>
    </div>
  );
};

export default ProductTransition;
