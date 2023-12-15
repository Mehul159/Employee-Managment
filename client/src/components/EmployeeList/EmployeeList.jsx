import React from "react";
import "./EmployeeList.css";
import { FaWindowClose } from "react-icons/fa";

import { useEffect, useState } from "react";
const api_base = "http://localhost:3002";

function EmployeeList() {
  const [Employees, setEmployees] = useState([]);

  useEffect(() => {
    GetEmployees();
  }, []);

  const GetEmployees = () => {
    fetch(api_base + "/employee")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error: ", err));
  };

  const deleteemployees = async (id) => {
    const data = await fetch(api_base + "/employee/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setEmployees((Employees) =>
      Employees.filter((employees) => employees._id !== data.result._id)
    );
  };

  return (
    <div className="employee-list-section">
      <div className="employee-list">
        <h2>Current Employees</h2>

        {Employees.length > 0 ? (
          Employees.map((employees) => (
            <div
              className={
                "employee" + (employees.complete ? " is-complete" : "")
              }
              key={employees._id}
            >
              <div className="employee-details">
                <p className="name">
                  {employees.FirstName} {employees.SecondName}
                </p>
                <p className="email">{employees.Email}</p>
                <p className="phone">{employees.Phone}</p>
              </div>

              <div
                className="delete-employee"
                onClick={() => deleteemployees(employees._id)}
              >
                <FaWindowClose size={25} />
              </div>
            </div>
          ))
        ) : (
          <p>You currently have no employees</p>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
