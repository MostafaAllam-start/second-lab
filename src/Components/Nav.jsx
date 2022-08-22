import React, { Component } from 'react';

import {NavLink, Link} from "react-router-dom";
class Nav extends Component {
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
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to={`/home`}>Navbar</Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`/home`}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`/add`}>AddEmployee</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex" role="search">
                                <input className="form-control me-2" type="text" placeholder="Search" name="Search" onChange={this.changeHandler}/>
                                <button className="btn btn-outline-success" 
                                onClick={() => this.props.history.push(`search/${this.state.Search}`)}>Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
 
export default Nav;