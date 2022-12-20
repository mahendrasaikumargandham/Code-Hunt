import React, { useState } from "react";
import codehunt from "./images/codehunt.png";
import lockImage from "./images/lockDesign.svg";

import "./Unlock.css";
import { useNavigate } from "react-router-dom";

function Unlock({ lock, setLock }) {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleUnlock = () => {
    if (code == "welcome") {
      navigate("/secondhint");
    }
  };
  return (
    <div className="unlock">
      <form className="trail_box_inside_form">
        <img src={codehunt} alt="" className="trail_box_inside_form_image" />
        <img
          src={lockImage}
          alt=""
          className="trail_box_inside_form_image_inside"
        />
        <input
          type="text"
          placeholder="Enter Code.."
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="trail_box_inside_form_input"
        />
        <button
          className="trail_box_inside_form_button"
          onClick={() => handleUnlock()}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

export default Unlock;
