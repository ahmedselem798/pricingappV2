import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CountriesTable from './Components/CountriesTable/CountriesTable';
import CreateCountry from './Components/CreateCountry/CreateCountry'
import UpdateCountry from './Components/UpdateCountry/UpdateCountry';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ResetPassword from './Components/ResetPassword/ResetPassword';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/countries' element = {<CountriesTable/>}/>
      <Route path='/create' element = {<CreateCountry/>}/>
      <Route path='/update/:id' element = {<UpdateCountry />}/>
      <Route path='/register' element = {<RegistrationForm/>}/>
      <Route path='/' element = {<LoginForm/>}/>
      <Route path='/reset-password' element = {<ResetPassword/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
