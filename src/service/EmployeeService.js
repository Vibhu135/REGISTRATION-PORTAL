import axios from 'axios';
const EMPLOYEE_BASE_URL="http://employeemangtbackendnew1-env.eba-tf9huviw.us-east-1.elasticbeanstalk.com/api/v1/employee";  
const EMPLOYEE_BASE_URL_EBS="http://employeemangtbackendnew1-env.eba-tf9huviw.us-east-1.elasticbeanstalk.com/api/v1/employee";  

class EmployeeService {

    getAllEmployee()
    {
      return axios.get(EMPLOYEE_BASE_URL) ; 
    }
    createEmployee(employee)
    {
      return axios.post(EMPLOYEE_BASE_URL,employee) ; 
    }
    getEmployeeById(employeeId){
      return axios.get(EMPLOYEE_BASE_URL+'/'+employeeId);
    }

    updateEmployee(employee,employeeId)
    {
      return axios.put(EMPLOYEE_BASE_URL+'/'+ employeeId,employee);
    }
    deleteEmployee(employeeId)
    {
      return axios.delete(EMPLOYEE_BASE_URL+'/'+ employeeId);
    }
}

export default new EmployeeService();