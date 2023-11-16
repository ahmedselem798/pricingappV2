import React from 'react';
import './ResetPassword.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import formbg4 from '../../images/formbg4.jpg';
import {
  LockFill,
  ArrowRepeat
} from 'react-bootstrap-icons';

function ResetPassword() {
  return (
    <div className="container-sm" 
    style={{ backgroundImage: `url(${formbg4})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <LockFill size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Enter New Password" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3 form-group-spacing d-flex">
                <ArrowRepeat size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Re-Enter Password" className="custom-input" />
              </Form.Group>


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

export default ResetPassword;
