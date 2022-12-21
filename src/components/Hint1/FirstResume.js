import React from "react";
import "./FirstResume.css";
import profile from "../images/doc.png";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h2 className="firstresume_box_h2">Nethr Anand (Doctor)</h2>
            <h2 className="firstresume_box_h3">Date of Birth: 7 July 1994</h2>
            <h2 className="firstresume_box_h3">PLACE OF BIRTH - Hyderabad</h2>
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
            <h3>SCHOOL NAME - St.Xavier High school</h3>
            <h3>COLLEGE NAME - Madras Medical college</h3>
            <h3>MD IN CARDIOLOGY AIIMS Delhi</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>Contact Info</h2>
            <h3>PHONE NO - 7813523712</h3>
            <h3>EMAIL ID - nethranand@gmail.com</h3>
            <h3>PROFESSION - Cardiologist</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>Recent Surgeries</h2>
            <h3>Total Number - 54</h3>
            <h3>Successfull - 52</h3>
            {/* <h3>Failed - 2</h3> */}
          </div>
          <div className="firstresume_box_part2">
            <h2>Prestigious Clients</h2>
            <h3>Shubam Kumar (Ex-IAS officer)</h3>
            <h3>Rammohan Rao (Film actor)</h3>
          </div>
        </div>
        <div className="firstresume_box_dna">
          <h2 className= "firstresume_box_dna_h2">DNA Report</h2>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Forensic analysis</h2>
            <h2 className="firstresume_box_dna_first_h3">
              1.The body is confirmed as Nethr Anand
            </h2>
            <h2 className="firstresume_box_dna_first_h3">
              2.There is a partial fingerprint of Rahj and a partial fingerprint
              of Raghavan Rao.
            </h2>
            <h2 className="firstresume_box_dna_first_h3">
              3.No trace evidence was found.
            </h2>
          </div>
          <div className="firstresume_box_dna_first">
            <h2 className="firstresume_box_dna_first_h2">Possible Suspects</h2>
            <h2 className="firstresume_box_dna_first_h3">
              There are no possible suspects.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
