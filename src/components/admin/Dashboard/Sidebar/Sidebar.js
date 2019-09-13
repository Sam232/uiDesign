import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

class Sidebar extends Component {
    state = {}

    render() {
        return (
            <div className="sidebar" style={{backgroundColor: "#183558"}}> 

                <div className="logo">
                    <a href="#" className="simple-text logo-mini">
                        <img src={this.props.logo} alt="Logo" />
                    </a>
            
                    <a href="#" className="simple-text logo-normal">
                      <strong>Manilla</strong>
                    </a>                    
                </div>
    
                <div className="sidebar-wrapper" id="sidebar-wrapper">
                    
                    <div className="user">
                        <div className="photo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                <span>
                                    James Amos
                                </span>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li> 
                        <Link to="/dashboard/statistics/today-stat">
                            
                            <i className="now-ui-icons design_app"></i>
                            
                            <p>Dashboard</p>
                        </Link>               
                        </li>

                        <li>
                            <Link to="/dashboard/transaction-period">
                                <i className="fas fa-calendar-alt"></i>
                            <p>Transaction Period</p>
                            </Link>                      
                        </li>
                        
                        <li>
                            <Link to="/dashboard/service-requests">                            
                                <i className="now-ui-icons business_badge"></i>
                                <p>List Service Request</p>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/dashboard/registered-businesses">
                                <i className="fa fa-university"></i>
                            <p>Manage Businesses</p>
                            </Link>                      
                        </li>
                        <li>                        
                            <Link to="/dashboard/tracked-checkouts">
                            
                                <i className="now-ui-icons users_single-02"></i>
                            
                            <p>Manage Checkouts</p>
                            </Link>                      
                        </li>
                        <li>                        
                            <Link to="/dashboard/user-supports">
                            
                                <i className="fas fa-headset"></i>
                            
                            <p>User Support</p>
                            </Link>                      
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar