import React, { useState } from "react";
import "./FirstResume.css";
import profile from "../images/fashiondesigner.png";
import CaseDetails from "./CaseDetails";
import Congrats from "./Congrats";

function FirstResume({ setOpenResume }) {
  const [openPage, setOpenPage] = useState(false);
  return (
    <div className="firstresume">
      {openPage ? (
        <Congrats />
      ) : (
        <div className="firstresume_box">
          <div className="firstresume_box_intro">
            <div>
              <img className="firstresume_box_profile" src={profile} alt="" />
            </div>
            <div>
              <h2 className="firstresume_box_h2">
                Aarav Malhotra (Fashion Designer)
              </h2>
              <h2 className="firstresume_box_h3">
                Date of Birth - 13 oct 1993
              </h2>
              <h2 className="firstresume_box_h3">Place of Birth - Delhi</h2>
            </div>
            <div className="firstresume_box_h2_success">
              <button className = "firstresume_box_h2_success_button" onClick={() => setOpenPage(true)}>Complete</button>
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
              <h3>COLLEGE NAME - NIFT, New Delhi</h3>
            </div>
            <div className="firstresume_box_part2">
              <h2>Contact Info</h2>
              <h3>PHONE NO - 794XXXXX12</h3>
              <h3>EMAIL ID - aaravmalhotra@gmail.com</h3>
              <h3>PROFESSION - Fashion Designer</h3>
            </div>
          </div>
          <div className="firstresume_box_edu">
            <div className="firstresume_box_part1">
              <h2>Fashion weeks he organized</h2>
              <h3>Lakme Fahion Week</h3>
              <h3>Wills Lifestyle Fashion Week</h3>
              <h3>Rajasthan Fashion Week</h3>
              <h3>North India Fashion Week</h3>
              <h3>Indore Fashion Week</h3>
            </div>
            <div className="firstresume_box_part2">
              <h2>Famous Models he worked with</h2>
              <h3>Nidhi Sunil</h3>
              <h3>Sheetal Menon</h3>
              <h3>Bhumika Arora</h3>
            </div>
          </div>
          <div className="firstresume_box_edu">
            <div className="firstresume_box_part1">
              <h2>FATHER-Manoj Malhotra</h2>
              <h3>Contractor</h3>
              <h3>Place of living – Madhya Pradesh</h3>
              <h3>Habits – Drinks Regularly</h3>
              <h3>Age - 59</h3>
              <h3>Relationship with victim - Bad</h3>
            </div>
            <div className="firstresume_box_part2">
              <h2>MOTHER- Anamika Malhotra</h2>
              <h3>Dead 2 years ago</h3>
              <h2>Siblings</h2>
              <h3>Nil</h3>
            </div>
            <div className="firstresume_box_part1">
              <h2>WIFE – Nidhi Malhotra</h2>
              <h3>Data Analyst</h3>
              <h3>Place of living – Delhi</h3>
              <h3>Age - 25</h3>
              <h3>No. of children - 1</h3>
              <h3>CHILD NAME - Yash Malhotra</h3>
              <h3>AGE – 2 Years</h3>
              <h3>Relationship with victim - Good</h3>
            </div>
          </div>
          <div className="firstresume_box_edu">
            <div>
              <h2>Pool of suspects</h2>
              <h3>
                Rana Sinha - Why? Had some issues while dealing with land
                property.
              </h3>
              <h3>
                Ravi Ramineni - Why? One time when they were in a party they got
                into a bad argument.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstResume;
