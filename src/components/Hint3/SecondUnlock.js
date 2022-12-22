import React, { useState } from "react";
import CaseDetails from "../Hint3/CaseDetails";
import codehunt from "../images/codehunt.png";
import inorder from "../images/inorder.png";

import FirstResume from "./FirstResume";
import "./SecondUnlock.css";

function SecondUnlock() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);
  const handleValidate = () => {
    if (code == "BUSTXCPYRADEIGJF" || code == "bustxcpyradeigjf") {
      setOpenResume(true);
    }
  };
  return (
    <div className="secondunlock">
      {openResume ? (
        <CaseDetails openResume={openResume} setOpenResume={setOpenResume} />
      ) : (
        <form className="trail_box_inside_form">
          <img src={codehunt} alt="" className="trail_box_inside_form_image" />
          <h2 className="second_box_inside_form_h2_case3">
            To get the case details, you must solve the code.
          </h2>
          <p className="second_box_inside_form_p">
            <img src={inorder} alt="" />
          </p>
          <p className="second_box_inside_form_p2">
            Your clue lies in the inorder traversal of this binary tree. Give
            your answer in capitals
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
          <a
            className="trail_box_inside_form_a"
            href="https://codehunt-valiant.vercel.app/forthcase"
            target="_blank"
          >
            Try solving case 4
          </a>
        </form>
      )}
    </div>
  );
}

export default SecondUnlock;
