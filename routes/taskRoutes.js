// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Base path: /api/tasks (this is assumed to be set in server.js)
router.get('/', getTasks);            // GET /api/tasks
router.post('/', createTask);         // POST /api/tasks
router.put('/:id', updateTask);       // PUT /api/tasks/:id
router.delete('/:id', deleteTask);    // DELETE /api/tasks/:id

module.exports = router;
