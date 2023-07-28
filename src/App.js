import "./App.css";
import { toast, ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import EmpLitsing from "./Employes/EmpLitsing";
import Emcreate from "./Employes/Emcreate";
import Empedit from "./Employes/Empedit";
import Empdetails from "./Employes/Empdetails";

function App() {
  return (
    <>
      <ToastContainer />
      <h1 className="text-center">React Employee Details</h1>
      <div className="main d-none">
        <h2 className="main-header">React Crud Operations</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Read />} />
            <Route path="/create" element={<Create />} />

            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpLitsing />}></Route>
          <Route path="/employee/create" element={<Emcreate />}></Route>
          <Route path="/employee/edit/:emid" element={<Empedit />}></Route>
          <Route
            path="/employee/details/:emid"
            element={<Empdetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
