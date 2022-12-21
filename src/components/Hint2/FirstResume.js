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
        <div className="firstresume_box_dna">
          <h2 className="firstresume_box_dna_h2">DNA Report</h2>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Victim</h2>
            <h2 className="firstresume_box_dna_first_h3">- Pratik Narayan</h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Fingerprints</h2>
            <h2 className="firstresume_box_dna_first_h3">
              - Raghavan Ram (On the glass)
            </h2>
            <h2 className="firstresume_box_dna_first_h3">
              - Aman Hira(On the table)
            </h2>
            <h2 className="firstresume_box_dna_first_h3">
              - Arshad Shloka(On the Door and Door knob)
            </h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Footprints</h2>
            <h2 className="firstresume_box_dna_first_h3">Unknown</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
