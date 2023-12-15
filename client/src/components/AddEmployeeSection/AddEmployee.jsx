import React from "react";
import "./AddEmployee.css";

import { useState } from "react";
const api_base = "http://localhost:3002";

const AddEmployee = () => {
  const [Employees, setEmployees] = useState([]);
  const [newEmployeeFirstName, setnewEmployeeFirstName] = useState("");
  const [newEmployeeSecondName, setnewEmployeeSecondName] = useState("");
  const [newEmployeeEmail, setnewEmployeeEmail] = useState("");
  const [newEmployeePhone, setnewEmployeePhone] = useState("");

  const addemployees = async () => {
    const data = await fetch(api_base + "/employee/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: newEmployeeFirstName,
        SecondName: newEmployeeSecondName,
        Email: newEmployeeEmail,
        Phone: newEmployeePhone,
      }),
    }).then((res) => res.json());

    setEmployees([...Employees, data]);

    setnewEmployeeFirstName("");
    setnewEmployeeSecondName("");
    setnewEmployeeEmail("");
    setnewEmployeePhone("");
  };

  return (
    <div className="add-employee-section">
      <div className="add-employee-header">
        <p>New Employee</p>
      </div>
      <form className="form">
        <div className="single-form-entry">
          <label className="required">First Name: </label>
          <input
            type="text"
            required
            onChange={(e) => setnewEmployeeFirstName(e.target.value)}
            value={newEmployeeFirstName}
          />
        </div>
        <div className="single-form-entry">
          <label className="required">Last Name: </label>
          <input
            type="text"
            required
            onChange={(e) => setnewEmployeeSecondName(e.target.value)}
            value={newEmployeeSecondName}
          />
        </div>
        <div className="single-form-entry">
          <label className="required">Email: </label>
          <input
            type="text"
            required
            onChange={(e) => setnewEmployeeEmail(e.target.value)}
            value={newEmployeeEmail}
          />
        </div>
        <div className="single-form-entry">
          <label className="required">Phone: </label>
          <input
            type="text"
            required
            onChange={(e) => setnewEmployeePhone(e.target.value)}
            value={newEmployeePhone}
          />
        </div>
        <div className="form-buttons">
          <button className="clear-all-btn">Clear All</button>
          <button className="add-btn" onClick={addemployees}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
