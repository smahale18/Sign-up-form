import React, { Component } from "react";
import "../styles/formField.css";

class FirstNameField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label className="signup-label" htmlFor="First Name">
          First Name
        </label>
        <input
          id="First Name"
          className="signup-input"
          required
          minLength="2"
          maxLength="50"
          onChange={this.props.handleFirstNameChange}
        />
      </div>
    );
  }
}

export default FirstNameField;
