import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CountriesTable from "./Components/CountriesTable/CountriesTable";
import CreateCountry from "./Components/CreateCountry/CreateCountry";
import UpdateCountry from "./Components/UpdateCountry/UpdateCountry";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import CountrySearch from "./Components/countrySearch/countrySearch";
import PricingForm from "./Components/PricingForm/PricingForm";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <CountriesTable /> : <LoginForm />}
          ></Route>
          <Route path="/countries" element={<CountriesTable />} />
          <Route path="/create" element={<CreateCountry />} />
          <Route path="/update/:id" element={<UpdateCountry />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/search" element={<CountrySearch />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/price" element={<PricingForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
