import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const fetchEmployees = () => api.get('/employees');
export const createEmployee = (employeeData) => api.post('/employees', employeeData);
export const updateEmployee = (id, employeeData) => api.put(`/employees/${id}`, employeeData);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);
