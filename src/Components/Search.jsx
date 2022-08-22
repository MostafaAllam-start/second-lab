import React, { Component } from 'react';
import Employee from './Employee';
class Search extends Component {
    data = this.props.match.params.data
    key = parseInt(this.data)? parseInt(this.data):this.data;
    state = {  
        searchEmployees : this.props.employees.filter((employee) => Object.values(employee).includes(this.key)) 
    } 
    render() { 
        console.log(this.props);
        return (
            (this.props.searchEmployees.length === 0?
                <tr><td colSpan="7" className="text-center text-warning">oopps! we can't find such employee.</td></tr>
              :
              
              this.props.searchEmployees.map((employee, index) =>{
                return(
                  <Employee key={employee.id} employee={employee} index={index} deleteEmployee={this.props.deleteHandler} editEmployee={this.props.editHandler}/>
                  )
                })
              )
        );
    }
}
 
export default Search;