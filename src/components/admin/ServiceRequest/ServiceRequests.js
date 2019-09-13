import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import "./ServiceRequest.css";

class ServiceRequests extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Service Request</span>} />
                    <div className="panel-header panel-header"> 
                    <div className="header text-center">
                            <h2 className="title"><i className="fas fa-users-cog"></i> Service Request</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Service requests received from interested businesses.</p>
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
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>FashionHub</td>
                                                    <td>E-commerce</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/service-request/1" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>KNUST</td>
                                                    <td>Institution</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/service-request/1" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Car Rentals</td>
                                                    <td>E-commerce</td>
                                                    <td><Link to="#">Visit</Link></td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/service-request/1" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
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

export default ServiceRequests;
