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
                    <Form.Label>Networks</Form.Label>
                    {networks.map((network, index) => (
                      <InputGroup key={index} className="mb-2">
                        <Form.Control type="text" value={network} />
                      </InputGroup>
                    ))}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>VPMN</Form.Label>
                    {vpmnValue.map((vpmn, index) => (
                      <InputGroup key={index} className="mb-2">
                        <Form.Control type="text" value={vpmn} />
                      </InputGroup>
                    ))}
                  </Col>
                  <Col>
                    <Form.Label>Data Cost</Form.Label>
                    {dataCosts.map((dataCost, index) => (
                      <InputGroup key={index} className="mb-2">
                        <Form.Control type="text" value={dataCost} />
                      </InputGroup>
                    ))}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>IMSI</Form.Label>
                    {imsi.map((imsiValue, index) => (
                      <InputGroup key={index} className="mb-2">
                        <Form.Control type="number" value={imsiValue} />
                      </InputGroup>
                    ))}
                  </Col>
                  <Col>
                    <Form.Label>Provider</Form.Label>
                    {provider.map((providerValue, index) => (
                      <InputGroup key={index} className="mb-2">
                        <Form.Control type="text" value={providerValue} />
                      </InputGroup>
                    ))}
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

              <button type="button" className="btn">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CountryForm;
