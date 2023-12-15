class EmployeeDTO {
    static mapEmployeeData(reqBody) {
      return {
        FirstName: reqBody.FirstName,
        SecondName: reqBody.SecondName,
        Email: reqBody.Email,
        Phone: reqBody.Phone,
      };
    }
  }
  
  module.exports = EmployeeDTO;
  