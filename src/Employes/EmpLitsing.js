import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function EmpLitsing() {
  const [empData, setempData] = useState(null);
  const navigate = useNavigate();
  const edit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const deleteItem = (id) => {
    if (window.confirm("Do You Want to remove ?")) {
      axios.delete("http://localhost:8000/employee/" + id);
      getItem();
    }
  };

  const details = (id) => {
    navigate("/employee/details/" + id);
  };

  const getItem = () => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setempData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="container">
      <div className="card  ">
        <div className="card-title">
          <h2 className="text-center">Employee Listing</h2>
          <div>
            {" "}
            <Link
              to={"/employee/create"}
              className="btn btn-success float-right me-2"
            >
              {" "}
              Add {"+"}
            </Link>
          </div>
        </div>
        <div className="card-body ">
          <table className="table table-bodered">
            <thead className=" text-white">
              <tr>
                <td className="bg-dark  text-light">ID</td>
                <td className="bg-dark text-light">Name</td>
                <td className="bg-dark text-light"> Email</td>
                <td className="bg-dark text-light">Phone</td>
                <td className="bg-dark text-light">Action</td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            edit(item.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-3"
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            details(item.id);
                          }}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpLitsing;
