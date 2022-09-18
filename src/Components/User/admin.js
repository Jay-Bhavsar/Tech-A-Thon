import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
// import Aditem from "./aditem";
// import { MenuItems } from "../mainpage/Navbar/MenuItems";
import axios from "axios";

// import Navbar from '../mainpage/Navbar/Navbar'
// import BarChart from '../Components/BarChart'
// import PieChart from '../Components/PieChart'
import "../User/admin.css";
import Navbar from "../Navbar/Navbar";
// import { useHistory } from 'react-router-dom'

export const Admin = () => {
  const [data, setdata] = useState("");

  const getData = async () => {
    const res = await axios.get(`http://localhost:9004/api`);
    setdata(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  // const history = useHistory()
  // const stats=()=>{
  //   history.push("/adminstats")
  // }

  return (
    <div className="container3">
      {/* <Navbar/> */}
      <center><h1><i>Select the Time Slot of your Meeting</i></h1></center>
  

      {data &&
        data.map((entry) => (
          <>
            {/* <div className="container12">
            <table className="table hr">
              <tbody>
                <tr>
                  <td className="lwid">{entry.type}</td>
                  <td className="swid">{entry.month}</td>
                  <td className="swid">{entry.capacity}</td>
                  <td className="swid">{entry.production}</td>
                  <td className="swid">{entry.exports}</td>
                </tr>
              </tbody>
            </table>
          </div> */}
            <div className="meetab">
              <div className="meet">
                <h5>Meetings</h5>
                <p>{entry.capacity}</p>
                <p>{entry.production}</p>
                <p>{entry.exports}</p>
                <p>{entry.email}</p>
                <p>{entry.email1}</p>
                <p>{entry.email2}</p>
                <p>{entry.email3}</p>
                <p>{entry.email4}</p>

                <Link to="/user" className="btna">Select Time Slot</Link>


              </div>
            </div>
            
          </>
        ))}
    </div>
  );
};
