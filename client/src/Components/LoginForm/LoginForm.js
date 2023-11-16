import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import formbg4 from '../../images/formbg4.jpg';
import {
  Envelope,
  LockFill,
} from 'react-bootstrap-icons';

function LoginForm() {
  return (
    <div className="container-sm" 
    style={{ backgroundImage: `url(${formbg4})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <Envelope size={20} className="form-icon" />
                <Form.Control type="email" placeholder="Email" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <LockFill size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Enter Password" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
              <p className="text-start">
                  Forgot <Link to="/reset-password" className="link-opacity-25-hover">password?</Link>
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

export default LoginForm;
