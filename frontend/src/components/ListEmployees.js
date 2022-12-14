import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ListEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
        employees: []
    }

    this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  addEmployee() {
    this.props.history('/add-employee');
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            
            <thead>
              <tr>
                <th>Employee EmailID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.employees.map(
                  employee => 
                  <tr key={employee.id}>
                    <td> {employee.emailId} </td>
                    <td> {employee.firstName} </td>
                    <td> {employee.lastName} </td>
                  </tr>
                )
              }
            </tbody>

          </table>
        </div>
      </div>
    )
  }

}