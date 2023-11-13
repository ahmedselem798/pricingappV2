import React, { useState } from 'react';
import './CountryForm.css';
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';

function CountryForm() {
  const [countryName, setCountryName] = useState('');
  const [network, setNetwork] = useState('');
  const [vpmnValue, setVpmnValue] = useState('');
  const [dataCost, setDataCost] = useState('');
  const [imsi, setImsi] = useState('');
  const [provider, setProvider] = useState('');
  const [notes, setNotes] = useState('');
  const [technology2G, setTechnology2G] = useState('');
  const [technology3G, setTechnology3G] = useState('');
  const [technologyLTE, setTechnologyLTE] = useState('');
  const [technology5G, setTechnology5G] = useState('');
  const [technologyLTE_M, setTechnologyLTE_M] = useState('');
  const [technologyNB_IoT, setTechnologyNB_IoT] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', {
      countryName,
      network,
      vpmnValue,
      dataCost,
      imsi,
      provider,
      notes,
      technologies: {
        '2G': technology2G,
        '3G': technology3G,
        LTE: technologyLTE,
        '5G': technology5G,
        'LTE-M': technologyLTE_M,
        'NB_IoT': technologyNB_IoT,
      },
    });
  };

  return (
    <Container fluid className='container-xxl'>
      <Container className='container'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      value={countryName}
                      onChange={(e) => setCountryName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Network</Form.Label>
                    <Form.Control
                      type="text"
                      value={network}
                      onChange={(e) => setNetwork(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>VPMN</Form.Label>
                    <Form.Control
                      type="text"
                      value={vpmnValue}
                      onChange={(e) => setVpmnValue(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Data Cost</Form.Label>
                    <Form.Control
                      type="text"
                      value={dataCost}
                      onChange={(e) => setDataCost(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>IMSI</Form.Label>
                    <Form.Control
                      type="text"
                      value={imsi}
                      onChange={(e) => setImsi(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Provider</Form.Label>
                    <Form.Control
                      type="text"
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <h2 className='h1'>Technologies</h2>

              <Row>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="2G"
                      value={technology2G}
                      onChange={(e) => setTechnology2G(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="3G"
                      value={technology3G}
                      onChange={(e) => setTechnology3G(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="LTE"
                      value={technologyLTE}
                      onChange={(e) => setTechnologyLTE(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="5G"
                      value={technology5G}
                      onChange={(e) => setTechnology5G(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="LTE-M"
                      value={technologyLTE_M}
                      onChange={(e) => setTechnologyLTE_M(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="NB_IoT"
                      value={technologyNB_IoT}
                      onChange={(e) => setTechnologyNB_IoT(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Col>
                <Form.Label className='notes'>Notes</Form.Label>
                <Form.Control
                  as="textarea" rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Col>

              <Button type="submit" className="btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CountryForm;
