// // import React, { useEffect, useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./CountriesTable.css";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { FaSearch } from "react-icons/fa";
// // import { sortData } from "../sortData"; 
// // import depimg from "../../images/depimg.png"


// // const CountriesTable = () => {
// //   const [countries, setCountries] = useState([]);
// //   const [sortOrder, setSortOrder] = useState({
// //     column: "countryName",
// //     direction: "asc",
// //   });
// //   const [userData, setUserData] = useState();

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/")
// //       .then((result) => setCountries(result.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/home", {
// //       method: "POST",
// //       crossDomain: true,
// //       headers: {
// //         "Content-Type": "application/json",
// //         Accept: "application/json",
// //         "Access-Control-Allow-Origin": "*",
// //       },
// //       body: JSON.stringify({ token: window.localStorage.getItem("token") }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data, "userData");
// //         setUserData({ userData: data.data });
// //         if (data.data === "Token Expired") {
// //           alert("Token Expired");
// //           window.localStorage.clear();
// //           window.location.href = "/";
// //         }
// //       });
// //   }, []);

// //   const handleDelete = (id) => {
// //     const confirmDelete = window.confirm("Are you sure you want to delete?");
// //     if (confirmDelete) {
// //       axios
// //         .delete("http://localhost:5000/delete/" + id)
// //         .then((resulte) => {
// //           console.log(resulte);
// //           window.location.reload();
// //         })
// //         .catch((err) => console.log(err));
// //     }
// //   };

// //   const logout = () => {
// //     window.localStorage.clear();
// //     window.location.href = "/";
// //   };


// //   return (
// //     <div>
// //       <div className="all2">
// //         <Link to='/'>
// //           <img className="depimg2" src={depimg} alt="Department Image" />
// //         </Link>
// //         <div className="all">
// //           <Link to="/register" className="button-18">
// //             Add User
// //           </Link>
// //           <button onClick={logout} type="submit" className="button-17">
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //       <div>
// //         <Link to="/create" className="button-19">
// //           <p className="button-19-txt"> Add Country</p>
// //         </Link>
// //         <Link to='/search'>
// //           <button className="button-20">
// //             Search for
// //             <span class="first"></span>
// //             <span class="second"></span>
// //             <span class="third"></span>
// //             <span class="fourth"></span>
// //           </button>
// //         </Link>
// //       </div>
  

// //     {/* Render as table on large screens */}
// //       <table className="table table-striped-columns d-none d-md-table">
// //         <thead className="text-center">
// //           <tr>
// //             <th onClick={() => setSortOrder({ column: "countryName", direction: sortOrder.direction === "asc" ? "desc" : "asc" })} className="country-header">
// //               Country {sortOrder.direction === 'asc' ? '↑' : '↓'}
// //             </th>
// //             <th>Networks</th>
// //             <th>VPMN</th>
// //             <th><strong>IMSI</strong></th>
// //             <th><strong>Data Cost per MB</strong></th>
// //             <th><strong>Cost of 1 GB</strong></th>
// //             <th>Provider</th>
// //             <th><strong>2G</strong></th>
// //             <th><strong>3G</strong></th>
// //             <th><strong>4G</strong></th>
// //             <th><strong>5G</strong></th>
// //             <th><strong>LTE</strong></th>
// //             <th><strong>LTE_M</strong></th>
// //             <th><strong>NB_IoT</strong></th>
// //             <th>Notes</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="text-center">
// //           {countries && sortData(countries, sortOrder).map((country) => (
// //             <tr key={country._id}>
// //               <td>{country.countryName}</td>
// //               <td>{country.network}</td>
// //               <td>{country.vpmn}</td>
// //               <td>{country.imsi}</td>
// //               <td>{country.dataCostPerMB}</td>
// //               <td>{country.dataCostPerMB * 1024}</td>
// //               <td>{country.provider}</td>
// //               <td>{country._2G}</td>
// //               <td>{country._3G}</td>
// //               <td>{country._4G}</td>
// //               <td>{country._5G}</td>
// //               <td>{country.lte}</td>
// //               <td>{country.lte_m}</td>
// //               <td>{country.nb_iot}</td>
// //               <td>{country.note}</td>
// //               <td>
// //                 <div className="btn-container">
// //                   <button
// //                     onClick={() => handleDelete(country._id)}
// //                     className="btn custom-btn btn-danger mr-2"
// //                   >
// //                     Delete
// //                   </button>
// //                   <Link to={`/update/${country._id}`}>
// //                     <button type="button" className="btn btn-info">
// //                       Edit
// //                     </button>
// //                   </Link>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //    {/* Render as cards on small screens */}
// // <div className="country-cards-container d-lg-none">
// //   {countries &&
// //     sortData(countries, sortOrder).map((country) => (
// //       <div className="country-card" key={country._id}>
// //         <div className="card">
// //           <div className="card-body">
// //             {/* Card content */}
// //             <h5 className="card-title">{country.countryName}</h5>
// //             {/* Other details */}
// //             <div className="card-text">
// //               <b> IMSI:</b> {country.imsi}
// //               <br />
// //               <b> Technologies:</b>
// //               <div style={{ width: "100%", wordBreak: "break-all" }}>
// //                 {getTechnologies(country)} <br />
// //               </div>
// //               <b>Provider:</b> {country.provider} <br />
// //               <b> VPMN:</b> {country.vpmn}
// //               <br />
// //               <b>Data Cost per MB:</b> {country.dataCostPerMB}
// //               <br />
// //               <b> Cost of 1 GB:</b> {country.dataCostPerMB * 1024}
// //               <br />
// //               <b>Notes:</b> {country.note}
// //               <br />
// //             </div>
// //             {/* Buttons */}
// //             <div className="d-flex justify-content-between">
// //               <button
// //                 onClick={() => handleDelete(country._id)}
// //                 className="btn custom-btn btn-danger"
// //                 style={{ width: "70px" }}
// //               >
// //                 Delete
// //               </button>
// //               <Link to={`/update/${country._id}`}>
// //                 <button
// //                   type="button"
// //                   className="btn btn-info"
// //                   style={{ width: "70px", marginTop: "20px" , marginLeft:"-250px" }}
// //                 >
// //                   Edit
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     ))}
// // </div>

