// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controllers/user.controller');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.post('/register', userController.register);
app.post('/login', userController.login);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
