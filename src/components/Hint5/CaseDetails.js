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
              Place: SR Construction site, Bedhi, Madhya Pradesh
            </h2>
            <h2 className="casedetails_box_details_h3">Date: June 28,2022</h2>
            <h2 className="casedetails_box_details_h3">
              Reported Time: 1:00 PM
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Crime Scene Report</h2>
            <h2 className="casedetails_box_details_h3">
              1. Dead body was found in a construction site, in a black sack, in
              a blood pool.
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. Footprints with blood on the ground
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Witness</h2>
            <h2 className="casedetails_box_details_h3">
              Construction site manager - Virupaksha Sunderan - Reported to 911
            </h2>
            <h2 className="casedetails_box_details_h3">
              Construction Workers - Anand Vihari, Vinay Khanna -contract based
              workers
            </h2>
          </div>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Witness Report</h2>
          <h2 className="casedetails_box_details_h3">
            Virupaksha Sunderan- Reported to police, when he has seen the crime
            scene, when the construction workers has complained about some
            strange sack, found in the construction site.
          </h2>
          <h2 className="casedetails_box_details_h3">
            Anand Vihari, Vinay Khanna- First to notice some strange atmosphere
            in their workspace.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">FIR History</h2>
          <h2 className="casedetails_box_details_h3">
            Missing compliant filed on June 27,2022, at 4:00 am
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">
            Scenario before missing
          </h2>
          <h2 className="casedetails_box_details_h3">
            The victim had attended a party. Had fun with friends. Met Quresh
            khan and was fully drunk and last seen in some strangers car at
            11:36 PM and gone missing. A missing complaint was filed in the
            nearest police station, on June 27,2022 at 4:00am.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Investigation Report</h2>
          <h2 className="casedetails_box_details_h3">
            Quresh Khan- a close friend - Told that he left the party, since he
            got a call.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
