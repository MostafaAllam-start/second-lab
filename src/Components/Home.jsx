import React, { Component } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import Employee from "./Employee";
import Search from './Search';
class Home extends Component {
  state = {  
    search:"",
    searchEmployees:[],
    sreachEmployee:false
  } 
  changeHandler = (e) => {
    if(e.target.value === "")
      this.setState({searchEmployee:false});
    this.setState({
        [e.target.name]: e.target.value,
    })  
  }
  keyDownHandler = e =>{
    console.log(this.state.search);
    if(e.key === 'Enter' && this.state.search){
      const searchEmployees = this.props.employees.filter((employee) => Object.values(employee).includes(this.state.search) || Object.values(employee).includes(Number(this.state.search)));
      this.setState({searchEmployee:true, searchEmployees});
    }
  }
  display = () => {
    return(
      this.state.searchEmployee?
      <Search 
        searchEmployees={this.state.searchEmployees}
        deleteEmployee={this.props.deleteHandler}
        editEmployee={this.props.editHandler}/>
      :
      this.props.employees.map((employee) => <Employee key={employee.id} employee={employee} deleteEmployee={this.props.deleteHandler} editEmployee={this.props.editHandler}/>)
    );
  }
  render() {
    return (
      <React.Fragment>    
        <div className="d-flex" role="search">
            <input className="form-control me-2" type="text" placeholder="Search" name="search" onChange={this.changeHandler} onKeyDown={this.keyDownHandler}/>
            <button className="btn btn-outline-success" 
            onClick={() => this.props.history.push('/add')}>Add Employee</button>
        </div>    
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
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
              this.display()
            }
          </tbody>
        </table>      
        <DeleteConfirmation onConfirm={this.props.deleteConfirmHandler} onCancel={this.props.cancelDeleteConfirm} confirm={this.props.confirmDelete}/>
      </React.Fragment >
    );
    
  }
}

export default Home;
