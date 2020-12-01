import React, { useEffect, useState, useMemo } from "react";

import EmployeesTable from "../UI/EmployeesTable";

import "./PagesUI.css";

const DirectoryPage = () => {
  const [employees, setEmployees] = useState([]);

  const columns = useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Address", accessor: "address" },
      { Header: "Phone Number", accessor: "phoneNumber" },
      { Header: "Email", accessor: "email" },
    ],
    []
  );

  useEffect(() => {
    const employeesUrl = "http://localhost:4000/api/v1/employees";
    fetch(employeesUrl)
      .then((resp) => resp.json())
      .then((employees) => {
        setEmployees(employees);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {employees.length === 0 ? null : (
        <EmployeesTable columns={columns} data={employees} />
      )}
    </div>
  );
};

export default DirectoryPage;
