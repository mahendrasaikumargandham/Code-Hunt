import React, { useState } from "react";
import "./Trail5.css";
import Unlock from "./FirstUnlock";

function Trail5() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="trail">
      <div className="trail_box_1">
        <div className="trail_box_inside">{lock ? <Unlock /> : <h1></h1>}</div>
      </div>
      <div className="trail_box_2">
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

export default Trail5;
