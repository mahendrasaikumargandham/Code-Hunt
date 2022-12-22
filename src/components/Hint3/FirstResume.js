import React from "react";
import "./FirstResume.css";
import profile from "../images/minister.png";

function FirstResume({ setOpenResume }) {
  return (
    <div className="firstresume">
      <div className="firstresume_box">
        <div className="firstresume_box_intro">
          <div>
            <img className="firstresume_box_profile" src={profile} alt="" />
          </div>
          <div>
            <h2 className="firstresume_box_h2">Neel Rao (Finance Minister)</h2>
            <h2 className="firstresume_box_h3">Date of Birth - 7 Feb 1992</h2>
            <h2 className="firstresume_box_h3">Place of Birth - Karnataka</h2>
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
            <h3>COLLEGE NAME - B.A. at SRC Thiruchirapalli</h3>
            {/* <h3>MD IN CARDIOLOGY AIIMS Delhi</h3> */}
          </div>
          <div className="firstresume_box_part2">
            <h2>Contact Info</h2>
            <h3>PHONE NO - 723XXXX440</h3>
            <h3>EMAIL ID - neelrao@gmail.com</h3>
            <h3>PROFESSION - Finance Minister</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>Schemes initiated by Neel</h2>
            <h3>Pradhan Mantri Jan Dhan Yojana (PMJDY)</h3>
            <h3>From Jan Dhan to Jan Suraksha</h3>
            <h3>Pradhan Mantri Mudra Yojana</h3>
            <h3>Atal pension Yojana (APY)</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>Alligations</h2>
            <h3>That he cleared foreign investments in exchange for bribes</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>FATHER-Srinivas Rao</h2>
            <h3>Landlord</h3>
            <h3>Place of living - Chennai</h3>
            <h3>Habits - Drinks Regularly</h3>
            <h3>Age - 58</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>MOTHER- Sujatha Rao</h2>
            <h3>Home maker</h3>
            <h3>Place of living – Chennai</h3>
            <h3>Age - 51</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part1">
            <h2>SISTER –Drishti Rao</h2>
            <h3>Home maker</h3>
            <h3>Place of living – Canada</h3>
            <h3>Age - 30</h3>
            <h3>Married</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div>
            <h2>Pool of suspects</h2>
            <h3>
              Harsh - Why? As Neel Rao has become a minister at a young age
              ruining the possibility of him becoming a minister makes harsh
              dislike neel.
            </h3>
            <h3>
              Kishore - Why? He is a member of opposition party . In assembly
              Neel made fun of Kishore which lead Kishore to develop grudge on
              neel.
            </h3>
            <h3>
              Vamsi - Why? He always keep posting negative comments on neel’s
              almost every tweet . He once commented saying such kind of people
              being alive adds no value to the society.
            </h3>
            <h3>
              Hari Rathore and Anil Jain - Why? Hari Rathore is a common friend
              of our victim and Anil . The two of them met the victim before his
              death.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
