import React, { useState } from "react";
import "./Trail1.css";
import Unlock from "./FirstUnlock";
import car from "../images/CAR.png";

function Trail1() {
  const [lock, setLock] = useState(true);
  const code = "";
  return (
    <div className="trail">
      <div className="trail_box_1">
        <div className="trail_box_inside">{lock ? <Unlock /> : <h1></h1>}</div>
      </div>
      <div className="trail_box_2">
        <img className="trail_box_2_image" src={car} alt="" />
        <button className="trail_box_2_click">click here</button>
      </div>
    </div>
  );
}

export default Trail1;
