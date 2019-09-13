import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import "./Support.css";

class Supports extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Customer Support</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-headset"></i> Customer Support</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Support request from both businesses and clients.</p>
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
                                                            <h5 className="stats-title" style={{color: "#153254"}}> <i class="fas fa-envelope-open-text"></i> Support Details</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Support ID</th>
                                                    <th>Support Title</th>
                                                    <th>Date Sent</th>
                                                    <th>User Type</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Support ID</th>
                                                    <th>Support Title</th>
                                                    <th>Date Sent</th>
                                                    <th>User Type</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Transaction Error</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/user-support/1" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>002</td>
                                                    <td>Login Error</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/user-support/2" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>003</td>
                                                    <td>Transaction Error</td>
                                                    <td>28/07/19</td>
                                                    <td>Client</td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/user-support/3" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>004</td>
                                                    <td>Transaction Error</td>
                                                    <td>28/07/19</td>
                                                    <td>Client</td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/user-support/4" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>005</td>
                                                    <td>Transaction Error</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/user-support/5" class="btn btnBgCl btn-sm">View More <i class="far fa-address-card"></i></Link>
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

export default Supports;
