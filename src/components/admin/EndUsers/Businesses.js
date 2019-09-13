import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import "./EndUser.css";

class Businesses extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Businesses</span>} />
                    <div className="panel-header bg-danger" > 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-university"></i> Registered Businesses</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Registration details of all registered businesses.</p>
                        </div>  
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="statistics">
                                                <div className="icon icon-primary">                        
                                                    <div className="info" >
                                                        <div className="icon icon-primary">
                                                            <h5 className="stats-title" style={{color: "#23466F"}}> <i class="far fa-address-card"></i> Businesses Personal Details</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Date Registered</th>
                                                    <th>Account Status</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Date Registered</th>
                                                    <th>Account Status</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                    
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>FashionHub</td>
                                                    <td>E-commerce</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td>21/06/19</td>
                                                    <td><span className="text-success"><i className="fas fa-exclamation-circle"></i> Activated</span></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/business/1" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>KNUST</td>
                                                    <td>Institution</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td>21/06/19</td>
                                                    <td><span className="text-danger"><i className="fas fa-exclamation-circle"></i> Deactivated</span></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/business/2" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Car Rentals</td>
                                                    <td>Institution</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td>21/06/19</td>
                                                    <td><span className="text-success"><i className="fas fa-exclamation-circle"></i> Activated</span></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/business/3" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>ElectricalsHub</td>
                                                    <td>E-commerce</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td>21/06/19</td>
                                                    <td><span className="text-danger"><i className="fas fa-exclamation-circle"></i> Deactivated</span></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/business/4" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Businesses;
