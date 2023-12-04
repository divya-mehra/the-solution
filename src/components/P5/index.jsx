import { width } from "@mui/system";
import "./index.scss";
import p5 from "p5";
import React, { useRef, useEffect } from "react";

const P5 = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5((p) => {
      let button;

      let usedPositions = [];

      let positions = [
        [100, 50],
        [100, sketchRef.current.clientHeight - 200],
        [sketchRef.current.clientWidth - 200, 50],
        [
          sketchRef.current.clientWidth - 200,
          sketchRef.current.clientHeight - 200,
        ],
      ];

      const makeButton = () => {
        console.log("make button fired");

        // filter all positions to only show available ones
        // check if the position is in the usedPositions array
        // if it isn't, then add it to the available array

        const availPositions = positions.filter(
          (pos) =>
            !usedPositions.some(
              (usedPos) => usedPos[0] === pos[0] && usedPos[1] === pos[1]
            )
        );

        if (availPositions.length > 0) {
          let randomIndex = Math.floor(Math.random() * availPositions.length);
          let randomPosition = positions[randomIndex];

          // Make the button

          button = p.createButton("Fix Me");
          button.position(randomPosition[0], randomPosition[1]);
          button.addClass("fix-button");

          //  add this to list of used
          usedPositions.push(randomPosition);

          // add clear background event
          button.mousePressed(clearBackground);
        } else {
          console.log("no positions left");
        }
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
