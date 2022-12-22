import React, { useState } from "react";
import "./DNA4.css";
import codehunt from "../images/codehunt.png";
import recursion from "../images/recursion.png";

import FirstResume from "./FirstResume";
function DNA4() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "3210123") {
      setOpenResume(true);
    }
  };
  return (
    <div className="trail_box_1">
      {openResume ? (
        <FirstResume setOpenResume={setOpenResume} />
      ) : (
        <form className="trail_box_inside_form">
          <img src={codehunt} alt="" className="trail_box_inside_form_image" />
          <h2 className="second_box_inside_form_h2">
            to get victim details, you have to solve the given question
          </h2>
          <img
            className="second_box_inside_form_p_recursion"
            src={recursion}
            alt=""
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
            onClick={() => handleValidate()}
          >
            Validate
          </button>
        </form>
      )}
      <div className="dna_box_2"></div>
    </div>
  );
}

export default DNA4;
