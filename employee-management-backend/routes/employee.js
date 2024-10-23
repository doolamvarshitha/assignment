const express = require('express');
const Employee = require('../models/Employee');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create an employee
router.post('/', authMiddleware, async (req, res) => {
  if (req.userRole !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

// Get all employees
router.get('/', authMiddleware, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Update an employee
router.put('/:id', authMiddleware, async (req, res) => {
  if (req.userRole !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
});

// Delete an employee
router.delete('/:id', authMiddleware, async (req, res) => {
  if (req.userRole !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  await Employee.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
