import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees/";

class EmployeeService {

    //GET method
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //POST method
    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}

export default new EmployeeService()
//export new object of this class.