import React, { Component } from 'react';

class AddEmployee extends Component {
    state = {
        Name:null,
        Age:null,
        Salary:null,
        Department:null,
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    addHandler = () => {
        let newEmployee = {
            ID: this.props.Count,
            Name: this.state.Name,
            Age: this.state.Age,
            Salary: this.state.Salary,
            Department: this.state.Department,
        }
        this.props.addEmployee(newEmployee);
    }
    render() { 
        return (
            <div className="border border-1 mt-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="Name" onChange={this.changeHandler}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" name="Age" onChange={this.changeHandler}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control" name="Salary" onChange={this.changeHandler}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input type="text" className="form-control" name="Department" onChange={this.changeHandler}/>
                </div>
                <input type={"button"} value="ADD" className="btn btn-primary d-block mx-auto" style={{width:'100px'}} onClick={this.addHandler} />
            </div>
        );
    }
}
 
export default AddEmployee;