import React, { useState } from "react";
import "./Trail4.css";
import Unlock from "./FirstUnlock";
import case4 from "../images/case5.png";

function Trail4() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="trail">
      <div className="trail_box_1">
        <div className="trail_box_inside">{lock ? <Unlock /> : <h1></h1>}</div>
      </div>
      <div className="trail_box_2">
        <img className="trail_box_2_image" src={case4} alt="" />
        <a
          href="http://codehunt-valiant.vercel.app/climax/find"
          target="_blank"
          className="trail_box_2_button"
        >
          Guess the Clue
        </a>
      </div>
    </div>
  );
}

export default Trail4;
