import React, { useState } from "react";
import "./Trail.css";
import codehunt from "./images/codehunt.png";
import Unlock from "./Unlock";

function Trail() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="trail">
      <div className="trail_box_1">
        <div className="trail_box_inside">
          {lock ? <Unlock lock={lock} setLock={setLock} /> : <h1></h1>}
        </div>
      </div>
      <div className="trail_box_2"></div>
    </div>
  );
}

export default Trail;
