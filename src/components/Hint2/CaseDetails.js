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
              Place: Room no.304, Saathi Resort, Mumbai
            </h2>
            <h2 className="casedetails_box_details_h3">
              Date: February 21,2022
            </h2>
            <h2 className="casedetails_box_details_h3">
              Reported Time: 9:00 am
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Crime Scene Report</h2>
            <h2 className="casedetails_box_details_h3">
              1.Dead body was found in a black sack, in a blood pool.
            </h2>
            <h2 className="casedetails_box_details_h3">
              2.Footprints with blood on the floor
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Witness</h2>
            <h2 className="casedetails_box_details_h3">
              1. Resort Manager- Arshad Shloka - Reported the incident to 911
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. Worker- Sharon- Working as a room attendant, since 3 years
            </h2>
            <h2 className="casedetails_box_details_h3">
              3. Worker- Raman Rao- Working as Room service servers, since 2
              years
            </h2>
          </div>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Witness Statements</h2>
          <h2 className="casedetails_box_details_h3">
            Time when doubt raised: July 21,2022, at 7 am
          </h2>
          <h2 className="casedetails_box_details_h3">
            Sharon- Observed a foul smell from Room no.304. First, ignored,
            thinking that it might be because of not cleaning, since victim
            didn't leave the room for two days straight. But, the smell was so
            pungent and unusual, hence I informed, Mr. Raman Rao.
          </h2>
          <h2 className="casedetails_box_details_h3">
            Raman Rao- I took Sharon's complaint noted. I checked all the room
            service details and got to know what sharon told is right(victim
            didn't leave the room for two days straight). I explained the
            situation to the resort manager, Mr. Arshad Shloka.
          </h2>
        </div>
        <div className="casedetails_box_belowInfo">
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">FIR History</h2>
            <h2 className="casedetails_box_details_h3">
              Missing compliant filed on February 20,2022 at 2:00 AM.
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Possible Suspects:</h2>
            <h2 className="casedetails_box_details_h3">1. Raghavan Ram</h2>
            <h2 className="casedetails_box_details_h3">2. Aman Hira</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
