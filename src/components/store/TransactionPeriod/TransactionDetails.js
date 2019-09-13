import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MonthChart from "../Dashboard/Chart/MonthChart";

class TransactionDetails extends Component {
    state = {}

    render() {
        return (
            <div className="content mt-3">
                <div class="row">
                    <div class="col-lg-6 col-sm-6">
                        <div class="card card-stats">                    
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-info icon-circle">
                                                <Link to="/dashboard/transactions/mobile-money">
                                                    <i class="fas fa-mobile-alt text-info"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title"><span>GHS</span>1,000</h3>
                                            <h6 class="stats-title">Mobile Money</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="card-footer bg-info">
                                <div class="stats text-white">
                                    <i class="fas fa-mobile-alt"></i> Transactions Performed
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="card card-stats">                    
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-success icon-circle">
                                                <Link to="/dashboard/transactions/debit-card">
                                                <i class="far fa-credit-card text-success"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title"><span>GHS</span>3,000</h3>
                                            <h6 class="stats-title">Debit Card</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>                   
                            <hr/> 
                            <div class="card-footer bg-success">
                                <div class="stats text-white">
                                    <i class="far fa-credit-card"></i> Transactions Performed
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
                <MonthChart />
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
                                                            <h5 className="stats-title" style={{color: "#163356"}}> <i class="fas fa-receipt"></i> Transaction History </h5>
                                                            
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
                                                    <th>Customer ID</th>
                                                    <th>Date Processed</th>
                                                    <th>Payment Method</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Processed</th>
                                                    <th>Payment Method</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>020</td>
                                                    <td>02/07/19</td>
                                                    <td>Visa Card</td>
                                                    <td>61</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>201</td>
                                                    <td>120</td>
                                                    <td>02/07/19</td>
                                                    <td>Master Card</td>
                                                    <td>601</td>
                                                </tr>
                                                <tr>
                                                    <td>401</td>
                                                    <td>620</td>
                                                    <td>03/07/19</td>
                                                    <td>MTN Mobile Money</td>
                                                    <td>361</td>
                                                </tr>
                                                <tr>
                                                    <td>01</td>
                                                    <td>0201</td>
                                                    <td>02/07/19</td>
                                                    <td>Vodafone Cash</td>
                                                    <td>31</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-primary"><i className="fa fa-download"></i> Generate Report</button>
                                    </div>
                                </div>
                            </div> 
                        </div> 
            </div>
        );
    }
}

export default TransactionDetails;