import React, { useState } from "react";
import "./DNA3.css";
import codehunt from "../images/codehunt.png";
import prims from "../images/prims.jpeg";

import FirstResume from "./FirstResume";
function DNA3() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "15") {
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
          <h2 className="second_box_inside_form_h2_case3">
            to get the victim complete details, you have to enter the previously
            solved question's output.
          </h2>
          {/* <p className="second_box_inside_form_p"> */}
          <img className="second_box_inside_form_p_image" src={prims} alt="" />
          <p className="second_box_inside_form_p2">
            Apply Minimum Spanning Algorithm to get the code.
          </p>
          <input
            type="text"
            placeholder="Enter Output.."
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="trail_box_inside_form_input_case3"
          />
          <button
            className="trail_box_inside_form_button_case3"
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

export default DNA3;
