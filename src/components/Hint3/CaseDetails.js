import React from "react";
import "./CaseDetails.css";

function CaseDetails({ openResume, setOpenResume }) {
  return (
    <div className="casedetails">
      <div className="casedetails_box">
        <div className="casedetails_box_header">
          <h1 className="casedetails_box_header_heading">CaseDetails</h1>
          <button
            className="casedetails_box_header_button"
            onClick={() => setOpenResume(false)}
          >
            Close
          </button>
        </div>
        <div className="casedetails_box_info">
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Incident Details</h2>
            <h2 className="casedetails_box_details_h3">
              Place: Infront of Old Local Bank, in a rusted car, ABC Street,
              Karnataka.
            </h2>
            <h2 className="casedetails_box_details_h3">Date: May 14,2022</h2>
            <h2 className="casedetails_box_details_h3">
              Reported Time: 10:00 AM
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Crime Scene Report</h2>
            <h2 className="casedetails_box_details_h3">
              1. Dead body was found in car trunk, in a black sack, in a blood
              pool.
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. 5 Footprints with blood on the ground.
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Witness</h2>
            <h2 className="casedetails_box_details_h3">
              Scavenger- Sarada Amman - Reported to 911
            </h2>
          </div>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Witness Statements</h2>
          <h2 className="casedetails_box_details_h3">
            Sarada Amman- Just like any other day, I started doing my work
            chores in the ABC Street. When I was about to cross the old rusted
            car before the old local bank, I got a pungent and foul smell from
            the open trunk of the car. My heart-wrenched, the moment I saw the
            visuals. And I immediately reported to 911.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">FIR History</h2>
          <h2 className="casedetails_box_details_h3">
            Missing compliant filed on January 10,2022 at 10:00 PM.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">
            Scenario before missing
          </h2>
          <h2 className="casedetails_box_details_h3">
            The victim attended a party meeting that day, after that he met few
            locals and two party members. Privately, victim had gone to meet
            Hari Rathore and Anil Jain: an ex-prisoner. After that the victim
            gone missing, his family and people have given a complaint in the
            police station.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Investigation Report</h2>
          <h2 className="casedetails_box_details_h3">
            Hari Rathore - a close friend - Told that he left the place after
            they met and chat for a while. - Added, he actually came to
            negotiate between his two friends, victim and the Anil Jain, about
            their past dispute.
          </h2>
          <h2 className="casedetails_box_details_h3">
            Anil Jain - an ex-prisoner - Has past disputes, but came to have
            nice talk with the victim from few days.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
