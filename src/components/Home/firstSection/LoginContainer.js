import React, { Component } from "react";
import Login from "./Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
      this.setState({password: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted");
    this.setState({email:"",password:""})
  };

  render() {
    return (
      <div>
        <Login
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
          handleState={this.state}
        />
      </div>
    );
  }
}
export default LoginContainer;
