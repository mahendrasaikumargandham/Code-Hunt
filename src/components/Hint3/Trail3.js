import React, { useState } from "react";
import "./Trail3.css";
import Unlock from "./FirstUnlock";

function Trail3() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="trail">
      <div className="trail_box_1">
        <div className="trail_box_inside">{lock ? <Unlock /> : <h1></h1>}</div>
      </div>
      <div className="trail_box_2"></div>
    </div>
  );
}

export default Trail3;
