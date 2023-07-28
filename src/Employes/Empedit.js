import { React, useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = `http://localhost:8000/employee`;
function Empedit() {
  let { emid } = useParams();
  const navigate = useNavigate();

  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [active, setactive] = useState(true);

  const [employedata, setemployedata] = useState([]);
  useEffect(() => {
    getresult();
  }, []);

  const getresult = async () => {
    const getnew = await axios.get(`${API_URL}/${emid}`);
    setid(getnew.data.id);
    setname(getnew.data.name);
    setemail(getnew.data.email);
    setphone(getnew.data.phone);
    setactive(getnew.data.active);
  };
  const editedData = { id, name, email, phone, active };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editedData);
    navigate("/");
    axios.put("http://localhost:8000/employee/" + emid, editedData);
  };
  return (
    <div>
      <div className="container">
        <div className="card  p-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={id}
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
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    className="form-control"
                    id="Number"
                  />
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

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
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

export default Empedit;
