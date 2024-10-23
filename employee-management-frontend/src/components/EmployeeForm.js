import React, { useState } from 'react';
import { createEmployee } from '../api';
import { useHistory } from 'react-router-dom';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee({ name, email, position, salary });
      history.push('/employees');
    } catch (error) {
      console.error('Error creating employee', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
      <input type="number" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
