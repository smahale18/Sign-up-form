import React from 'react';
import "../styles/signUpFormBody.css"

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
          <button type="submit" className="signup-button pull-right">
            Sign Up
          </button>
        </form>
      </div>
    );
}

export default SignUpForm;