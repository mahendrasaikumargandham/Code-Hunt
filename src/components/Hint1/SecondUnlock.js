import React, { useState } from "react";
import codehunt from "../images/codehunt.png";
import CaseDetails from "./CaseDetails";
import FirstResume from "./FirstResume";
import "./SecondUnlock.css";

function SecondUnlock() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);
  const handleValidate = () => {
    if (code == "858") {
      setOpenResume(true);
      setCode("");
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
            Detectives, there are a series of murder cases that unfold as you
            keep on solving, so better get to work! Pull up your sleeves!!
            prepare notebooks, pencils, and codes and lead your Investigation
            Team! In order to decode the case, you’ll need to write down your
            clues, connect the facts, and avoid following false leads. Stay
            focused and don’t let the murderers slip away! Here you go!!! Your
            first clue is the output of the below java code snippet.
            <br></br>
            System.out.println(‘c’+ ‘0’ + ‘d’ + ‘e’ + ‘h’ + ‘u’ + ‘n’ + ‘t’);
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
            href="https://codehunt-valiant.vercel.app/secondcase"
            target="_blank"
          >
            Try solving case 2
          </a>
        </form>
      )}
    </div>
  );
}

export default SecondUnlock;
