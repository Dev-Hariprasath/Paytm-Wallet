const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const UserModel = require('./models/user.js');  // Renamed from EmployeeModel
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/User", { // Database name can stay as User if you'd like
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// JWT setup
const maxAge = 3 * 24 * 60 * 60; // 3 days
const createToken = (id) => {
  return jwt.sign({ id }, 'hari@$##@@$%^&$#@#$@%&^&**&^%&^', {
    expiresIn: maxAge // Token expiration time
  });
};

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword }); // Changed from EmployeeModel
    const savedUser = await newUser.save();
    const token = createToken(savedUser._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ savedUser: savedUser._id, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const user = await UserModel.findOne({ email }); // Changed from EmployeeModel
    if (!user) {
      return res.status(404).json({ error: "No record existed." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "The password is incorrect." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
