const Employee = require("./models/EmployeeList");

class EmployeeDAO {
  static async getAllEmployees() {
    return await Employee.find();
  }

  static async createEmployee(employeeData) {
    const employee = new Employee(employeeData);
    await employee.save();
    return employee;
  }

  static async deleteEmployeeById(employeeId) {
    const result = await Employee.findByIdAndDelete(employeeId);
    return { result };
  }

  static async getEmployeeById(employeeId) {
    return await Employee.findById(employeeId);
  }

  static async updateEmployeeById(employeeId, updatedData) {
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return null; // Handle the case where the employee is not found
    }

    employee.FirstName = updatedData.FirstName;
    employee.SecondName = updatedData.SecondName;
    employee.Email = updatedData.Email;
    employee.Phone = updatedData.Phone;

    await employee.save();
    return employee;
  }
}

module.exports = EmployeeDAO;
