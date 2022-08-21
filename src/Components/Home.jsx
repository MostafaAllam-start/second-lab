import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import DeleteConfirmation from "./DeleteConfirmation";
import Employee from "./Employee";
import Nav from './Nav';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      Count : 6, 
      employees: [
        { ID: 1, Name: "Ahmed", Age: 20, Department: "PD", Salary: 6000},
        { ID: 2, Name: "Nadia", Age: 22, Department: "OS", Salary: 3000},
        { ID: 3, Name: "Eman", Age: 23, Department: "PD", Salary: 4000},
        { ID: 4, Name: "Ahmed", Age: 20, Department: "OS", Salary: 5000},
        { ID: 5, Name: "Nasr", Age: 20, Department: "PD", Salary: 6000},
      ],
      searchEmployees:[],
      search: false,
      ID:-1,
      confirmDelete:false,
    };
  }
  addEmployeeHandler = (newEmployee) => {
    let employees = [...this.state.employees ,newEmployee];
    let Count = this.state.Count + 1;
    this.setState({employees, Count});

  }
  deleteHandler = (ID) => {
    this.setState({
      confirmDelete:true, 
      ID,
    })
  }
  cancelDeleteConfirm = () =>{
    console.log(this.state.confirmDelete);
    this.setState({confirmDelete:false})
  }
  deleteConfirmHandler = () => {
    let employees = this.state.employees.filter((employee)=> employee.ID !== this.state.ID);
    let searchEmployees = this.state.searchEmployees.length? this.state.searchEmployees.filter((employee) => employee.ID !== this.state.ID): this.state.searchEmployees;
    this.setState({
      employees,
      searchEmployees,
    });
    this.cancelDeleteConfirm();
  }
  editHandler = (employee, index) => {
    // get employees array form state 
    let employees = this.state.employees;
    // update the employee using the passing index
    employees[index] = employee;
    //update the employees state
    this.setState({employees});
    console.log(employee)
  }
  changeHandler = (e) =>{
    console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  searchHandler = (data) => {
    let search = true;
    data = Number(data)? Number(data):data;
    let searchEmployees = this.state.employees.filter((employee) => Object.values(employee).includes(data));
    this.setState({searchEmployees, search});
  }
  allHandler = ()=>{
    let search = false;
    this.setState({search});
  }
  render() {

    return (
      <React.Fragment>
        <Nav searchHandler={this.searchHandler}/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope='col'>Salary</th>
              <th scope='col'>Department</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.search ?
                (this.state.searchEmployees.length === 0?
                    <tr><td colSpan="7" className="text-center text-warning">oopps! we can't find such employee.</td></tr>
                  :
                  
                  this.state.searchEmployees.map((employee, index) =>{
                    return(
                      <Employee key={employee.ID} employee={employee} index={index} deleteEmployee={this.deleteHandler} editEmployee={this.editHandler}/>
                      )
                    })
                  )
              
              :
                this.state.employees.map((employee, index) =>{
                  return(
                    <Employee key={employee.ID} employee={employee} index={index} deleteEmployee={this.deleteHandler} editEmployee={this.editHandler}/>
                  )
                })
                
              
            }
          </tbody>
        </table>
        <input type={"button"} value="Show All" className="btn btn-primary d-block mx-auto" style={{width:'100px'}} onClick={this.allHandler} />
        <AddEmployee  Count={this.state.Count} addEmployee={this.addEmployeeHandler}/>
        <DeleteConfirmation onConfirm={this.deleteConfirmHandler} onCancel={this.cancelDeleteConfirm} confirm={this.state.confirmDelete}/>
      </React.Fragment >
    );
    
  }
}

export default Home;
