
import React, { useState } from 'react';
import './PricingForm.css';

const PricingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [dataUnit, setDataUnit] = useState('MB');
  const [dataValue, setDataValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleDataUnitChange = (e) => {
    setDataUnit(e.target.value);
  };

  const handleDataValueChange = (e) => {
    const value = e.target.value;
    setDataValue(value);

    // Convert the value and update the convertedValue state
    if (dataUnit === 'GB') {
      const converted = convertGBtoMB(value);
      setConvertedValue(`${converted} MB`);
    } else {
      setConvertedValue('');
    }
  };

  // Function to convert GB to MB
  const convertGBtoMB = (value) => {
    const GBtoMBConversion = 1024;
    return value * GBtoMBConversion;
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [showCreditCardFees, setShowCreditCardFees] = useState(false);
  const [showCreditTransactionFees, setShowCreditTransactionFees] = useState(false);

  const handleCreditCardFeesChange = (e) => {
    setShowCreditCardFees(e.target.checked);
  };

  const handleCreditTransactionFeesChange = (e) => {
    setShowCreditTransactionFees(e.target.checked);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="costPerMB" className="form-label">
              Cost/MB
            </label>
            <input type="text" className="form-control" id="costPerMB" />
          </div>
          <div className="mb-3">
            <label htmlFor="dataUnit" className="form-label">
              Data Unit
            </label>
            <select
              className="form-select"
              id="dataUnit"
              value={dataUnit}
              onChange={handleDataUnitChange}
            >
              <option value="MB">MB</option>
              <option value="GB">GB</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="data" className="form-label">
              Data/{dataUnit}
            </label>
            <input
              type="text"
              className="form-control"
              id="data"
              value={dataValue}
              onChange={handleDataValueChange}
            />
          </div>
          <div className="mb-3">
            {dataUnit === 'GB' && (
              <label htmlFor="convertedValue" className="form-label">
                Converted Value
              </label>
            )}
            {dataUnit === 'GB' && (
              <input
                type="text"
                className="form-control"
                id="convertedValue"
                value={convertedValue}
                readOnly
              />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="laf" className="form-label">
              Line Access Fees
            </label>
            <select className="form-select" id="laf">
              <option value="0">0</option>
              <option value="0.25">0.25</option>
              <option value="0.35">0.35</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="quantityOfSIMs" className="form-label">
              Quantity of SIMs
            </label>
            <input type="text" className="form-control" id="quantityOfSIMs" />
          </div>

          <div className="mb-3">
            <label htmlFor="grossMargin" className="form-label">
              Quantity of SIMs
            </label>
            <input type="text" className="form-control" id="quantityOfSIMs" />
          </div>

          <div className="mb-3">
            <label htmlFor="ur" className="form-label">
              Utilization Rate
            </label>
            <select className="form-select" id="ur">
              <option value="100%">100%</option>
              <option value="90%">90%</option>
              <option value="80%">80%</option>
              <option value="70%">70%</option>
              <option value="60%">60%</option>
              <option value="50%">50%</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="ur" className="form-label">
                Gross Margin            
            </label>
            <select className="form-select" id="ur">
              <option value="5%">5%</option>
              <option value="6%">10%</option>
              <option value="7%">15%</option>
              <option value="8%">20%</option>
              <option value="9%">25%</option>
              <option value="10%">30%</option>
              <option value="10%">35%</option>
              <option value="10%">37%</option>
              <option value="10%">38%</option>
              <option value="10%">39%</option>
              <option value="10%">40%</option>
              <option value="10%">41%</option>
              <option value="10%">42%</option>
              <option value="10%">43%</option>
              <option value="10%">44%</option>
              <option value="10%">45%</option>
              <option value="10%">46%</option>
              <option value="10%">48%</option>
              <option value="10%">48.5%</option>
              <option value="10%">49%</option>
              <option value="10%">50%</option>
              <option value="10%">51%</option>
              <option value="10%">52%</option>
              <option value="10%">52.5%</option>
              <option value="10%">53%</option>
              <option value="10%">54%</option>
              <option value="10%">55%</option>
              <option value="10%">56%</option>
              <option value="10%">56.5%</option>
              <option value="10%">57%</option>
              <option value="10%">58%</option>
              <option value="10%">59%</option>
              <option value="10%">60%</option>
              <option value="10%">61%</option>
              <option value="10%">62%</option>
              <option value="10%">63%</option>
              <option value="10%">64%</option>
              <option value="10%">65%</option>
            </select>
          </div>


          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="cash"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="cash">
                Cash
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
          </div>
          {paymentMethod === 'creditCard' && (
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="creditCardFees"
                  onChange={handleCreditCardFeesChange}
                />
                <label className="form-check-label" htmlFor="creditCardFees">
                  Credit Card Fees
                </label>
                {showCreditCardFees && (
                  <select className="form-select" id="creditCardFeesOptions">
                    <option value="3%">3%</option>
                    <option value="3.5%">3.5%</option>
                    <option value="4%">4%</option>
                    <option value="4.5%">4.5%</option>
                  </select>
                )}
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="creditTransactionFees"
                  onChange={handleCreditTransactionFeesChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="creditTransactionFees"
                >
                  Credit Transaction Fees
                </label>
                {showCreditTransactionFees && (
                  <select className="form-select" id="creditTransactionFeesOptions">
                    <option value="0.30">0.30</option>
                    <option value="0.40">0.40</option>
                    <option value="0.50">0.50</option>
                  </select>
                )}
              </div>
            </div>
          )}
          <div className="mb-3">
            <button type="button" className="btn btn-primary">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
