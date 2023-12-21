import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import formbg4 from "../../images/formbg4.jpg";
import { Envelope, LockFill } from "react-bootstrap-icons";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      showPassword: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRigester");
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true );
          window.location.href = "/";
        } else {
          if (data.error === "User not exist") {
            this.setState({
              emailError: "User with this email does not exist",
              passwordError: "",
            });
          } else if (data.error === "Password incorrect") {
            this.setState({
              emailError: "",
              passwordError: "Incorrect Password",
            });
          } else {
            this.setState({
              emailError: "Unexpected error occurred",
              passwordError: "",
            });
          }
        }
      });
  }

  render() {
    const { emailError, passwordError, showPassword } = this.state;

    return (
      <div className="container-sm" style={{ backgroundImage: `url(${formbg4})` }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <Envelope size={20} className="form-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="custom-input"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Form.Group>

                {emailError && <p className="text-danger">{emailError}</p>}

                {/* <Form.Group className="mb-3 form-group-spacing d-flex">
                  <LockFill size={20} className="form-icon" />
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className="custom-input"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </Form.Group> */}
  
              <Form.Group className="mb-3 form-group-spacing d-flex password-container">
                    <LockFill size={20} className="form-icon" />
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="custom-input"
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <div className="password-toggle" onClick={() => this.setState({ showPassword: !showPassword })}>
                      {showPassword ? "🔒" : "👁️"}
                    </div>
                 </Form.Group>
               

                {passwordError && <p className="text-danger">{passwordError}</p>}

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <p className="text-start">
                    To Reset your Password  {" "}
                    <Link
                      to="/reset-password"
                      className="link-opacity-25-hover"
                    >
                      Click her
                    </Link>
                  </p>
                </Form.Group>

                <Button variant="secondary" type="submit" className="mb-3 custom-button">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginForm;