// //     </div>
// //   );
// // };

// // const getTechnologies = (country) => {
// //   let technologies = [];
// //   if (country._2G) technologies.push(`2G`);
// //   if (country._3G) technologies.push(`3G`);
// //   if (country._4G) technologies.push(`4G `);
// //   if (country._5G) technologies.push(`5G `);
// //   if (country.lte_m) technologies.push(`LTE-M`);
// //   if (country.nb_iot) technologies.push(`NB-IoT`);
// //   return technologies.join(", ");
// // };

// // export default CountriesTable;



// // import React, { useEffect, useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./CountriesTable.css";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { FaSearch } from "react-icons/fa";
// // import { sortData } from "../sortData"; 
// // import depimg from "../../images/depimg.png"

// // const CountriesTable = () => {
// //   const [countries, setCountries] = useState([]);
// //   const [sortOrder, setSortOrder] = useState({
// //     column: "countryName",
// //     direction: "asc",
// //   });
// //   const [userData, setUserData] = useState();

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/")
// //       .then((result) => setCountries(result.data))
      
// //       .catch((err) => console.log(err));
// //   }, []);
// //   console.log(countries)
// //   useEffect(() => {
// //     fetch("http://localhost:5000/home", {
// //       method: "POST",
// //       crossDomain: true,
// //       headers: {
// //         "Content-Type": "application/json",
// //         Accept: "application/json",
// //         "Access-Control-Allow-Origin": "*",
// //       },
// //       body: JSON.stringify({ token: window.localStorage.getItem("token") }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data, "userData");
// //         setUserData({ userData: data.data });
// //         if (data.data === "Token Expierd") {
// //           alert("Token Expierd");
// //           window.localStorage.clear();
// //           window.location.href = "/";
// //         }
// //       });
// //   }, []);

// //   const handleDelete = (id) => {
// //     const confirmDelete = window.confirm("Are you sure you want to delete?");
// //     if (confirmDelete) {
// //       axios
// //         .delete("http://localhost:5000/delete/" + id)
// //         .then((resulte) => {
// //           console.log(resulte);
// //           window.location.reload();
// //         })
// //         .catch((err) => console.log(err));
// //     }
// //   };

// //   const logout = () => {
// //     window.localStorage.clear();
// //     window.location.href = "/";
// //   };

// //   return (
 
// //     <div>
// //       <div className="all2">
// //         <Link to='/'>
// //         <img className="depimg2" src={depimg}></img>
// //         </Link>
// //         <div className="all">
        
// //         <Link to="/register" className="button-18">
// //           Add User
// //         </Link>
// //       <button onClick={logout} type="submit" className="button-17">
// //           Logout
// //         </button>
        
       
// //       </div>
      
// //       </div>

// //       <div className="all3">
// //       <Link to="/create" >
// //           <button className="button-20"> Add Country
// //           <span class="first"></span>
// //       <span class="second"></span>
// //       <span class="third"></span>
// //       <span class="fourth"></span>
// //       </button>
// //         </Link>
// //         <Link to='/search'>
// //         <button className="button-20">
// //       Search for
// //       <span class="first"></span>
// //       <span class="second"></span>
// //       <span class="third"></span>
// //       <span class="fourth"></span>
// //     </button>
// //     </Link>
// //       </div>


