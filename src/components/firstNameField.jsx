import React from "react";
import "../styles/formField.css";

function FirstNameField() {
  return (
    <div>
      <label className="signup-label" for="First Name">
        First Name
      </label>
      <input
        id="First Name"
        className="signup-input"
        required
        minlength="2"
        maxlength="50"
      />
    </div>
  );
}

export default FirstNameField;
