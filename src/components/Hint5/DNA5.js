import React, { useState } from "react";
import "./DNA5.css";
import codehunt from "../images/codehunt.png";
import FirstResume from "./FirstResume";
function DNA5() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);

  const handleValidate = () => {
    if (code == "SERIALKILLER") {
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
            To get the victim details with DNA, you must solve the code.
          </h2>
          <p className="second_box_inside_form_p">
            The killer protected his confidential information by encrypting it
            using a cipher. His cipher shifts each letter by 1. If the shift
            takes you past the end of the alphabet, just rotate back to the
            front of the alphabet. BOU in his code language is ANT. Your clue
            lies in ILMNWBTFSJBMJMMFSYNHCVMOS.
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
