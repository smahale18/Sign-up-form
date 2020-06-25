import React, { Component } from "react";
import "../styles/formField.css";

class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCorrectPassword: true,
      passwordErrorText: "",
    };

    this.validatePassword = this.validatePassword.bind(this);
  }

  render() {
    return (
      <div>
        <label className="signup-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="signup-input"
          //required
          //minLength="2"
          //maxLength="50"
          onChange={this.props.handlePasswordChange}
        />
        {!this.state.isCorrectPassword && (
          <div className="error-field">{this.state.passwordErrorText}</div>
        )}
      </div>
    );
  }

  validatePassword() {
    let password = this.props.password;
    let isPasswordFlag = this.state.isCorrectPassword;
    let errorText = "";

    let rp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (password.length === 0) {
      isPasswordFlag = false;
      errorText = "Password cannot be empty";
    }
    // regex for email address verification
    else if (rp.test(password)) {
      isPasswordFlag = true;
      errorText = "";
    } else {
      isPasswordFlag = false;
      errorText = (
        <ul style={{ paddingLeft: "17px" }}>
          Password must contain
          <li>at least 1 lowercase character</li>
          <li>at least 1 uppercase character</li>
          <li>at least 1 numeric character</li>
          <li>at least 1 special character out of *[!@#$%^&*] </li>
          <li>be eight characters or longer</li>
        </ul>
      );
    }

    this.setState({
      isCorrectPassword: isPasswordFlag,
      passwordErrorText: errorText,
    });
    return isPasswordFlag;
  }
}

export default PasswordField;
