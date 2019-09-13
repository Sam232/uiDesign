import React, { Component } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import logo from "../../../manilla.png";
import Navbar from "../../Dashboard/Navbar/Navbar";
import Footer from '../../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import "./Transaction.css";

class SuccessfulTransactions extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Successful Transactions</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title" style={{color: "#153254"}}><i className="fa fa-check-circle"></i> Successful Transactions</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Transactions that have been successfully processed.</p>
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
                                                    <th>Customer ID</th>
                                                    <th>Transaction ID</th>
                                                    <th>Payment Method</th>
                                                    <th>Date Occured</th>
                                                    <th>Business</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Customer ID</th>
                                                    <th>Transaction ID</th>
                                                    <th>Payment Method</th>
                                                    <th>Date Occured</th>
                                                    <th>Business</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>301</td>
                                                    <td>MTN Mobile Money</td>
                                                    <td>28/07/19</td>
                                                    <td>KNUST</td>
                                                </tr>
                                                <tr>
                                                    <td>201</td>
                                                    <td>401</td>
                                                    <td>Vodafone Cash</td>
                                                    <td>28/07/19</td>
                                                    <td>FashionHub</td>
                                                </tr>
                                                <tr>
                                                    <td>005</td>
                                                    <td>445</td>
                                                    <td>Master Card</td>
                                                    <td>29/07/19</td>
                                                    <td>Car Rentals</td>
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

export default SuccessfulTransactions;