// //       <table className="table table-striped-columns">
// //         <thead className="text-center">
// //           <tr>
// //             <th onClick={() => setSortOrder({ column: "countryName", direction: sortOrder.direction === "asc" ? "desc" : "asc" })} className="country-header">
// //               Country {sortOrder.direction === 'asc' ? '↑' : '↓'}
// //             </th>
// //             <th>Networks</th>
// //             <th>IMSI</th>
// //             <th>Data Cost per MB</th>
// //             <th>Cost of 1 GB</th>
// //             <th>Provider</th>
// //             <th>2G</th>
// //             <th>3G</th>
// //             <th>4G</th>
// //             <th>5G</th>
// //             {/* <th>LTE</th> */}
// //             <th>LTE_M</th>
// //             <th>NB_IoT</th>
// //             <th>VPMN</th>
// //             <th>Notes</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="text-center">
// //           {countries && sortData(countries, sortOrder).map((country) => (
// //             <tr key={country._id}>
// //               <td>{country.countryName}</td>
// //               <td>{country.network}</td>
// //               <td>{country.imsi}</td>
// //               <td>{country.dataCostPerMB}</td>
// //               <td>{country.dataCostPerMB * 1024}</td>
// //               <td>{country.provider}</td>
// //               <td>{country._2G}</td>
// //               <td>{country._3G}</td>
// //               <td>{country._4G}</td>
// //               <td>{country._5G}</td>
// //               {/* <td>{country.lte}</td> */}
// //               <td>{country.lte_m}</td>
// //               <td>{country.nb_iot}</td>
// //               <td>{country.vpmn}</td>
// //               <td>{country.note}</td>
// //               <td>
// //                 <div className="btn-container">
// //                   <button
// //                     onClick={() => handleDelete(country._id)}
// //                     className="btn custom-btn btn-danger mr-2"
// //                   >
// //                     Delete
// //                   </button>
// //                   <Link to={`/update/${country._id}`}>
// //                     <button type="button" className="btn btn-info">
// //                       Edit
// //                     </button>
// //                   </Link>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default CountriesTable;


import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountriesTable.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import depimg from "../../images/depimg.png";
import { sortData } from "../sortData";

const CountriesTable = () => {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: "countryName",
    direction: "asc",
  });
  const [showMenu, setShowMenu] = useState(false); // State variable to manage side menu drawer visibility

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => setCountries(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      axios
        .delete("http://localhost:5000/delete/" + id)
        .then((resulte) => {
          console.log(resulte);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the visibility of the side menu drawer
  };

  return (
    <div>
      <div className="all2">
        <Link to='/'>
          <img className="depimg6" src={depimg} alt="Department" />
        </Link>
        {/* Side menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        {/* Side menu drawer */}
         {showMenu && (
          <div className="side-menu">
            <div className="all-sidemenu">
              <div style={{padding:4}}>
            <Link to="/register" className="button-18">
              Add User
            </Link>
            </div>
            <div style={{padding:4}}>
            <Link to="/create" className="button-18">
              Add Country
            </Link>
            </div>
            <div style={{padding:4}}>
            <button onClick={logout} type="submit" className="button-17">
              Logout
            </button>
            </div>
            </div>
          </div>
        )} 
      </div>

      <div className="all3">
        <Link to='/search'>
          <button className="button-20">
            Search Country
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </Link>
        <Link to='/price'>
          <button className="button-20"> Calculate
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </Link>
      </div>

      <table className="table table-striped-columns">
        <thead className="text-center">
          <tr>
            <th onClick={() => setSortOrder({ column: "countryName", direction: sortOrder.direction === "asc" ? "desc" : "asc" })} className="country-header">
              Country {sortOrder.direction === 'asc' ? '↑' : '↓'}
            </th>
            <th>Networks</th>
            <th>IMSI</th>
            <th>Data Cost per MB</th>
            <th>Cost of 1 GB</th>
            <th>Provider</th>
            <th>2G</th>
            <th>3G</th>
            <th>4G LTE</th>
            <th>5G</th>
            <th>LTE_M</th>
            <th>NB_IoT</th>
            <th>VPMN</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {countries && sortData(countries, sortOrder).map((country) => (
            <tr key={country._id}>
              <td>{country.countryName}</td>
              <td>{country.network}</td>
              <td>{country.imsi}</td>
              <td>{country.dataCostPerMB}</td>
              <td>{country.dataCostPerMB * 1024}</td>
              <td>{country.provider}</td>
              <td>{country._2G}</td>
              <td>{country._3G}</td>
              <td>{country._4G}</td>
              <td>{country._5G}</td>
              <td>{country.lte_m}</td>
              <td>{country.nb_iot}</td>
              <td>{country.vpmn}</td>
              <td>{country.note}</td>
              <td>
                <div className="btn-container">
                  <button
                    onClick={() => handleDelete(country._id)}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountriesTable;
