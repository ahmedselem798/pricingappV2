import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CountriesTable.css'; // Import your stylesheet

const CountriesTable = () => {
  return (
    <div>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th>Country</th>
            <th>Networks</th>
            <th>VPMN</th>
            <th>Data Cost</th>
            <th>IMSI</th>
            <th>Provider</th>
            <th>2G</th>
            <th>3G</th>
            <th>LTE</th>
            <th>5G</th>
            <th>LTE_M</th>
            <th>NB_IoT</th>
            <th>Notes</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Egypt</td>
            <td>Vodafone</td>
            <td>Vod</td>
            <td>0.0322$</td>
            <td>22</td>
            <td>PondMobile</td>
            <td>yes</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>No notes yet</td>
            <td>
              <button className="btn custom-btn btn-edit mr-2">Edit</button>
              <button className="btn custom-btn btn-add">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountriesTable;



