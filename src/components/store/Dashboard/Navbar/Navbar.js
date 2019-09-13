import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
    state = {}
    
    render() {
        const navbarName = this.props.navbarName ? this.props.navbarName : "";

        return (
            <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-wrapper">

                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        
                        <a className="navbar-brand" href="#pablo">Manilla Transactions Dashboard</a>
                    </div>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                
                    <div className="collapse navbar-collapse justify-content-end container" style={{backgroundColor: "#23466E"}} id="navigation">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="now-ui-icons media-2_sound-wave"></i> Transaction Statistics
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor: "#23466E"}} aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/business/dashboard/statistics/today-stat" className="dropdown-item text-white"><i className="fa fa-calendar-alt"></i> Today Statistics</Link>
                                    <Link to="/business/dashboard/statistics/yesterday-stat" className="dropdown-item text-white"><i className="fa fa-calendar-alt"></i> Yesterday Statistics</Link>
                                    <Link to="/business/dashboard/statistics/month-stat" className="dropdown-item text-white"><i className="fa fa-calendar-alt"></i> Month Statistics</Link>
                                    <Link to="/business/dashboard/statistics/year-stat" className="dropdown-item text-white"><i className="fa fa-calendar-alt"></i> Year Statistics</Link>
                                </div>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="now-ui-icons users_single-02"></i> User
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor: "#23466E"}} aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item text-white" to="/business/dashboard/update"><i className="fa fa-user"></i>My Profile</Link>
                                    <Link className="dropdown-item text-white" to="/business/login"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                                </div>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    navbarName: PropTypes.object
}

export default Navbar;