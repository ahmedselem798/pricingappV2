import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CountriesTable from './Components/CountriesTable/CountriesTable';
// import CountryForm from './Components/CountriesForm/CountryForm'
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      {/* <CountryForm/> */}
      {/* <RegistrationForm/> */}
      <CountriesTable/>
    </div>
  );
}

export default App;
