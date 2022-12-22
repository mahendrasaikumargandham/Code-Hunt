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
        <div className="firstresume_box_edu">
          <div className="firstresume_box_part1">
            <h2>FATHER- Manish Kapoor</h2>
            <h3>Place of living – Kerala</h3>
            <h3>Habits – Smokes Regularly</h3>
            <h3>Age - 52</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part2">
            <h2>MOTHER- Sarojini Kapoor</h2>
            <h3>Home maker</h3>
            <h3>Place of living – Kerala</h3>
            <h3>Age - 48</h3>
            <h3>Relationship with victim - Good</h3>
          </div>
          <div className="firstresume_box_part1">
            <h2>SISTER –Sara Kapoor</h2>
            <h3>Social Activist</h3>
            <h3>Place of living –Mumbai</h3>
            <h3>Age - 29</h3>
            <h3>Married</h3>
            <h3>Relationship with victim - Bad</h3>
          </div>
        </div>
        <div className="firstresume_box_edu">
          <div>
            <h2>Pool of suspects</h2>
            <h3>
              Raghavan Ram - Why? Raghavan Ram and Jeet Kapoor live in the same
              apartment and they were good friends They were in the party
              together.
            </h3>
            <h3>
              Quresh Khan - Why? Queresh is Jeet’s close friend and was there at
              the party.
            </h3>
            <h3>
              Aman Hira - Why? He was an acquaintance for Jeet but was present
              at the party.
            </h3>
            <h3>
              Sara Kapoor or her Husband - Why? They had a huge fight because
              Jeet and Sara’s husband had some misunderstandings .So Sara and
              Jeet were not in touch since 2 years.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstResume;
