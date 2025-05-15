const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Schema & Model
const userSchema = new mongoose.Schema({
  Month: String,
  Season: String,
  Budget: String,
  Temperature: Number,
  Weather: String,
  Activity_Preference: String,
  Group_Size: Number,
  Suggested_Place: String,
});

const User = mongoose.model("User", userSchema, "places");

// GET: Fetch all user travel data
app.get("/getUserData", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ data: users });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

// POST: Add new user travel data
app.post("/addUserData", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User data added successfully!" });
  } catch (error) {
    console.error("Error adding user data:", error);
    res.status(500).json({ error: "Failed to add user data" });
  }
});

// NEW: POST to forward prediction request to Flask
app.post("/predict", async (req, res) => {
  try {
    const flaskResponse = await axios.post("http://localhost:5000/predict", req.body);
    res.json(flaskResponse.data);
  } catch (error) {
    console.error("Prediction error:", error.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
