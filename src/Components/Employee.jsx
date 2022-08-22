import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Employee extends Component {
    state = { 
        id:this.props.employee.id,
        Name:this.props.employee.Name,
        Age:this.props.employee.Age,
        Salary:this.props.employee.Salary,
        Department:this.props.employee.Department,
     } 
     changeHandler = (e) =>{
        this.setState({
          [e.target.name] : e.target.value,
        })
      }
    render() { 
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.Name}</td>
                <td>{this.state.Age}</td>
                <td>{this.state.Salary}</td>
                <td>{this.state.Department}</td>
                <td onClick={()=>this.props.deleteEmployee(this.state.id)}><i className="fa-solid fa-trash fa-2x text-danger" style={{cursor:'pointer'}}></i></td>
                <td><Link to={`edit/${this.state.id}`}><i className="fa-solid fa-pen-to-square fa-2x text-primary"></i></Link></td>
            </tr>
        );
    }
}
 
export default Employee;