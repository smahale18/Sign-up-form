import React from "react";
import "../styles/formField.css";

function PasswordField() {
  return (
    <div>
      <label className="signup-label" for="password">
        Password
      </label>
      <input
        id="password"
        className="signup-input"
        required
        minlength="2"
        maxlength="50"
      />
    </div>
  );
}

export default PasswordField;
