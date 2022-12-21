import React, { useState } from "react";
import "./Trail1.css";
import Unlock from "./FirstUnlock";
import car from "../images/CAR.png";

function Trail1() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="dna">
      <div className="trail_box_1">
        <div className="trail_box_inside">{lock ? <Unlock /> : <h1></h1>}</div>
      </div>
      <div className="trail_box_2">
        <a
          href="http://codehunt-valiant.vercel.app/firstcase/find"
          target="_blank"
          className="trail_box_2_button"
        >
          Guess the Clue
        </a>
      </div>
    </div>
  );
}

export default Trail1;
