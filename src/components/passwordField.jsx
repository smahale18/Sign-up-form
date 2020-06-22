import React, { Component } from "react";
import "../styles/formField.css";

class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label className="signup-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="signup-input"
          required
          minLength="2"
          maxLength="50"
          onChange={this.props.handlePasswordChange}
        />
      </div>
    );
  }
}

export default PasswordField;
