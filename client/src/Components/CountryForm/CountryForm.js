import React, { useState } from 'react';
import './CountryForm.css'; 
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';

const countryOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'aland-islands', label: 'Aland Islands' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'anguilla', label: 'Anguilla' },
  { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'armenia', label: 'Armenia' },
  { value: 'aruba', label: 'Aruba' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'canada', label: 'Canada' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'oman', label: 'Oman' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'saudi', label: 'Saudi Arabia' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'uae', label: 'UAE' },
  { value: 'unitedkingdom', label: 'United Kingdom' },
  { value: 'unitedstates', label: 'United States' },
];

function CountryForm() {
  const [networks, setNetworks] = useState(['']);
  const [vpmnValue, setvpmnValue] = useState(['']);
  const [dataCosts, setDataCosts] = useState(['']);
  const [imsi, setImsi] = useState(['']);
  const [provider, setProvider] = useState(['']);
  const [formData, setFormData] = useState({
    countryName: '',
    technologies: [],
  });

  const handleNetworkChange = (index, value) => {
    const updatedNetworks = [...networks];
    updatedNetworks[index] = value;
    setNetworks(updatedNetworks);
  };

  const handleDataCostChange = (index, value) => {
    const updatedDataCosts = [...dataCosts];
    updatedDataCosts[index] = value;
    setDataCosts(updatedDataCosts);
  };

  const handleImsiChange = (index, value) => {
    const updatedImsi = [...imsi];
    updatedImsi[index] = value;
    setImsi(updatedImsi);
  };

  const handlevpmnChange = (index, value) => {
    const updatedvpmnValue = [...vpmnValue];
    updatedvpmnValue[index] = value;
    setvpmnValue(updatedvpmnValue);
  };

  const handleProviderChange = (index, value) => {
    const updatedProvider = [...provider];
    updatedProvider[index] = value;
    setProvider(updatedProvider);
  };

  // const handleAddNetwork = () => {
  //   setNetworks([...networks, '']);
  //   setDataCosts([...dataCosts, '']);
  //   setImsi([...imsi, '']);
  //   setvpmnValue([...vpmnValue, '']);
  // };

  const handleTechnologyChange = (technology) => {
    const updatedTechnologies = formData.technologies.includes(technology)
      ? formData.technologies.filter((tech) => tech !== technology)
      : [...formData.technologies, technology];
    setFormData({
      ...formData,
      technologies: updatedTechnologies,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Container fluid className='container-xxl'>
      <Container className='container'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.countryName}
                  onChange={(e) => setFormData({ ...formData, countryName: e.target.value })}
                >
                  <option value="" disabled hidden>Select a country</option>
                  {countryOptions.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Networks</Form.Label>
                {networks.map((network, index) => (
                  <InputGroup key={index} className="mb-2">
                    <Form.Control
                      type="text"
                      value={network}
                      onChange={(e) => handleNetworkChange(index, e.target.value)}
                    />
                  </InputGroup>
                ))}
                <Button type="button" variant="secondary" size="lg"
                //  onClick={handleAddNetwork}
                 >
                  Add
                </Button>
                
                <Button type="button" variant="third" size="lg"
                //  onClick={handleAddNetwork}
                 >
                  Edit
                </Button>
              </Form.Group>
              

              <Form.Group>
                <Form.Label>VPMN</Form.Label>
                {vpmnValue.map((vpmnValue, index) => (
                  <InputGroup key={index} className="mb-2">
                    <Form.Control
                      type="text"
                      value={vpmnValue}
                      onChange={(e) => handlevpmnChange(index, e.target.value)}
                    />
                  </InputGroup>
                ))}
              </Form.Group>

              <Form.Group>
                <Form.Label>Data Cost</Form.Label>
                {dataCosts.map((dataCost, index) => (
                  <InputGroup key={index} className="mb-2">
                    <Form.Control
                      type="text"
                      value={dataCost}
                      onChange={(e) => handleDataCostChange(index, e.target.value)}
                    />
                  </InputGroup>
                ))}
              </Form.Group>

              <Form.Group>
                <Form.Label>IMSI</Form.Label>
                {imsi.map((imsiValue, index) => (
                  <InputGroup key={index} className="mb-2">
                    <Form.Control
                      type="number"
                      value={imsiValue}
                      onChange={(e) => handleImsiChange(index, e.target.value)}
                    />
                  </InputGroup>
                ))}
              </Form.Group>

              <Form.Group>
                <Form.Label>Provider</Form.Label>
                {provider.map((provider, index) => (
                  <InputGroup key={index} className="mb-2">
                    <Form.Control
                      type="text"
                      value={provider}
                      onChange={(e) => handleProviderChange(index, e.target.value)}
                    />
                  </InputGroup>
                ))}
              </Form.Group>

              <h2 className='h1'>Technologies</h2>

              {['2G', '3G', 'LTE', '5G', 'LTE-M', 'NB_IoT'].map((technology) => (
                <Form.Check
                  key={technology}
                  type="checkbox"
                  label={technology}
                  checked={formData.technologies.includes(technology)}
                  onChange={() => handleTechnologyChange(technology)}
                />
              ))}

              <Button type="submit" variant="primary" size="lg">
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