const express = require("express");
const mongoose = require("mongoose"); // Add this line
const cors = require("cors");
const EmployeeDAO = require("./employeeDAO");
const EmployeeDTO = require("./employeeDTO");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/employee-management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

// Call the connectToMongoDB function
connectToMongoDB();

app.get("/employee", async (req, res) => {
  const employeeList = await EmployeeDAO.getAllEmployees();
  res.json(employeeList);
});

app.post("/employee/new", async (req, res) => {
  const employeeData = EmployeeDTO.mapEmployeeData(req.body);
  const newEmployee = await EmployeeDAO.createEmployee(employeeData);
  res.json(newEmployee);
});

app.delete("/employee/delete/:id", async (req, res) => {
  const result = await EmployeeDAO.deleteEmployeeById(req.params.id);
  res.json(result);
});

app.get("/employee/complete/:id", async (req, res) => {
  const employee = await EmployeeDAO.getEmployeeById(req.params.id);
  res.json(employee);
});

app.put("/employee/update/:id", async (req, res) => {
  const updatedEmployee = await EmployeeDAO.updateEmployeeById(req.params.id, req.body);

  if (!updatedEmployee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(updatedEmployee);
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
