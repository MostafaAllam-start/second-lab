import React, { Component } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import Employee from "./Employee";
class Home extends Component {
  sate={ }
  render() {
    return (
      <React.Fragment>        
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
              this.props.employees.map((employee, index) =>{
                return(
                  <Employee key={employee.id} employee={employee} index={index} deleteEmployee={this.props.deleteHandler} editEmployee={this.props.editHandler}/>
                )
              })
            }
          </tbody>
        </table>      
        <DeleteConfirmation onConfirm={this.props.deleteConfirmHandler} onCancel={this.props.cancelDeleteConfirm} confirm={this.props.confirmDelete}/>
      </React.Fragment >
    );
    
  }
}

export default Home;
