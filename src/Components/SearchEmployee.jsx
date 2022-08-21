import React, { Component } from 'react';

class SearchEmployee extends Component {
    state = {  
        Search:"",
    } 
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        
    }
    render() { 
        return (
            <div className="col-9 d-flex justify-content-end">
                <input className="me-2 " type="text" placeholder="Search" name="Search" onChange={this.changeHandler}/>
                <button className="btn btn-outline-success" type="submit" onClick={() => this.props.searchEmployee(this.state.Search)}>Search</button>
            </div>
        );
    }
}
 
export default SearchEmployee;