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
              Place: shore of Baga beach, near Tito's bottle, Goa
            </h2>
            <h2 className="casedetails_box_details_h3">
              Date: January 7, 2022.
            </h2>
            <h2 className="casedetails_box_details_h3">
              Reported Time: 8:15 am
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Crime Scene Report</h2>
            <h2 className="casedetails_box_details_h3">
              1. The dead body was found in a black sack.
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. Blood around the bag.
            </h2>
          </div>
          <div className="casedetails_box_details">
            <h2 className="casedetails_box_details_h2">Witness</h2>
            <h2 className="casedetails_box_details_h3">
              1.Rahj - Cooldrinks Cart vendor
            </h2>
            <h2 className="casedetails_box_details_h3">
              2. Krish- A worker at Taj Restaurant, Baga Beach
            </h2>
            <h2 className="casedetails_box_details_h3">3. John -A tourist</h2>
          </div>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">Witness Statements</h2>
          <h2 className="casedetails_box_details_h3">
            According to john's statement -” when I came early to enjoy the
            sunrise I found a plastic bag near the bottle and I thought it to be
            a garbage bag but after some time some people gathered around that
            place that is all I know.”  Krish's statement - “Sir, I am the one
            who called you. What happened is that Rahj came running to me and
            said that there is a body in the trash bag he found near Tito's
            bottle and asked me to report the incident so I called you sir.”
            Rahj's statement- “sir what happened is that as usual, I went to
            open the shop and take out the trash I observed a trash bag near
            Toto's bottle and I thought that someone mistakenly put the trash
            out there and as I went to take out the bag, it felt heavy and it is
            smelling so I opened it and found the body so I ran to Krish and he
            made the call sir.”
          </h2>
          <h2 className="casedetails_box_details_h3">
            The time of suspicion: around 7:30 am
          </h2>
        </div>
        <div className="casedetails_box_details">
          <h2 className="casedetails_box_details_h2">
            Scenario before the case
          </h2>
          <h2 className="casedetails_box_details_h3">
            It has been brought to light that our victim met with Raghavan Rao
            the day before he left for Goa. Raghavan Roa and the victim studied
            together and were also a competitor. Our victim is bound to return
            on 6th January but he did not come so the family members filed a
            complaint at the police station.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
