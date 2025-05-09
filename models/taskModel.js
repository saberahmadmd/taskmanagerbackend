const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'In-Progress', 'Completed'],
    default: 'Pending'
  },
  due_date: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
