import React, { Component } from 'react';
import { Link } from  "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';

class TransactionPeriod extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Helpline</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-calendar-alt"></i> Transaction Period</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Get the transaction details for a specific business based on a defined date range.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row">
                            <div class="col-md-10 mx-auto">
                            <div class="card ">    
                                <div class="card-header mx-auto">
                                    <h4 class="card-title text-center" style={{color: "#153254"}}> <i className="fas fa-calendar-alt"></i> Define Transaction Period</h4>
                                </div>                    
                                <div class="card-body ">  
                                    <div class="tab-content tab-space col-md-9 mx-auto">
                                        <div class="tab-pane active">
                                            <div className="row">
                                                <div class="col-md-12">
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <label>Start Date</label>
                                                            <input type="date" class="form-control" name="startDate"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <label>End Date</label>
                                                            <input type="date" class="form-control" name="endDate"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <label>Business</label><br/>
                                                            <select class="selectpicker form-control" style={{backgroundColor: "#000000"}} data-style="btn btn-primary btn-round" title="Select Name">
                                                                <option value="">FashionHub</option>
                                                                <option value="">KNUST</option>
                                                                <option value="">Car Rentals</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            {/* <button className=""></button> */}
                                                            <Link to="/dashboard/transaction-period/30493sjks29083wj" className="col-md-3 btn btn-primary">Submit</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <Footer />
            </div>
        </div>
        )
    }
}

export default TransactionPeriod;