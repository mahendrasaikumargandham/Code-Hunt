import React from "react";
import "./FirstResume.css";
import profile from "../images/actor.png";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h2 className="firstresume_box_h2">Pratik Narayan (Actor)</h2>
            <h2 className="firstresume_box_h3">Date of Birth - 28 sep 1993</h2>
            <h2 className="firstresume_box_h3">Place of Birth - Mumbai</h2>
          </div>
          <div>
            <button
              className="firstresume_box_close"
              onClick={() => setOpenResume(false)}
            >
              Close
            </button>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>Education Details</h2>
            <h3>SCHOOL NAME - St.John High school</h3>
            <h3>COLLEGE NAME - B.Tech. from SRM Chennai</h3>
            {/* <h3>MD IN CARDIOLOGY AIIMS Delhi</h3> */}
          </div>
          <div className="firstresume_box_part2">
            <h2>Contact Info</h2>
            <h3>PHONE NO - 7689872440</h3>
            <h3>EMAIL ID - pratiknarayan@gmail.com</h3>
            <h3>PROFESSION - Cardiologist</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>Profession</h2>
            <h3>No. of Films - 10</h3>
            <h3>Blockbuster - 2</h3>
            <h3>Success - 5</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>Prestigious Things</h2>
            <h3>Films - URI</h3>
            <h3>Directors - Arun Johar</h3>
            <h3>Coworkers - Balakrishna</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>FATHER-Ramnath Narayan</h2>
            <h3>Bank employee in SBI</h3>
            <h3>Place of living – Karnataka</h3>
            <h3>Habits – Drinks occasionally</h3>
            <h3>Age - 60</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>MOTHER- Vasanthi Narayan</h2>
            <h3>Home maker</h3>
            <h3>Place of living – Karnataka</h3>
            <h3>Age - 52</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>SISTER –Roopa Narayan</h2>
            <h3>Dentist</h3>
            <h3>Place of living – Kerala</h3>
            <h3>Age - 30</h3>
            <h3>Married</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>BROTHER-Abhishek Narayan</h2>
            <h3>Charted Accountant</h3>
            <h3>Place of living – Karnataka</h3>
            <h3>Age -- 27</h3>
            <h3>Unmarried</h3>
            <h3>Relationship with victim - Bad</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div>
            <h2>Pool of suspects</h2>
            <h3>
              Abhishek Narayan - Why? Pratik Narayan and Abhishek Narayan have
              conflicts regarding the property division.
            </h3>
            <h3>
              Avanti Shetty - She is a dancer and they met in dance class. Why?
              - Avanti is Pratik’s ex-girlfriend .
            </h3>
            <h3>
              Raghavan Ram and Aman Hira - Why? They visited the victim exactly
              2 days before his death .
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
