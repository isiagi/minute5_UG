import React, { Component } from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import Button from "react-bootstrap/Button";
import LoginContainer from "./firstSection/LoginContainer";
import Register from "./firstSection/Register";
import "./Home.css";


export class Home extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <h3>what do you need</h3>
          <ul>
           <Link to="/register"><Button>Register</Button></Link>

            <Link to="/login"><Button>Login</Button></Link>
          </ul>
        </nav>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={Register}/>
      </div>
      </Router>

    );
  }
}

export default Home;
