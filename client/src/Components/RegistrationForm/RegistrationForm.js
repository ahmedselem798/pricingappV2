import React, { Component } from "react";
import "./RegistrationForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import formbg4 from "../../images/formbg4.jpg";
import {
  PersonFill,
  Envelope,
  // Building,
  Phone,
  LockFill,
  // ArrowRepeat,
} from "react-bootstrap-icons";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, password } = this.state;
    console.log(firstName, lastName, email, phoneNumber, password);
    fetch("http://localhost:5000/registration", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRigester");
      });
      window.location.href = "/countries"
  }
  render() {
    return (
      <div
        className="container-md"
        style={{ backgroundImage: `url(${formbg4})` }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <PersonFill size={20} className="form-icon" />
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="custom-input"
                    onChange={(e) => this.setState({ firstName: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <PersonFill size={20} className="form-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="custom-input"
                    onChange={(e) => this.setState({ lastName: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <Envelope size={20} className="form-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Business Email"
                    className="custom-input"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3 form-group-spacing d-flex">
                  <Building size={20} className="form-icon" />
                  <Form.Control type="text" placeholder="Company Name" className="custom-input" />
                </Form.Group> */}

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <Phone size={20} className="form-icon" />
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    className="custom-input"
                    onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3 form-group-spacing d-flex">
                  <LockFill size={20} className="form-icon" />
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className="custom-input"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3 form-group-spacing d-flex">
                  <ArrowRepeat size={20} className="form-icon" />
                  <Form.Control type="password" placeholder="Re-Enter Password" className="custom-input" />
                </Form.Group> */}

                <Button
                  variant="primary"
                  type="submit"
                  className="mb-3 custom-button"
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RegistrationForm;
