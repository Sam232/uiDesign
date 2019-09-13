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
                                        <table id="datatable" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Occured</th>
                                                    <th>Payment Method Used</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Occured</th>
                                                    <th>Payment Method Used</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>020</td>
                                                    <td>02/07/19</td>
                                                    <td>MTN Mobile Money</td>
                                                    <td class="text-left">
                                                        <Link to="/business/dashboard/failed-transaction/1" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>201</td>
                                                    <td>120</td>
                                                    <td>02/07/19</td>
                                                    <td>AirtelTigo Cash</td>
                                                    <td class="text-left">
                                                        <Link to="/business/dashboard/failed-transaction/2" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>401</td>
                                                    <td>620</td>
                                                    <td>03/07/19</td>
                                                    <td>MTN Mobile Money</td>
                                                    <td class="text-left">
                                                        <Link to="/business/dashboard/failed-transaction/3" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>01</td>
                                                    <td>0201</td>
                                                    <td>02/07/19</td>
                                                    <td>Vodafone Cash</td>
                                                    <td class="text-left">
                                                        <Link to="/business/dashboard/failed-transaction/4" class="btn btn-danger btn-sm">View More <i class="far fa-address-card"></i></Link>
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
