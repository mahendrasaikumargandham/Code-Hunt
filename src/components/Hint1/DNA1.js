import React, { useState } from "react";
import "./DNA1.css";
import codehunt from "../images/codehunt.png";
import FirstResume from "./FirstResume";
function DNA1() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "1305750322800") {
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
            Product of ASCII values of <span>String</span> will give you a key.
          </p>
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

export default DNA1;
