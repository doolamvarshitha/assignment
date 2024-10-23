import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../api';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetchEmployees();
      setEmployees(response.data);
    };
    getEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter(emp => emp._id !== id));
  };

  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/add-employee">Add Employee</Link>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            {employee.name} - {employee.email} - {employee.position} - ${employee.salary}
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
