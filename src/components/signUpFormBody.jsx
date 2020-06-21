import React from "react";
import "../styles/signUpFormBody.css";
import FirstNameField from "./firstNameField.jsx";
import EmailField from "./emailField.jsx";
import PasswordField from "./passwordField";

function SignUpForm() {
  return (
    <div className="signup-box">
      <h1>
        <span className="signup-heading-smallerFont">Let's</span>
        <span className="signup-heading-bigFont">
          <br />
          Sign Up
        </span>
      </h1>
      <p className="signup-para">
        Use the form below to sign up for this super awesome service. You're
        only a few steps away!
      </p>
      <form>
        <FirstNameField></FirstNameField>
        <EmailField></EmailField>
        <PasswordField></PasswordField>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
