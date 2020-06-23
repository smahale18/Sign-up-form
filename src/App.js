import React, { Component } from "react";
import "./App.css";
import SignUpForm from "./components/signUpFormBody";
import SignInPage from "./components/signInPage";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      email: "",
      password: "",
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    return (
      <div className="App-body">
        <BrowserRouter>
          <Route
            path="/signup"
            render={(props) => (
              <SignUpForm
                {...props}
                handleFirstNameChange={this.handleFirstNameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                email={this.state.email}
              />
            )}
            exact
          />
          <Route
            path="/signin"
            render={(props) => (
              <SignInPage
                {...props}
                firstName={this.state.firstName}
                email={this.state.email}
              />
            )}
            exact
          />
        </BrowserRouter>
      </div>
    );
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
}

export default App;
