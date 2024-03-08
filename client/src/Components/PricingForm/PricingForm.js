import React, { useState } from "react";
import "./PricingForm.css";
import depimg from "../../images/depimg.png"
import { Link } from "react-router-dom";

const PricingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [dataUnit, setDataUnit] = useState("MB");
  const [dataValue, setDataValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handleDataUnitChange = (e) => {
    setDataUnit(e.target.value);
  };

  const handleDataValueChange = (e) => {
    const value = e.target.value;
    setDataValue(value);

    // Convert the value and update the convertedValue state
    if (dataUnit === "GB") {
      const converted = convertGBtoMB(value);
      setConvertedValue(`${converted} MB`);
      setNumberOfGB(converted);
      setNumberOfMB(0);
      setTotal(0);
    } else {
      setConvertedValue("");
      setNumberOfGB(0);
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
  const [showCreditTransactionFees, setShowCreditTransactionFees] =
    useState(false);

  const handleCreditCardFeesChange = (e) => {
    setShowCreditCardFees(e.target.checked);
  };

  const handleCreditTransactionFeesChange = (e) => {
    setShowCreditTransactionFees(e.target.checked);
  };
  const [cost, setCost] = useState();
  const [creditCardFee, setCreditCardFee] = useState(0);
  const [numberOfSIMs, setNumberOfSIMs] = useState("");
  const [markUpPrice, setMarkUpPrice] = useState("");
  const [accessLineFee, setAccessLineFee] = useState("");
  const [numberOfMB, setNumberOfMB] = useState(0);
  const [numberOfGB, setNumberOfGB] = useState(0);
  const [utilizationRate, setUtilizationRate] = useState(100);
  const [creditTransactionFees, setCreditTransactionFees] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCalculate = async () => {
    const utilization =
      (parseFloat(numberOfMB) + parseFloat(numberOfGB)) *
      parseFloat(utilizationRate / 100);
    const price = parseFloat(cost) * utilization;
    const priceWithFee = price + parseFloat(accessLineFee);
    const priceWithMarkUp = priceWithFee * parseFloat(markUpPrice / 100);
    const profit = priceWithFee + priceWithMarkUp;

    const ProfitWithSIMs = profit * parseFloat(numberOfSIMs);

    const ProfitWithCreditCardFee =
      ProfitWithSIMs * parseFloat(creditCardFee / 100);
    // const profitWithCreditTransactionFees =
    //   ProfitWithSIMs * parseFloat(creditTransactionFees / 100);

    const totalProfit =
      ProfitWithCreditCardFee +
      ProfitWithSIMs +
      parseFloat(creditTransactionFees);

    setTotal(totalProfit.toFixed(2));
  };

  return (
    <div className="container mt-4">
      <Link to='/'>
        <img className="depimg3" src={depimg}></img>
        </Link> 
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="costPerMB" className="form-label">
              Cost/MB
            </label>
            <input
              type="text"
              className="form-control"
              id="costPerMB"
              value={cost}
              onChange={() => setTotal(0)}
              onInput={(e) => setCost(e.target.value)}
            />
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
              onInput={(e) => setNumberOfMB(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {dataUnit === "GB" && (
              <label htmlFor="convertedValue" className="form-label">
                Converted Value
              </label>
            )}
            {dataUnit === "GB" && (
              <input
                type="text"
                className="form-control"
                id="convertedValue"
                value={convertedValue}
                onInput={(e) => setNumberOfGB(e.target.value)}
                readOnly
              />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="laf" className="form-label">
              Line Access Fees
            </label>
            <select
              className="form-select"
              id="laf"
              value={accessLineFee}
              onInput={(e) => setAccessLineFee(e.target.value)}
              onChange={() => setTotal(0)}
            >
              <option value={0}>0</option>
              <option value={0.25}>0.25</option>
              <option value={0.35}>0.35</option>
              <option value={0.5}>0.50</option>
              <option value={0.6}>0.60</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="quantityOfSIMs" className="form-label">
              Quantity of SIMs
            </label>
            <input
              type="text"
              className="form-control"
              id="quantityOfSIMs"
              value={numberOfSIMs}
              onInput={(e) => setNumberOfSIMs(e.target.value)}
              onChange={() => setTotal(0)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ur" className="form-label">
              Utilization Rate
            </label>
            <select
              className="form-select"
              id="ur"
              value={utilizationRate}
              onInput={(e) => setUtilizationRate(e.target.value)}
              onChange={() => setTotal(0)}
            >
              <option value={100}>100%</option>
              <option value={90}>90%</option>
              <option value={80}>80%</option>
              <option value={70}>70%</option>
              <option value={60}>60%</option>
              <option value={50}>50%</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="ur" className="form-label">
              Gross Margin
            </label>
            <select
              className="form-select"
              id="ur"
              value={markUpPrice}
              onInput={(e) => setMarkUpPrice(e.target.value)}
              onChange={()=>setTotal(0)}
            >
              <option value={5.26}>5%</option>
              <option value={11.11}>10%</option>
              <option value={17.65}>15%</option>
              <option value={25}>20%</option>
              <option value={33.33}>25%</option>
              <option value={42.86}>30%</option>
              <option value={53.85}>35%</option>
              <option value={58.73}>37%</option>
              <option value={61.29}>38%</option>
              <option value={63.93}>39%</option>
              <option value={66.67}>40%</option>
              <option value={69.49}>41%</option>
              <option value={72.41}>42%</option>
              <option value={75.44}>43%</option>
              <option value={78.57}>44%</option>
              <option value={81.82}>45%</option>
              <option value={85.19}>46%</option>
              <option value={88.68}>47%</option>
              <option value={92.31}>48%</option>
              <option value={94.17}>48.5%</option>
              <option value={96.08}>49%</option>
              <option value={100}>50%</option>
              <option value={104.08}>51%</option>
              <option value={108.33}>52%</option>
              <option value={110.53}>52.5%</option>
              <option value={112.77}>53%</option>
              <option value={117.39}>54%</option>
              <option value={124.22}>55%</option>
              <option value={127.27}>56%</option>
              <option value={129.89}>56.5%</option>
              <option value={132.56}>57%</option>
              <option value={138.1}>58%</option>
              <option value={143.9}>59%</option>
              <option value={150}>60%</option>
              <option value={165.41}>61%</option>
              <option value={163.16}>62%</option>
              <option value={170.27}>63%</option>
              <option value={177.78}>64%</option>
              <option value={185.71}>65%</option>
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
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="cash">
                Wire Transfer
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
          </div>
          {paymentMethod === "creditCard" && (
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
                  <select
                    className="form-select"
                    id="creditCardFeesOptions"
                    value={creditCardFee}
                    onChange={() => setTotal(0)}
                    onInput={(e) => setCreditCardFee(e.target.value)}
                  >
                    <option value={0}>0</option>
                    <option value={3}>3%</option>
                    <option value={3.5}>3.5%</option>
                    <option value={4}>4%</option>
                    <option value={4.5}>4.5%</option>
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
                  <select
                    className="form-select"
                    id="creditTransactionFeesOptions"
                    value={creditTransactionFees}
                    onChange={() => setTotal(0)}
                    onInput={(e) => setCreditTransactionFees(e.target.value)}
                  >
                    <option value={0}>0</option>
                    <option value={0.3}>0.30</option>
                    <option value={0.4}>0.40</option>
                    <option value={0.5}>0.50</option>
                  </select>
                )}
              </div>
            </div>
          )}
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            <div className="mb-3">
              <br />
              <input
                type="text"
                className="form-control"
                id="costPerMB"
                value={total}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
