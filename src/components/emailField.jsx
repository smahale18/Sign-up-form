import React from "react";
import "../styles/formField.css";

function EmailField() {
  return (
    <div>
      <label className="signup-label" for="Email">
        Email Address
      </label>
      <input
        id="Email"
        className="signup-input"
        required
        minlength="2"
        maxlength="254"
      />
    </div>
  );
}

export default EmailField;
