import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Home from "./Home";
import Edit from "./Edit";
import Add from "./Add";
import Nav from './Nav';
import NotFound from "./NotFound";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      id:-1,
      confirmDelete:false,
    };
  }
  getEmployees = async () =>{
   const {data} = await axios.get('http://localhost:3000/employees');
   this.setState({employees:data});
  }
  addEmployeeHandler = async (newEmployee) => {
    // let employees = [...this.state.employees ,newEmployee];
    // this.setState({employees});
    await axios.post('http://localhost:3000/employees', newEmployee);
    this.getEmployees();
  }
  deleteHandler = (id) => {
    this.setState({
      confirmDelete:true, 
      id,
    })
  }
  cancelDeleteConfirm = () =>{
    this.setState({confirmDelete:false})
  }
  deleteConfirmHandler = async () => {
    // let employees = this.state.employees.filter((employee)=> employee.id !== this.state.id);
    // let searchEmployees = this.state.searchEmployees.length? this.state.searchEmployees.filter((employee) => employee.id !== this.state.id): this.state.searchEmployees;
    // this.setState({
    //   employees,
    //   searchEmployees,
    // });
    await axios.delete(`http://localhost:3000/employees/${this.state.id}`)
    this.getEmployees();
    this.cancelDeleteConfirm();
  }
  editHandler = async (newEmployee) => {
    //get employees array form state 
    let employees = this.state.employees;
    let employee = employees.filter(employee=> employee.id === newEmployee.id)[0];
    let index = employees.indexOf(employee);
    // update the employee using the passing index
    employees[index] = newEmployee;
    //update the employees state
    this.setState({employees});
    await axios.put(`http://localhost:3000/employees/${newEmployee.id}`, newEmployee);
  }
  changeHandler = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  allHandler = ()=>{
    let search = false;
    this.setState({search});
  }
  async componentDidMount(){
    this.getEmployees();
  }
  render() {
      return (
        <React.Fragment>
          <Nav/>
          <Switch>
            <Route path="/add" render={props=>(
                <Add  
                  id={this.state.employees[this.state.employees.length-1].id+1} 
                  addEmployee={this.addEmployeeHandler}
                  {...props}
                />
              )} />
              <Route path="/edit/:id" render={props=>(
                <Edit 
                  employees={this.state.employees}
                  onEdit={this.editHandler}
                  getEmployees={this.getEmployees}
                  {...props}
                />
              )}/>
              <Route path="/home" render={props=>(
                <Home
                  employees={this.state.employees}
                  confirmDelete={this.state.confirmDelete}
                  deleteHandler={this.deleteHandler}
                  cancelDeleteConfirm={this.cancelDeleteConfirm}
                  deleteConfirmHandler={this.deleteConfirmHandler}
                  editHandler={this.editHandler}
                  changeHandler={this.changeHandler}
                  allHandler={this.allHandler}
                  {...props}
                />
              )}/>
            <Route path="/NotFound" component={NotFound}/>
            <Redirect to="/NotFound"/>  
          </Switch>
        </React.Fragment>
      );
  }
}