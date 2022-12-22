import React, { useState } from "react";
import codehunt from "../images/codehunt.png";
import CaseDetails from "./CaseDetails";
import FirstResume from "./FirstResume";
import "./SecondUnlock.css";

function SecondUnlock() {
  const [code, setCode] = useState("");
  const [openResume, setOpenResume] = useState(false);
  const handleValidate = () => {
    if (code == "397957") {
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
          <h2 className="second_box_inside_form_h2">
            To get the case details, you must solve the code.
          </h2>
          <p className="second_box_inside_form_p">
            Least Common Method of Area and Least Common Method of Perimeter
            <br></br>Hint: The equivalent number of area is ASCII value of (a) +
            ASCII value of (r) + ASCII value of (e) + ASCII value of (a)
            <br></br> The output of the code gives access to next mystery.
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
          {/* <a
            className="trail_box_inside_form_a"
            href="https://codehunt-valiant.vercel.app/climax"
            target="_blank"
          >
            Try solving case 5
          </a> */}
        </form>
      )}
    </div>
  );
}

export default SecondUnlock;
