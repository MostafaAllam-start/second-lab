import React, { Component } from 'react';
import SearchEmployee from './SearchEmployee';
class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <nav className="navbar bg-light row">
                    <div className="container-fluid col-1">
                        Navbar
                    </div>
                    <SearchEmployee searchEmployee={this.props.searchHandler}/>
                </nav>
            </>
        );
    }
}
 
export default Nav;