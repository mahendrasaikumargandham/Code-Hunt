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
            <h2 className = "firstresume_box_h2">Name of the Victim</h2>
          </div>
          <div>
            <button className = "firstresume_box_close" onClick={() => setOpenResume(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
