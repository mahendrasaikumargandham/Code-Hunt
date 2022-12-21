import React from "react";
import "./FirstResume.css";
import profile from "../images/fashiondesigner.png";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h2 className="firstresume_box_h2">
              Aarav Malhotra (Fashion Designer)
            </h2>
            <h2 className="firstresume_box_h3">Date of Birth - 13 oct 1993</h2>
            <h2 className="firstresume_box_h3">Place of Birth - Delhi</h2>
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
            <h3>PHONE NO - 781XXXXX12</h3>
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
        <div className="firstresume_box_dna">
          <h2 className="firstresume_box_dna_h2">DNA Report</h2>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Victim</h2>
            <h2 className="firstresume_box_dna_first_h3">- Aarav Malhotra</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Possible Suspects</h2>
            <h2 className="firstresume_box_dna_first_h3">- None</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
