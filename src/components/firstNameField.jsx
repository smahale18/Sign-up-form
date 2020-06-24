import React, { Component } from "react";
import "../styles/formField.css";

class FirstNameField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCorrectFirstName: true,
      firstNameErrorText: "",
    };

    this.validateFirstName = this.validateFirstName.bind(this);
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
          //required
          //minLength="2"
          //maxLength="50"
          onChange={this.props.handleFirstNameChange}
        />
        {!this.state.isCorrectFirstName && (
          <div className="error-field">{this.state.firstNameErrorText}</div>
        )}
      </div>
    );
  }

  validateFirstName() {
    let firstName = this.props.firstName;
    let isFirstNameFlag = this.state.isCorrectFirstName;
    let errorText = "";
    //let rfn = /[A - Za - z0 - 9\. -] +/;
    let rfn = /^[a-z ,.'-]+$/i;

    if (firstName.length === 0) {
      isFirstNameFlag = false;
      errorText = "First Name cannot be empty";
    }
    // regex for email address verification
    else if (rfn.test(firstName)) {
      isFirstNameFlag = true;
      errorText = "";
    } else {
      isFirstNameFlag = false;
      errorText = "First Name is invalid";
    }

    this.setState({
      isCorrectFirstName: isFirstNameFlag,
      firstNameErrorText: errorText,
    });
    return isFirstNameFlag;
  }
}

export default FirstNameField;
