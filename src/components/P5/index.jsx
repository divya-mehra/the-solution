import "./index.css"
import p5 from "p5";
import React, { useRef, useEffect } from "react";

const P5 = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = new p5((p) => {
            p.setup = () => {
              const canvas = p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
              // Place the canvas inside the div
              canvas.parent(sketchRef.current);
            };
      
            p.draw = () => {
              p.background(220);
              p.ellipse(p.mouseX, p.mouseY, 50, 50);
            };
      
            // Handle window resize to update canvas size
            p.windowResized = () => {
              p.resizeCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
            };
          }, sketchRef.current);
      
          // Cleanup
          return () => {
            sketch.remove();
          };

    }, [])

    return (
     <div className="hero-background" ref={sketchRef}></div>
    
    );
}
 
export default P5;