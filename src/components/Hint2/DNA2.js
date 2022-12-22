import React, { useState } from "react";
import "./DNA2.css";
import codehunt from "../images/codehunt.png";
import FirstResume from "./FirstResume";
function DNA2() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "274410818470142134209703780940313") {
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
            to get the victim complete details, you have to enter the previously
            solved question's output.
          </h2>
          <p className="second_box_inside_form_p">
            A person went into a forest and burned a lighter which started a
            wild fire. The fire is spreading in a factorial way. How many trees
            will it burns after one hour (factorial way per minute)?
          </p>
          <input
            type="text"
            placeholder="Enter Output.."
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="trail_box_inside_form_input_case2"
          />
          <button
            className="trail_box_inside_form_button_case2"
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

export default DNA2;
