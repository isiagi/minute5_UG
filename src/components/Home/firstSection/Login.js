import React from "react";
import { Form, Button, Container } from "react-bootstrap";

class Login extends React.Component {
  render() {
    console.log(this.handleChange);
    return (
      <div>
      <Container>

        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.props.handleState.email} onChange={this.props.handleEmail} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"value={this.props.handleState.password} onChange={this.props.handlePassword} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;
