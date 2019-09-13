import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from "../Dashboard/Footer/Footer";
import { Link } from "react-router-dom";
import airtelTigo from "./airteltigo.jpg";
import mtn from "./mtn.jpg";
import vodafone from "./vodafone.png";
import glo from "./glo.jpg";

class MobileMoney extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Mobile Money</span>} />
                    <div class="panel-header panel-header"> 
                        <div class="header text-center">
                            <h2 class="title"><i className="fas fa-mobile-alt"></i> E-Money Transactions</h2>
                            <p class="category" style={{marginTop: "-25px"}}>Transactions from all the registered stores.</p>
                        </div>  
                    </div>
                    <div class="content">
                    <div className="row">
                    <div className="col-md-12">
                    {/*Transaction Stat*/}
                        <div className="card card-stats">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/business/dashboard/transactions/mobile-money/mtn" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info" >
                                                    <div className="icon icon-primary">
                                                        <img src={mtn} style={{width: "110px", height: "80px"}} />    
                                                    </div>
                                                    <h3 className="info-title"></h3>
                                                    <h6 className="stats-title">MTN Mobile Money</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/business/dashboard/transactions/mobile-money/airteltigo" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-success">
                                                        <img src={airtelTigo} style={{width: "110px", height: "80px"}} />
                                                    </div>
                                                    <h3 className="info-title"></h3>
                                                    <h6 className="stats-title">AirtelTigo Cash</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/business/dashboard/transactions/mobile-money/vodafone" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-info">
                                                        <img src={vodafone} style={{width: "110px", height: "80px"}} />
                                                    </div>
                                                    <h3 className="info-title"></h3>
                                                    <h6 className="stats-title">Vodafone Cash</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/business/dashboard/transactions/mobile-money/glo" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-info">
                                                        <img src={glo} style={{width: "110px", height: "80px"}} />
                                                    </div>
                                                    <h3 className="info-title"></h3>
                                                    <h6 className="stats-title">Glo Cash</h6>
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
                                                            <h5 className="stats-title"  style={{color: "#163356"}}> <i class="fas fa-receipt"  style={{color: "#163356"}}></i> Transaction History</h5>
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
                                                    <th>Payment Type</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>020</td>
                                                    <td>02/07/19</td>
                                                    <td>MTN Mobile Money</td>
                                                    <td>61</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>201</td>
                                                    <td>120</td>
                                                    <td>02/07/19</td>
                                                    <td>AirtelTigo Cash</td>
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

export default MobileMoney;
