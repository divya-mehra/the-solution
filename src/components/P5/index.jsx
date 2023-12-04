import { width } from "@mui/system";
import "./index.scss";
import p5 from "p5";
import React, { useRef, useEffect } from "react";

const P5 = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5((p) => {
      let button;

      let positions = [
        [100, 50],
        [100, sketchRef.current.clientHeight - 200],
        [sketchRef.current.clientWidth - 200, 50],
        [
          sketchRef.current.clientWidth - 200,
          sketchRef.current.clientHeight - 200,
        ],
      ];

      let currentPositionIndex = 0;
      let currentPos = positions[currentPositionIndex];

      const makeButton = () => {
        console.log("make button fired");
        button = p.createButton("Fix Me");
        button.position(currentPos[0], currentPos[1]);
        button.addClass("fix-button");
        // button.mousePressed(clearBackground);
      };

      p.setup = () => {
        const canvas = p.createCanvas(
          sketchRef.current.clientWidth,
          sketchRef.current.clientHeight
        );
        // Place the canvas inside the div
        canvas.parent(sketchRef.current);
        p.background(220, 5);

        button = p.createButton("Fix Me");
        button.position(sketchRef.current.clientWidth - 200, 50);
        button.addClass("fix-button");
        button.mousePressed(clearBackground);
      };

      const clearBackground = () => {
        console.log("cleared");
        button.remove();
        p.clear();
        makeButton();
      };

      p.draw = () => {
        p.noStroke();
        // find a way to take orange2 from scss:
        p.fill("#E3AE7530");
        p.ellipse(p.mouseX, p.mouseY, 200, 200);
      };

      // Handle window resize to update canvas size
      p.windowResized = () => {
        p.resizeCanvas(
          sketchRef.current.clientWidth,
          sketchRef.current.clientHeight
        );
      };
    }, sketchRef.current);

    // Cleanup
    return () => {
      sketch.remove();
    };
  }, []);

  return <div className="hero-background" ref={sketchRef}></div>;
};

export default P5;
