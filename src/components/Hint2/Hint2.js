import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import codehunt from "../images/codehunt.png";
import "./Hint2.css";

function Hint2() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleUnlock = () => {
    if (code == "welcome") {
      navigate("/secondhint");
    }
  };
  return (
    <div className="hint2">
      <div className="hint2_box_1">
        <div className="hint2_box_inside">
          <div className="trail_box_inside_form">
            <img
              src={codehunt}
              alt=""
              className="trail_box_inside_form_image"
            />
            <input
              type="text"
              placeholder="Enter Output.."
              value={code}
              onChange={(event) => setCode(event.target.value)}
              className="trail_box_inside_form_input"
            />
            <button
              className="trail_box_inside_form_button"
              onClick={() => handleUnlock()}
            >
              Validate
            </button>
          </div>
        </div>
      </div>
      <div className="trail_box_2"></div>
    </div>
  );
}

export default Hint2;
