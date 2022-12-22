import React, { useState } from "react";
import "./DNA5.css";
import codehunt from "../images/codehunt.png";
import FirstResume from "./FirstResume";
function DNA5() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "45") {
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
          <h2 className="second_box_inside_form_h2">Sum of the</h2>
          <p className="second_box_inside_form_p">
            Sum of the Armstrong numbers from 1 to 100 will give you your key.
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

export default DNA5;
