// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./countrySearch.css";
// import { sortData } from "../sortData"; // Import the updated utility function
// import axios from "axios";

// const CountrySearch = () => {
//   const [countries, setCountries] = useState([]);
//   const [record, setRecord] = useState([]);
//   const [sortOrder, setSortOrder] = useState({
//     column: "countryName",
//     direction: "asc",
//   });

//   const handleSort = () => {
//     setSortOrder((prevSortOrder) => ({
//       column: "countryName",
//       direction:
//         prevSortOrder.column === "countryName" &&
//         prevSortOrder.direction === "asc"
//           ? "desc"
//           : "asc",
//     }));
//   };

//   useEffect(() => {
//     // Sorting logic using the updated utility function
//     setRecord(sortData(countries, sortOrder));
//   }, [sortOrder, countries]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/")
//       .then((result) => {
//         const sortedData = sortData(result.data, sortOrder);
//         setCountries(sortedData);
//         setRecord(sortedData);
//       })
//       .catch((err) => console.log(err));
//   }, [sortOrder]);
  
  

//   const filter = (event) => {
//     setRecord(
//       countries.filter((f) =>
//         f.countryName.toLowerCase().includes(event.target.value)
//       )
//     );
//   };

//   return (
//     <div>
//       {/* <div className="d-flex mb-3"></div> */}
//       <input type="text" className="form-control" onChange={filter} />
//       <table className="table table-striped-columns">
//         <thead className="text-center">
//           <tr>
//           <th onClick={handleSort} className="country-header">
//               Country {sortOrder.direction === 'asc' ? '↑' : '↓'}
//             </th>            
//             <th>Networks</th>
//             <th>VPMN</th>
//             <th>IMSI</th>
//             <th>Data Cost per MB</th>
//             <th>Cost of 1 GB</th>
//             <th>Provider</th>
//             <th>2G</th>
//             <th>3G</th>
//             <th>4G</th>
//             <th>5G</th>
//             <th>LTE</th>
//             <th>LTE_M</th>
//             <th>NB_IoT</th>
//             <th>Notes</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {record.map((country) => {
//             return (
//               <tr key={country._id}>
//                 <td>{country.countryName}</td>
//                 <td>{country.network}</td>
//                 <td>{country.vpmn}</td>
//                 <td>{country.imsi}</td>
//                 <td>{country.dataCostPerMB}</td>
//                 <td>{country.dataCostPerMB * 1024}</td>
//                 <td>{country.provider}</td>
//                 <td>{country._2G}</td>
//                 <td>{country._3G}</td>
//                 <td>{country._4G}</td>
//                 <td>{country._5G}</td>
//                 <td>{country.lte}</td>
//                 <td>{country.lte_m}</td>
//                 <td>{country.nb_iot}</td>
//                 <td>{country.note}</td>
//               </tr>
//             );
//           })}
//            <tr>
//             <td colSpan="16">
//             <Link to="/price">
//               <button className="next">Next</button>
//             </Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CountrySearch;
