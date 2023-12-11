import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./CreateCountry.css";
import { Form, Container, Row, Col, Button, InputGroup } from "react-bootstrap";

function CreateCountry() {
  const [countryName, SetCountryName] = useState();
  const [network, SetNetwork] = useState();
  const [vpmn, SetVPMN] = useState();
  const [imsi, SetIMSI] = useState();
  const [dataCostPerMB, SetDataCost] = useState();
  const [provider, SetProvider] = useState();
  const [note, SetNote] = useState();

  // Separate state for each technology
  const [_2G, Set2G] = useState("");
  const [_3G, Set3G] = useState("");
  const [_4G, Set4G] = useState("");
  const [_5G, Set5G] = useState("");
  const [lte, SetLTE] = useState("");
  const [lte_m, SetLTE_M] = useState("");
  const [nb_iot, SetNB_IoT] = useState("");

  // Navigation
  const Navigate = useNavigate();

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/create", {
        countryName,
        network,
        imsi,
        vpmn,
        provider,
        note,
        dataCostPerMB,
        _4G,
        _2G,
        _3G,
        _5G,
        lte,
        lte_m,
        nb_iot,
      });
      console.log(result.data);
      Navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container fluid className="container-xxl">
      <Container className="container-lg">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={countryName}
                      onChange={(e) => SetCountryName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Network</Form.Label>
                    <Form.Control
                      type="text"
                      value={network}
                      onChange={(e) => SetNetwork(e.target.value)}
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
                      value={vpmn}
                      onChange={(e) => SetVPMN(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Data Cost</Form.Label>
                    <Form.Control
                      type="text"
                      value={dataCostPerMB}
                      onChange={(e) => SetDataCost(e.target.value)}
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
                      onChange={(e) => SetIMSI(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Provider</Form.Label><br/>
                    <select
                      value={provider}
                      onChange={(e) => SetProvider(e.target.value)}
                      className="custom-select-provider"
                    >
                      <option value="" disabled selected>
                        Select Provider
                      </option>
                      <option value="FlowLive">Flolive</option>
                      <option value="PondMobile">PondMobile</option>
                    </select>

                  </Col>
                </Row>
              </Form.Group>

<h2 className="h1">Technologies</h2>

<Row>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={_2G}
        onChange={(e) => Set2G(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          2G
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={_3G}
        onChange={(e) => Set3G(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          3G
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={_4G}
        onChange={(e) => Set4G(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          4G
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
</Row>

<Row>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={_5G}
        onChange={(e) => Set5G(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          5G
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={lte}
        onChange={(e) => SetLTE(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          LTE
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
  <Col md={4}>
    <InputGroup className="mb-2">
      <select
        value={lte_m}
        onChange={(e) => SetLTE_M(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          LTE-M
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
</Row>

<Row>
  <Col md={4}>
    <InputGroup className="mb-2 custom-nbiot-input-group">
      <select
        value={nb_iot}
        onChange={(e) => SetNB_IoT(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>
          NB-IOT
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </InputGroup>
  </Col>
</Row>
              <Col>
                <Form.Label className="notes">Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={note}
                  onChange={(e) => SetNote(e.target.value)}
                />
              </Col>

              <Button type="submit" className="btn btn-dark">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CreateCountry;
