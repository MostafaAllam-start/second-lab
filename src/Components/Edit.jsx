import React, { Component } from 'react';
import axios from 'axios';
class Edit extends Component { 
    state = {
        employee:null,
    }
    changeHandler = (e) => {
        let employee = this.state.employee;
        if(employee)
            employee[e.target.name] = e.target.value;
        this.setState({employee});
    }
    editHandler = () => {
        const employee = this.state.employee;
        this.props.onEdit(employee);
        this.props.history.push('/home');
    }
    async componentDidMount(){
        const {data} = await axios.get(`http://localhost:3000/employees/${this.props.match.params.id}`);
        this.setState({employee:data});
    }
    render() { 
        return (
            <div>
                <div className="mb-3">
                    <label className="form-label" htmlFor='Name'>Name</label>
                    <input type="text" className="form-control" id="Name" name="Name" onChange={this.changeHandler} value={this.state.employee ? this.state.employee.Name : ""}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor='Age'>Age</label>
                    <input type="number" className="form-control" id="Age" name="Age" onChange={this.changeHandler} value={this.state.employee ? this.state.employee.Age: 0}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor='Salary'>Salary</label>
                    <input type="number" className="form-control" id='salary' name="Salary" onChange={this.changeHandler} value={this.state.employee ? this.state.employee.Salary: 0}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor='Department'>Department</label>
                    <input type="text" className="form-control" id='Department' name="Department" onChange={this.changeHandler} value={this.state.employee ? this.state.employee.Department: ""}/>
                </div>
                <input type={"button"} value="Save" className="btn btn-primary d-block mx-auto" style={{width:'100px'}} onClick={this.editHandler} />
            </div>
        );
    }
}
 
export default Edit;