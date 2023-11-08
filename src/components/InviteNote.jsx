import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mrs. & Mr. Dharmayath Allabakshi,</h2>

        {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
        <h5 className="address mb-3">
          M.S. Manzil,
          <br /> Behind National College,
          <br /> Vidhya Nagar,
          <br /> Hospet.
        </h5>
        <p className="address">
          Contact: <br />
          +91 99635 41902, <br />
          +91 97044 49724, <br />
          +91 95737 67548.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
