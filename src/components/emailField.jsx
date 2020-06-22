import React, { Component } from "react";
import "../styles/formField.css";

class EmailField extends Component {
  constructor(props) {
    super(props);
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
          required
          minLength="2"
          maxLength="254"
          onChange={this.props.handleEmailChange}
        />
      </div>
    );
  }
}

export default EmailField;
