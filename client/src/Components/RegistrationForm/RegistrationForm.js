import React from 'react';
import './RegistrationForm.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import formbg4 from '../../images/formbg4.jpg';
import {
  PersonFill,
  Envelope,
  Building,
  Phone,
  LockFill,
  ArrowRepeat,
} from 'react-bootstrap-icons';

function RegistrationForm() {
  return (
    <div className="container" style={{ backgroundImage: `url(${formbg4})` }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3 form-group-spacing d-flex">
                <PersonFill size={20} className="form-icon" />
                <Form.Control type="text" placeholder="First Name" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <PersonFill size={20} className="form-icon" />
                <Form.Control type="text" placeholder="Last Name" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <Envelope size={20} className="form-icon" />
                <Form.Control type="email" placeholder="Business Email" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <Building size={20} className="form-icon" />
                <Form.Control type="text" placeholder="Company Name" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <Phone size={20} className="form-icon" />
                <Form.Control type="tel" placeholder="Phone Number" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <LockFill size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Enter Password" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <ArrowRepeat size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Re-Enter Password" className="custom-input" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3 custom-button">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegistrationForm;