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
                                                    <Link to="/dashboard/transactions/debit-card/visacard" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
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
                                                    <Link to="/dashboard/transactions/debit-card/mastercard" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
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
                                                            <h5 className="stats-title"> <i class="fas fa-receipt"></i> Transaction History</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Total Amount(GHS)</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Total Amount(GHS)</th>
                                                    <th>Date</th>                                                
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>FashionHub</td>
                                                    <td>Fashion</td>
                                                    <td><a href="http://www.fashionhub.com">Access</a></td>
                                                    <td>61</td>
                                                    <td>02/03/19</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>KNUST</td>
                                                    <td>Institution</td>
                                                    <td><a href="http://www.knust.com">Access</a></td>
                                                    <td>27</td>
                                                    <td>01/03/19</td>
                                                </tr>
                                                <tr>
                                                    <td>CarsSpace</td>
                                                    <td>Auto Mechanic Shop</td>
                                                    <td><a href="http://www.carspace.com">Access</a></td>
                                                    <td>22</td>
                                                    <td>05/03/19</td>
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
