import React, { Component } from "react";
import "../styles/signUpFormBody.css";
import FirstNameField from "./firstNameField.jsx";
import EmailField from "./emailField.jsx";
import PasswordField from "./passwordField";
import { Redirect } from "react-router-dom";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.emailRef = React.createRef();

    this.validateInputs = this.validateInputs.bind(this);
  }

  render() {
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
        <form onSubmit={this.validateInputs}>
          <FirstNameField
            handleFirstNameChange={this.props.handleFirstNameChange}
          ></FirstNameField>
          <EmailField
            handleEmailChange={this.props.handleEmailChange}
            email={this.props.email}
            ref={this.emailRef}
          ></EmailField>
          <PasswordField
            handlePasswordChange={this.props.handlePasswordChange}
          ></PasswordField>
          {this.renderRedirect()}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  validateInputs(e) {
    e.preventDefault();
    if (this.emailRef.current.validateEmail()) {
      this.setState({
        redirect: true,
      });
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect from="/signup" to="/signin" />;
    }
  };
}

export default SignUpForm;
