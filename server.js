const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

// ✅ Update allowed frontend origins here
const allowedOrigins = [
  'http://localhost:3000',
  'https://taskmanagerfrontend-tan.vercel.app',
  'https://taskmanagerfrontend-git-main-md-saber-ahmads-projects.vercel.app',
  'https://taskmanagerfrontend-md-saber-ahmads-projects.vercel.app', // 👈 this is important!
];

// ✅ Proper CORS config
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ✅ Place this BEFORE your routes
// Example route
app.get('/api/test', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Routes
app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
