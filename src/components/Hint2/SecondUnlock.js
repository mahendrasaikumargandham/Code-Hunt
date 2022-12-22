import React, { useState } from "react";
import codehunt from "../images/codehunt.png";
import CaseDetails from "./CaseDetails";
import FirstResume from "./FirstResume";
import "./SecondUnlock.css";

function SecondUnlock() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);
  const handleValidate = () => {
    if (code == "SERIALKILLER") {
      setOpenResume(true);
    }
  };
  return (
    <div className="secondunlock">
      {openResume ? (
        // <FirstResume openResume={openResume} setOpenResume={setOpenResume} />
        <CaseDetails openResume={openResume} setOpenResume={setOpenResume} />
      ) : (
        <form className="trail_box_inside_form">
          <img src={codehunt} alt="" className="trail_box_inside_form_image" />
          <h2 className="second_box_inside_form_h2">
            To get the case details, you must solve the code.
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
          <a
            className="trail_box_inside_form_a"
            href="https://codehunt-valiant.vercel.app/thirdcase"
            target="_blank"
          >
            Try solving case 3
          </a>
        </form>
      )}
    </div>
  );
}

export default SecondUnlock;
