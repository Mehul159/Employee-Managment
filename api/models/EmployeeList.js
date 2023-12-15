const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeListSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  SecondName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,  // Change the type to String for phone numbers
    default: "",  // Set a default value (an empty string in this case)
  },
});

const Employee = mongoose.model("Employee", EmployeeListSchema);

module.exports = Employee;
