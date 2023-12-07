import React, { Component } from "react";
import "./ResetPassword.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import formbg4 from "../../images/formbg4.jpg";
import { LockFill, Envelope, ArrowRepeat } from "react-bootstrap-icons";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/forget-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRigester");
        alert(data.status)
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
                    placeholder="Enter your E-mail"
                    className="custom-input"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3 form-group-spacing d-flex">
                  <ArrowRepeat size={20} className="form-icon" />
                  <Form.Control type="password" placeholder="Re-Enter Password" className="custom-input" />
                </Form.Group> */}

                <Button type="submit" className="btn btn-light">
                  Confirm
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResetPassword;
