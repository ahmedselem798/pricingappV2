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
            index
            element={isLoggedIn === "true" ? <CountriesTable /> : <LoginForm />}
          ></Route>
          <Route
            exact
            path="/create"
            element={isLoggedIn === "true" ? <CreateCountry /> : <LoginForm />}
          ></Route>{" "}
          <Route
            exact
            path="/update/:id"
            element={isLoggedIn === "true" ? <UpdateCountry /> : <LoginForm />}
          ></Route>{" "}
          <Route
            exact
            path="/register"
            element={
              isLoggedIn === "true" ? <RegistrationForm /> : <LoginForm />
            }
          ></Route>{" "}
          <Route
            exact
            path="/search"
            element={isLoggedIn === "true" ? <CountrySearch /> : <LoginForm />}
          ></Route>{" "}
          <Route
            exact
            path="/price"
            element={isLoggedIn === "true" ? <PricingForm /> : <LoginForm />}
          ></Route>
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
