import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import CountriesTable from './Components/CountriesTable/CountriesTable';
import CreateCountry from './Components/CreateCountry/CreateCountry'
import UpdateCountry from './Components/UpdateCountry/UpdateCountry';
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<CountriesTable/>}/>
      <Route path='/create' element = {<CreateCountry/>}/>
      <Route path='/update/:id' element = {<UpdateCountry />}/>
      {/* <Route path='/' element = {<RegistrationForm/>}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
