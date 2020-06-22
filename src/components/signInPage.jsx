import React, { Component } from "react";
import "../styles/signUpFormBody.css";

class SignInPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-box">
        <h1>
          <span className="signup-heading-smallerFont">Welcome</span>
          <span className="signup-heading-bigFont">
            <br />
            {this.props.firstName}
          </span>
        </h1>
        <p className="signup-para">
          You have been registered for this awesome service.
          <br />
          Please check your email listed below for instructions.
        </p>
        <p>
          <b>{this.props.email}</b>
        </p>
        <button type="submit" className="signup-button">
          Sign In
        </button>
      </div>
    );
  }
}

export default SignInPage;
