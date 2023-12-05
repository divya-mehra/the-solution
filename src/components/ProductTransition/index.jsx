import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductTransition = () => {
  // set circles

  const circles = [
    "circle-1",
    "circle-2",
    "circle-3",
    "circle-4",
    "circle-5",
    "circle-6",
  ];

  // intersection observer to check when element scrolls into view
//   const [inViewRef, inView] = useInView({ threshold: 0.1 });

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  
  const triggerRef = useRef(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    // Check if the trigger element exists before applying GSAP animations
    if (triggerElement) {
        console.log("yes")

        gsap.to("#target", {
            opacity: 0,
            duration: 1, 
            scrollTrigger: {
              trigger: "#target",
              start: "-20%", 
              end: "40%", 
              scrub: true, // Pin the animation to the scrollbar
            },
          });

    }
  }, []); // Run the effect only once on component mount


  return (
    <div
      className={`full-width relative-hero flex-column lightest` }
      id="target"
      ref={triggerRef}
      style={{backgroundImage: "url(/assets/woman.png"}}
    >
      <div className="hero-text-title show centered">Reset with CC LOOK-1</div>
      <h6 className="centered">Or as we like to call her, Clementine</h6>
      
      {/* <svg className="svg-hero-background" xmlns="http://www.w3.org/2000/svg">
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
      </svg> */}
    </div>
  );
};

export default ProductTransition;
