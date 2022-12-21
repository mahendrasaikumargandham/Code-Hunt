import React from "react";
import "./FirstResume.css";
import profile from "../images/architect.png";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h2 className="firstresume_box_h2">Jeet Kapoor (Architect)</h2>
            <h2 className="firstresume_box_h3">Date of Birth - 28 DEC 1994</h2>
            <h2 className="firstresume_box_h3">PLACE OF BIRTH - Kerala</h2>
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
            <h3>COLLEGE NAME - NIT Tiruchirappalli</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>Contact Info</h2>
            <h3>PHONE NO - 781xx23712</h3>
            <h3>EMAIL ID - jeetkapoor@gmail.com</h3>
            <h3>PROFESSION - Architect</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>Projects he worked on</h2>
            <h3>Vikas community housing</h3>
            <h3>MAC center</h3>
            <h3>Aranya Housing</h3>
            <h3>Jetavan center</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>Current Projects</h2>
            <h3>Lurra House, Hyderabad</h3>
            <h3>Cliffadel Housing, Goa</h3>
            <h3>The Ray, Alibug</h3>
          </div>
        </div>
        <div className="firstresume_box_dna">
          <h2 className="firstresume_box_dna_h2">DNA Report</h2>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Victim</h2>
            <h2 className="firstresume_box_dna_first_h3">- Jeet Kapoor</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Fingerprints</h2>
            <h2 className="firstresume_box_dna_first_h3">- Raghavan Ram</h2>
            <h2 className="firstresume_box_dna_first_h3">- Quresh khan</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Hair</h2>
            <h2 className="firstresume_box_dna_first_h3">- Aman Hira</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Footprints</h2>
            <h2 className="firstresume_box_dna_first_h3">Unknown</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Possible Suspects</h2>
            <h2 className="firstresume_box_dna_first_h3">Raghavan Ram</h2>
            <h2 className="firstresume_box_dna_first_h3">Quresh Khan</h2>
            <h2 className="firstresume_box_dna_first_h3">Aman Hira</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
