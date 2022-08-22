import React, { Component } from 'react';

import { Link} from "react-router-dom";
class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="nav-item">
                        <Link className="navbar-brand" to={`/home`}>Home</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Nav;