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
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>FATHER-Sudhakar Anand</h2>
            <h3>Farmer</h3>
            <h3>Place of living - Hyderabad</h3>
            <h3>Habits - Nil</h3>
            <h3>Age - 57</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>MOTHER- Rekha Anand</h2>
            <h3>Home maker</h3>
            <h3>Place of living - Hyderabad</h3>
            <h3>Age - 53</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>WIFE - Riya Anand</h2>
            <h3>Interior designer</h3>
            <h3>Place of living - Hyderabad</h3>
            <h3>Age - 25</h3>
            <h3>Married - for 1.5 years</h3>
            <h3>Relationship with victim - Bad</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>BROTHER-Vamsi Anand</h2>
            <h3>Software Engineer</h3>
            <h3>Place of living - America</h3>
            <h3>Unmarried</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div>
            <h2>Pool of suspects</h2>
            <h3>
              Riya Anand - Why? - Riya Anand and Nethr Anand are on the verge of
              divorce. She says that he never understood her and that it was
              never a happy marriage.
            </h3>
            <h3>
              Raghavan Ram - He is a doctor and works in the same hospital as
              Nethr . Star Hospital. Why? - He was the last person who spoke to
              Nethr before the incident occurred.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
