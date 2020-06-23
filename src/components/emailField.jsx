import React, { Component } from "react";
import "../styles/formField.css";
import "../styles/errorField.css";

class EmailField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCorrectEmail: true,
      emailErrorText: "",
    };

    this.validateEmail = this.validateEmail.bind(this);
  }

  render() {
    return (
      <div>
        <label className="signup-label" htmlFor="Email">
          Email Address
        </label>
        <input
          id="Email"
          className="signup-input"
          //required
          //minLength="5"
          //maxLength="254"
          onChange={this.props.handleEmailChange}
        />
        {!this.state.isCorrectEmail && (
          <div className="error-field">{this.state.emailErrorText}</div>
        )}
      </div>
    );
  }

  validateEmail() {
    let email = this.props.email;
    let isEmailFlag = this.state.isCorrectEmail;
    let errorText = "";
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length === 0) {
      isEmailFlag = false;
      errorText = "Email cannot be empty";
    } else if (email.length < 5) {
      isEmailFlag = false;
      errorText = "Email should be atleast 5 characters";
    } else if (email.length > 254) {
      isEmailFlag = false;
      errorText = "Email cannot exceed 254 characters";
    }
    // regex for email address verification
    else if (re.test(email)) {
      isEmailFlag = true;
      errorText = "";
    } else {
      isEmailFlag = false;
      errorText = "Email is invalid";
    }

    this.setState({
      isCorrectEmail: isEmailFlag,
      emailErrorText: errorText,
    });
    return isEmailFlag;
  }
}

export default EmailField;
