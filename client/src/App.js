import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import CountriesTable from './Components/CountriesTable/CountriesTable';
import CreateCountry from './Components/CreateCountry/CreateCountry'
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <CreateCountry/>
      {/* <RegistrationForm/> */}
      {/* <CountriesTable/> */}
    </div>
  );
}

export default App;
