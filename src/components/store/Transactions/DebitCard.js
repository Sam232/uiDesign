import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";
import masterCard from "./mastercard.jpg";
import visaCard from "./visa.png";

class DebitCard extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> DebitCard</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="far fa-credit-card"></i> E-Money Transactions</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Transactions from all the registered stores.</p>
                        </div>  
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                            {/*Transaction Stat*/}
                                <div className="card card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="statistics">
                                                    <Link to="/business/dashboard/transactions/debit-card/visacard" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                        <div className="info" >
                                                            <div className="icon icon-primary">
                                                                <img src={visaCard} style={{width: "100px", height: "60px"}} />    
                                                            </div>
                                                            <h3 className="info-title"></h3>
                                                            <h6 className="stats-title">Visa Card Cash</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="statistics">
                                                    <Link to="/business/dashboard/transactions/debit-card/mastercard" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                        <div className="info">
                                                            <div className="icon icon-success">
                                                                <img src={masterCard} style={{width: "100px", height: "60px"}} />
                                                            </div>
                                                            <h3 className="info-title"></h3>
                                                            <h6 className="stats-title">Master Card Cash</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                            <h5 className="stats-title" style={{color: "#163356"}}> <i class="fas fa-receipt"></i> Transaction History</h5>
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
                                                    <th>Card Type</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Processed</th>
                                                    <th>Card Type</th>
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
                                                    <td>Master Card</td>
                                                    <td>361</td>
                                                </tr>
                                                <tr>
                                                    <td>01</td>
                                                    <td>0201</td>
                                                    <td>02/07/19</td>
                                                    <td>Visa Card</td>
                                                    <td>31</td>
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

export default DebitCard;
