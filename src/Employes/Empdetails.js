import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = `http://localhost:8000/employee`;
function Empdetails() {
  let { emid } = useParams();
  console.log(emid, "333");
  const [employedata, setemployedata] = useState({});

  useEffect(() => {
    getresult();
  }, []);

  const getresult = async () => {
    const getnew = await axios.get(`${API_URL}/${emid}`);
    setemployedata(getnew.data);
  };

  return (
    <>
      <div className="container">
        <table id="customers">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{employedata.id}</td>
            <td>{employedata.name}</td>
            <td>{employedata.email}</td>
            <td>{employedata.phone}</td>
            <td>{employedata.active ? "active" : "Inactive"}</td>
          </tr>
        </table>
        <Link to={"/"}>
          <button className="btn btn-primary mt-3"> Back</button>
        </Link>
      </div>
    </>
  );
}

export default Empdetails;
