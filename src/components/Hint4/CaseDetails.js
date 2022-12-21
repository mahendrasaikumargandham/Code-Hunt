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
              Place: In a deserted land, 6 km away from high way, Near Indira
              Gandhi Airport, Delhi.
            </h2>
            <h2 className="casedetails_box_details_h3">
              Date: September 7,2022
            </h2>
            <h2 className="casedetails_box_details_h3">
              Reported Time: 8:00 am
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Crime Scene Report</h2>
            <h2 className="casedetails_box_details_h3">
              1. Dead body was found in grassland , in a black sack.
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. Footprints with blood on the ground(Partially visible and
              untraceable)
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Witness</h2>
            <h2 className="casedetails_box_details_h3">
              A villager- Ganguram Naik – Reported to 911
            </h2>
          </div>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Witness Report</h2>
          <h2 className="casedetails_box_details_h3">
            Ganguram Naik- I usually go this way to my farmland but today, I
            have found a black bag near the grass bushes and dogs are trying to
            open that sack. I went closer to that sack and I found blood around
            it. I was terrified and immediately reported to 911.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">FIR History</h2>
          <h2 className="casedetails_box_details_h3">
            Missing compliant filed on September 6,2022 at 9:40 pm
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">
            Scenario before missing
          </h2>
          <h2 className="casedetails_box_details_h3">
            The victim had attended the Paris Fashion Week in Paris. After the
            event, the victim returned to India and called his driver. His
            driver had reached the airport, called around 25 times, waited for 5
            hours, the victim's phone wasn't reached. Messaged him, that he is
            leaving the airport. Even after 8 hours of his flight landing,
            victim neither reached home nor gone somewhere. Victim's family
            reported this and filed a complaint at the nearest police station at
            9:40pm.
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Investigation Report</h2>
          <h2 className="casedetails_box_details_h3">Nothing unusual</h2>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
