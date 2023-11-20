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
          window.location.href = "/countries";
        }
      });
  }
  render() {
    return (
      <div
        className="container-sm"
        style={{ backgroundImage: `url(${formbg4})` }}
      >
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

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <LockFill size={20} className="form-icon" />
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className="custom-input"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <p className="text-start">
                    Forgot{" "}
                    <Link
                      to="/reset-password"
                      className="link-opacity-25-hover"
                    >
                      password?
                    </Link>
                  </p>
                </Form.Group>

                <Button
                  variant="secondary"
                  type="submit"
                  className="mb-3 custom-button"
                >
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
