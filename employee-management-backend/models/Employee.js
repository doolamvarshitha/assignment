const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  attendance: [{ date: { type: Date, default: Date.now }, status: { type: String, enum: ['Present', 'Absent'], default: 'Present' } }]
});

module.exports = mongoose.model('Employee', employeeSchema);
