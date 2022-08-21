import React, { Component } from 'react';

class Employee extends Component {
    state = { 
        ID:this.props.employee.ID,
        Name:this.props.employee.Name,
        Age:this.props.employee.Age,
        Salary:this.props.employee.Salary,
        Department:this.props.employee.Department,
     } 
     changeHandler = (e) =>{
        this.setState({
          [e.target.name] : e.target.value,
        })
        console.log(this.state.Name);
      }
    render() { 
        return (
            <tr>
                <td>{this.state.ID}</td>
                <td><input type="text" value={this.state.Name} onChange={this.changeHandler} name="Name"/></td>
                <td><input type="number" value={this.state.Age} onChange={this.changeHandler} name="Age"/></td>
                <td><input type="number" value={this.state.Salary} onChange={this.changeHandler} name="Salary"/></td>
                <td><input type="text" value={this.state.Department} onChange={this.changeHandler} name="Department"/></td>
                <td onClick={()=>this.props.deleteEmployee(this.state.ID)}><i className="fa-solid fa-trash fa-2x text-danger"></i></td>
                <td onClick={()=>this.props.editEmployee({ID:this.state.ID, Name:this.state.Name, Age:this.state.Age, Salary:this.state.Salary, Department:this.state.Department} ,this.props.index)}><i className="fa-solid fa-pen-to-square fa-2x text-primary"></i></td>
            </tr>
        );
    }
}
 
export default Employee;