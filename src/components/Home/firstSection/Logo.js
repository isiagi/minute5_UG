import React, { Component } from "react";
import logo from "../images/minute5_logo.png";
import "./Logo.css";


export class Logo extends Component {
  render() {
    return (
    <div className="logo">
        <h3>Minute5<img src={logo} alt="minute5"/></h3>
        <h1 className="mt-4">Any grocery in Kampala</h1>
        <h2 className="mt-6">Delivered in minutes</h2>
    </div>
    )
  }
}

export default Logo;
