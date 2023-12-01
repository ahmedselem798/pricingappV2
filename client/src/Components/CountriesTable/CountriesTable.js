import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountriesTable.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CountriesTable = () => {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: "countryName",
    direction: "asc",
  });
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => setCountries(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/home", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData({ userData: data.data });
        if (data.data === "Token Expierd") {
          alert("Token Expierd");
          window.localStorage.clear();
          window.location.href = "/";
        }
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then((resulte) => {
        console.log(resulte);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleSort = () => {
    setSortOrder((prevSortOrder) => ({
      column: "countryName",
      direction:
        prevSortOrder.column === "countryName" &&
        prevSortOrder.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedCountries = [...countries].sort((a, b) => {
    const isDesc = sortOrder.direction === "desc" ? -1 : 1;
    const countryA = a[sortOrder.column].toLowerCase();
    const countryB = b[sortOrder.column].toLowerCase();

    if (countryA < countryB) {
      return -1 * isDesc;
    }
    if (countryA > countryB) {
      return 1 * isDesc;
    }
    return 0;
  });

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="d-flex mb-3">
        <button onClick={logout} type="submit" class="btn btn-warning mr-2">
          logout
        </button>
        <Link to="/register" className="btn btn-warning">
          Add User
        </Link>
        <Link to="/create" className="btn btn-success ml-auto">
          Add Country
        </Link>
      </div>

      <table className="table table-striped-columns">
        <thead className="text-center">
          <tr>
            <th onClick={handleSort} className="country-header">
              Country
            </th>
            <th>Networks</th>
            <th>VPMN</th>
            <th>IMSI</th>
            <th>Data Cost per MB</th>
            <th>Cost of 1 GB</th>
            <th>Provider</th>
            <th>2G</th>
            <th>3G</th>
            <th>4G</th>
            <th>5G</th>
            <th>LTE</th>
            <th>LTE_M</th>
            <th>NB_IoT</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sortedCountries.map((country) => {
            return (
              <tr key={country._id}>
                <td>{country.countryName}</td>
                <td>{country.network}</td>
                <td>{country.vpmn}</td>
                <td>{country.imsi}</td>
                <td>{country.dataCostPerMB}</td>
                <td>{country.dataCostPerMB * 1024}</td>
                <td>{country.provider}</td>
                <td>{country._2G}</td>
                <td>{country._3G}</td>
                <td>{country._4G}</td>
                <td>{country._5G}</td>
                <td>{country.lte}</td>
                <td>{country.lte_m}</td>
                <td>{country.nb_iot}</td>
                <td>{country.note}</td>
                <td>
                  <div className="btn-container">
                    <button
                      onClick={(e) => handleDelete(country._id)}
                      className="btn custom-btn btn-danger mr-2"
                    >
                      Delete
                    </button>

                    <Link to={`/update/${country._id}`}>
                      <button type="button" className="btn btn-info">
                        Edit
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountriesTable;
