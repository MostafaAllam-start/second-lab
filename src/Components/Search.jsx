import React, { Component } from 'react';
import Employee from './Employee';

class Search extends Component {
  state = {
    searchEmployees: this.props.searchEmployees
  }
  render() { 
      return (
          this.state.searchEmployees.length === 0?
              <tr ><td colSpan="7"><h3 className="text-center text-warning">oopps! we can't find such employee.</h3></td></tr> 
            :
            this.state.searchEmployees.map((employee) =>{
              return(
                <Employee key={employee.id} employee={employee} deleteEmployee={this.props.deleteHandler} editEmployee={this.props.editHandler}/>
                )
              }
            )
      );
  }
}
 
export default Search;