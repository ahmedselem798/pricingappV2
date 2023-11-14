import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountriesTable.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CountriesTable = () => {
  const [Country, SetCountry] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => SetCountry(result.data))
      .catch((err) => console.log(err));
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

  return (
    <div>
      <Link to="/create" className="btn custom-btn btn-success mb-3">
        Add Country
      </Link>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th>Country</th>
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
        <tbody>
          {Country.map((Country) => {
            return (
              <tr>
                <td>{Country.countryName}</td>
                <td>{Country.network}</td>
                <td>{Country.vpmn}</td>
                <td>{Country.imsi}</td>
                <td>{Country.dataCostPerMB}</td>
                <td>{Country.dataCostPerMB * 1024}</td>
                <td>{Country.provider}</td>
                <td>{Country._2G}</td>
                <td>{Country._3G}</td>
                <td>{Country._4G}</td>
                <td>{Country._5G}</td>
                <td>{Country.lte}</td>
                <td>{Country.lte_m}</td>
                <td>{Country.nb_iot}</td>
                <td>{Country.note}</td>
                <td>
                  <button
                    onClick={(e) => handleDelete(Country._id)}
                    className="btn custom-btn btn-edit mr-2"
                  >
                    Delete
                  </button>
                  <Link to={`/update/${Country._id}`} className="btn custom-btn btn-add">Edit</Link>
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
