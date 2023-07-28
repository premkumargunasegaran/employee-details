import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Emcreate() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [active, setactive] = useState(true);
  const [validate, setvalidate] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      const empData = { id, name, email, phone, active };
      fetch("http://localhost:8000/employee", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empData),
      })
        .then((res) => {
          console.log("posting Success");
          navigate("/");
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-success">Add Employee Details</h2>
      <div className="container">
        <div className="card  p-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Id
                  </label>
                  <input
                    type="text"
                    value={id}
                    className="form-control"
                    id="id"
                    disabled
                  />
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onMouseDown={(e) => {
                      setvalidate(true);
                    }}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    aria-describedby="emailHelp"
                  />
                  {name.length == 0 && validate && (
                    <span className="text-danger">Please Enter Name</span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    id="email"
                    onMouseDown={(e) => {
                      setvalidate(true);
                    }}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  {email.length == 0 && validate && (
                    <span className="text-danger">Please Email </span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="Number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Number"
                    value={phone}
                    onMouseDown={(e) => {
                      setvalidate(true);
                    }}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                  />
                  {phone.length == 0 && validate && (
                    <span className="text-danger">Please Enter Mobile </span>
                  )}
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Active"
                    checked={active}
                    onChange={() => {
                      setactive(!active);
                    }}
                  />
                  <label className="form-check-label" htmlFor="Active">
                    Active
                  </label>
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>

                <Link to={"/"}>
                  <button
                    type="button"
                    className="btn btn-danger text-white ms-3"
                  >
                    Back
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emcreate;
