import React from "react";
import "./FirstResume.css";
import profile from "../images/bio.svg";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h1>Name of the Victim</h1>
          </div>
        </div>
        <button onClick={() => setOpenResume(false)}>Close</button>
      </div>
    </div>
  );
}

export default FirstResume;
