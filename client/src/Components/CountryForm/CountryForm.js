import React, { useState } from "react";
import "./CountryForm.css";
import { Form, Container, Row, Col, Button, InputGroup } from "react-bootstrap";

function CountryForm() {
  const [networks, setNetworks] = useState([""]);
  const [vpmnValue, setVpmnValue] = useState([""]);
  const [dataCosts, setDataCosts] = useState([""]);
  const [imsi, setImsi] = useState([""]);
  const [provider, setProvider] = useState([""]);
  const [notes, setNotes] = useState("");
  const [formData, setFormData] = useState({
    countryName: "",
    technologies: [
      { label: "2G", value: "" },
      { label: "3G", value: "" },
      { label: "LTE", value: "" },
      { label: "5G", value: "" },
      { label: "LTE-M", value: "" },
      { label: "NB_IoT", value: "" },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <Container fluid className="container-xxl">
      <Container className="container">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.countryName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryName: e.target.value,
                        })
                      }
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

              <h2 className="h1">Technologies</h2>

              <Row>
                {formData.technologies.map((technology, index) => (
                  <Col key={index} md={6}>
                    <InputGroup className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder={technology.label}
                        value={technology.value}
                        onChange={(e) => {
                          const updatedTechnologies = [
                            ...formData.technologies,
                          ];
                          updatedTechnologies[index].value = e.target.value;
                          setFormData({
                            ...formData,
                            technologies: updatedTechnologies,
                          });
                        }}
                      />
                    </InputGroup>
                  </Col>
                ))}
              </Row>

              <Form.Group>
                <Form.Label className="notes">Notes</Form.Label>
                <Form.Control as="textarea" rows={3} value={notes} />
              </Form.Group>

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
