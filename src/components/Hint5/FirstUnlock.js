import React, { useState } from "react";
import codehunt from "../images/codehunt.png";
import lockImage from "../images/lockDesign.svg";
import "./FirstUnlock.css";
import { useNavigate } from "react-router-dom";
import SecondUnlock from "./SecondUnlock";

function FirstUnlock() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [secondUnlock, setSecondUnlock] = useState(false);
  const handleUnlock = () => {
    if (code === "welcome") {
      setSecondUnlock(true);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="unlock">
      {secondUnlock ? (
        <SecondUnlock />
      ) : (
        <form className="trail_box_inside_form">
          <img src={codehunt} alt="" className="trail_box_inside_form_image" />
          <img
            src={lockImage}
            alt=""
            className="trail_box_inside_form_image_inside"
          />
          <h2 className="trail_box_inside_form_h2">
            To enter the case 5, try to get the lock.
          </h2>
          <input
            type="text"
            placeholder="Enter Code.."
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="trail_box_inside_form_input"
          />
          <button
            className="trail_box_inside_form_button"
            onClick={() => handleUnlock()}
          >
            Unlock
          </button>
        </form>
      )}
    </div>
  );
}

export default FirstUnlock;
