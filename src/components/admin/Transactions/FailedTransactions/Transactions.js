import React, { Component } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import logo from "../../../manilla.png";
import Navbar from "../../Dashboard/Navbar/Navbar";
import Footer from '../../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import "./Transaction.css";

class FailedTransactions extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Failed Transactions</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-exclamation-triangle"></i> Failed Transactions</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Transactions that have failed during processing.</p>
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
                                                            <h5 className="stats-title"> <i class="fas fa-receipt"></i> Transaction Details</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Transaction Type</th>
                                                    <th>Date Occured</th>
                                                    <th>User Type</th>
                                                    <th>Email Address</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Transaction Type</th>
                                                    <th>Date Occured</th>
                                                    <th>User Type</th>
                                                    <th>Email Address</th>
                                                    <th class="disabled-sorting ">Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Mobile Money Transaction</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <th>fashionHub@mail.com</th>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/failed-transaction/1" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Mobile Money Transaction</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <th>fashionHub@mail.com</th>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/failed-transaction/2" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Credit Card Transaction</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <th>fashionHub@mail.com</th>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/failed-transaction/3" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Mobile Money Transaction</td>
                                                    <td>28/07/19</td>
                                                    <td>Business</td>
                                                    <th>fashionHub@mail.com</th>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/failed-transaction/4" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>005</td>
                                                    <td>Credit Card Transaction</td>
                                                    <td>29/07/19</td>
                                                    <td>Client</td>
                                                    <th>jmail@mail.com</th>
                                                    <td class="text-left">
                                                        <Link to="/dashboard/failed-transaction/5" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
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

export default FailedTransactions;
