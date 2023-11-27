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
              p.background(220, 5);
            };
      
            p.draw = () => {
              
              p.noStroke()
            // find a way to take orange2 from scss:
            p.fill("#E3AE7550")
              p.ellipse(p.mouseX, p.mouseY, 100, 100);
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